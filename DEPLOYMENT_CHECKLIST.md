# MyTemperament Deployment Checklist

## Pre-Deployment

- [ ] All tests passing
- [ ] Linter showing no errors
- [ ] Environment variables configured in `.env`
- [ ] Database migrations run in Supabase
- [ ] Admin user created and tested

## Vercel Setup

- [ ] Vercel CLI installed (`npm i -g vercel`)
- [ ] Logged in to Vercel (`vercel login`)
- [ ] Project linked to Vercel (`vercel link`)

## Environment Variables in Vercel

Set these in Project Settings > Environment Variables:

- [ ] `VITE_SUPABASE_PROJECT_ID`
- [ ] `VITE_SUPABASE_URL`
- [ ] `VITE_SUPABASE_PUBLISHABLE_KEY`

## GitHub Secrets (for CI/CD)

Add these in Repository Settings > Secrets:

- [ ] `VERCEL_TOKEN`
- [ ] `VERCEL_ORG_ID`
- [ ] `VERCEL_PROJECT_ID`
- [ ] `VITE_SUPABASE_PROJECT_ID`
- [ ] `VITE_SUPABASE_URL`
- [ ] `VITE_SUPABASE_PUBLISHABLE_KEY`

## Post-Deployment

- [ ] Test quiz flow end-to-end
- [ ] Test admin login and dashboard
- [ ] Verify responsive design on mobile
- [ ] Check console for errors
- [ ] Test form validation
- [ ] Verify progress persistence
- [ ] Check SEO meta tags
- [ ] Test error boundaries

## Database Setup

Run these SQL commands in Supabase SQL Editor:

1. Initial schema migration:
   ```sql
   -- Run: supabase/migrations/20251130215403_*.sql
   ```

2. Grant admin access:
   ```sql
   -- Run: supabase/migrations/20251130220000_*.sql
   ```

3. Verify admin user:
   ```sql
   SELECT * FROM user_roles WHERE role = 'admin';
   ```

## Quick Deploy Commands

```bash
# Preview deployment
npm run deploy:preview

# Production deployment
npm run deploy:prod

# Or use the script
bash scripts/deploy.sh
```

## Troubleshooting

### Build fails
- Check Node.js version (requires 20.x+)
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Check for TypeScript errors: `npm run build`

### Environment variables not working
- Ensure they're prefixed with `VITE_`
- Restart dev server after changing .env
- Redeploy to Vercel after changing environment variables

### Admin login not working
- Verify user signed up with admin@gmail.com
- Check user_roles table in Supabase
- Run grant_admin migration if needed

### Quiz progress not saving
- Check browser localStorage is enabled
- Check console for storage errors
- Clear browser cache and try again
