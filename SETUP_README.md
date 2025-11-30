# MyTemperament - Personality Assessment Application

A comprehensive temperament assessment application built with React, TypeScript, Vite, and Supabase. Discover your unique personality blend through a scientifically-designed quiz and receive personalized insights.

## 🚀 Features

- **30-Question Assessment**: Comprehensive quiz covering emotional, social, work, motivation, cognitive, and lifestyle domains
- **Four Temperament Types**: Sanguine, Choleric, Melancholic, Phlegmatic
- **SWOT Analysis**: Personalized strengths, weaknesses, opportunities, and threats
- **Career Guidance**: Tailored career paths and business opportunities
- **Progress Persistence**: Auto-save quiz progress to prevent data loss
- **Admin Dashboard**: Manage quiz submissions and user data
- **Responsive Design**: Mobile-first, fully responsive UI with Tailwind CSS
- **Accessible**: WCAG compliant with proper ARIA labels and keyboard navigation

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, shadcn/ui components
- **Backend**: Supabase (PostgreSQL, Authentication, Row Level Security)
- **Form Validation**: Zod
- **State Management**: React Query
- **Deployment**: Vercel

## 📋 Prerequisites

- Node.js 20.x or higher
- npm or bun
- Supabase account
- Vercel account (for deployment)

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Techifice/mytemperament.git
   cd mytemperament
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   bun install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and add your Supabase credentials:
   ```env
   VITE_SUPABASE_PROJECT_ID=your_project_id
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_PUBLISHABLE_KEY=your_publishable_key
   ```

4. **Set up Supabase**
   
   Run the migrations in your Supabase project:
   - Navigate to SQL Editor in Supabase dashboard
   - Run `supabase/migrations/20251130215403_132a5300-70c9-4eef-8619-a49207c82d64.sql`
   - Run `supabase/migrations/20251130220000_grant_admin_access.sql`

5. **Start development server**
   ```bash
   npm run dev
   ```
   
   The app will be available at `http://localhost:8080`

## 🗄️ Database Schema

### Tables

**user_roles**
- `id`: UUID (Primary Key)
- `user_id`: UUID (Foreign Key to auth.users)
- `role`: ENUM('admin', 'user')
- `created_at`: Timestamp

**quiz_submissions**
- `id`: UUID (Primary Key)
- `name`: Text
- `email`: Text
- `primary_temperament`: Text
- `secondary_temperament`: Text
- `scores`: JSONB
- `payment_status`: Text
- `payment_reference`: Text
- `created_at`: Timestamp
- `updated_at`: Timestamp

## 🔐 Admin Access

The default admin email is configured as `admin@gmail.com`. This user will automatically receive admin privileges when they sign up.

To change this:
1. Edit `src/config/constants.ts` and update `ADMIN_EMAILS`
2. Update the migration file `supabase/migrations/20251130220000_grant_admin_access.sql`

## 🚀 Deployment

### Vercel Deployment

1. **Install Vercel CLI** (if not already installed)
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```
   
   For production:
   ```bash
   vercel --prod
   ```

4. **Set Environment Variables in Vercel**
   - Go to your project settings in Vercel dashboard
   - Add the following environment variables:
     - `VITE_SUPABASE_PROJECT_ID`
     - `VITE_SUPABASE_URL`
     - `VITE_SUPABASE_PUBLISHABLE_KEY`

### GitHub Actions CI/CD

The repository includes a GitHub Actions workflow for automatic deployment:

1. **Add Secrets to GitHub**
   
   Go to Settings > Secrets and add:
   - `VERCEL_TOKEN`: Your Vercel API token
   - `VERCEL_ORG_ID`: Your Vercel organization ID
   - `VERCEL_PROJECT_ID`: Your Vercel project ID
   - `VITE_SUPABASE_PROJECT_ID`
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_PUBLISHABLE_KEY`

2. **Automatic Deployment**
   
   Push to `main` branch triggers automatic deployment to production.

## 📁 Project Structure

```
mytemperament/
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── ui/          # shadcn/ui components
│   │   ├── ErrorBoundary.tsx
│   │   ├── QuestionCard.tsx
│   │   └── ...
│   ├── config/          # Configuration files
│   │   ├── constants.ts
│   │   └── env.ts
│   ├── data/            # Static data
│   │   ├── quizQuestions.ts
│   │   └── temperamentDetails.ts
│   ├── hooks/           # Custom React hooks
│   ├── integrations/    # Third-party integrations
│   │   └── supabase/
│   ├── lib/             # Utility libraries
│   │   ├── utils.ts
│   │   └── validations.ts
│   ├── pages/           # Page components
│   │   ├── Index.tsx
│   │   ├── Quiz.tsx
│   │   ├── Results.tsx
│   │   └── ...
│   ├── types/           # TypeScript types
│   ├── utils/           # Utility functions
│   │   ├── scoring.ts
│   │   └── storage.ts
│   ├── App.tsx
│   └── main.tsx
├── supabase/
│   └── migrations/      # Database migrations
├── public/
├── .env.example
├── vercel.json
└── package.json
```

## 🧪 Testing

```bash
# Run linter
npm run lint

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🔒 Security Features

- Environment variable validation on startup
- Input validation with Zod schemas
- Row Level Security (RLS) in Supabase
- Safe localStorage wrapper with error handling
- Error boundaries for graceful error handling
- CSRF protection through Supabase
- Secure session management

## 📝 Key Improvements Implemented

1. ✅ Security: Fixed .gitignore, environment validation
2. ✅ Type Safety: Fixed TypeScript deprecation warnings
3. ✅ Error Handling: Added ErrorBoundary, storage utilities
4. ✅ Performance: Lazy loading, memoization, code splitting
5. ✅ UX: Progress persistence, auto-save, loading states
6. ✅ Validation: Zod schemas for all forms
7. ✅ Accessibility: ARIA labels, keyboard navigation
8. ✅ SEO: Meta tags, Open Graph, Twitter cards
9. ✅ CI/CD: GitHub Actions workflow, Vercel integration
10. ✅ Admin: Auto-grant admin role to specified email

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For issues or questions:
- Create an issue on GitHub
- Contact: support@mytemperament.com

## 🗺️ Roadmap

- [ ] Add PDF report generation
- [ ] Implement payment gateway for premium features
- [ ] Add email notifications
- [ ] Create mobile app (React Native)
- [ ] Add multi-language support
- [ ] Implement advanced analytics dashboard
- [ ] Add comparison features (compare with others)

---

Built with ❤️ using React, TypeScript, and Supabase
