-- Create enum for app roles
create type public.app_role as enum ('admin', 'user');

-- Create user_roles table for role management
create table public.user_roles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  role app_role not null default 'user',
  created_at timestamp with time zone default now() not null,
  unique (user_id, role)
);

-- Enable RLS on user_roles
alter table public.user_roles enable row level security;

-- Create security definer function to check roles
create or replace function public.has_role(_user_id uuid, _role app_role)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.user_roles
    where user_id = _user_id
      and role = _role
  )
$$;

-- Create quiz_submissions table to store user quiz results
create table public.quiz_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  primary_temperament text not null,
  secondary_temperament text not null,
  scores jsonb not null,
  payment_status text not null default 'unpaid',
  payment_reference text,
  created_at timestamp with time zone default now() not null,
  updated_at timestamp with time zone default now() not null
);

-- Enable RLS on quiz_submissions
alter table public.quiz_submissions enable row level security;

-- Create policies for quiz_submissions
create policy "Anyone can insert their own submission"
  on public.quiz_submissions
  for insert
  with check (true);

create policy "Users can view their own submissions by email"
  on public.quiz_submissions
  for select
  using (email = (select raw_user_meta_data->>'email' from auth.users where id = auth.uid()));

create policy "Admins can view all submissions"
  on public.quiz_submissions
  for select
  using (public.has_role(auth.uid(), 'admin'));

create policy "Admins can update all submissions"
  on public.quiz_submissions
  for update
  using (public.has_role(auth.uid(), 'admin'));

-- Create updated_at trigger function
create or replace function public.update_updated_at_column()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

-- Add trigger for updated_at
create trigger update_quiz_submissions_updated_at
  before update on public.quiz_submissions
  for each row
  execute function public.update_updated_at_column();