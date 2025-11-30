-- Migration to add default admin user
-- This should be run after the initial migration

-- Insert admin role for admin@gmail.com
-- Note: This requires the user to sign up first, then this migration grants admin access

-- Function to grant admin role to specific email
create or replace function public.grant_admin_to_email(_email text)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  _user_id uuid;
begin
  -- Find user by email
  select id into _user_id
  from auth.users
  where email = _email
  limit 1;

  -- If user exists, grant admin role
  if _user_id is not null then
    insert into public.user_roles (user_id, role)
    values (_user_id, 'admin')
    on conflict (user_id, role) do nothing;
    
    raise notice 'Admin role granted to %', _email;
  else
    raise notice 'User with email % not found. They need to sign up first.', _email;
  end if;
end;
$$;

-- Grant admin to the specified email
select public.grant_admin_to_email('admin@gmail.com');

-- Create a trigger to automatically grant admin role when admin@gmail.com signs up
create or replace function public.auto_grant_admin_role()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  -- Check if the new user's email matches admin email
  if new.email = 'admin@gmail.com' then
    insert into public.user_roles (user_id, role)
    values (new.id, 'admin')
    on conflict (user_id, role) do nothing;
  end if;
  
  return new;
end;
$$;

-- Create trigger on auth.users table
drop trigger if exists on_auth_user_created_grant_admin on auth.users;
create trigger on_auth_user_created_grant_admin
  after insert on auth.users
  for each row
  execute function public.auto_grant_admin_role();

-- Add helpful comment
comment on function public.grant_admin_to_email is 'Grants admin role to user with specified email address';
comment on function public.auto_grant_admin_role is 'Automatically grants admin role to admin@gmail.com when they sign up';
