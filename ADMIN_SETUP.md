# Admin Setup Instructions

## Granting Admin Access to admin@gmail.com

This guide will help you set up the admin user in your Supabase database.

---

## Method 1: Using Supabase Dashboard (Recommended)

1. **Go to Supabase Dashboard**
   - Navigate to https://supabase.com/dashboard
   - Select your project: `cecrwozsaeggmjigfbdt`

2. **Open SQL Editor**
   - Click on "SQL Editor" in the left sidebar
   - Click "+ New query"

3. **Run the Migration**
   - Copy the entire content of: `supabase/migrations/20251130220000_grant_admin_access.sql`
   - Paste it into the SQL editor
   - Click "Run" button

4. **Verify Success**
   Run this query to verify:
   ```sql
   SELECT * FROM user_roles WHERE role = 'admin';
   ```

---

## Method 2: Create Admin User Manually

If the migration doesn't work or you need to grant admin to a different email:

1. **User Must Sign Up First**
   - Go to your app: http://localhost:8080/admin/login
   - Click "Sign Up" or toggle to sign-up mode
   - Register with email: `admin@gmail.com`
   - Use a strong password

2. **Run This SQL Query**
   ```sql
   -- Find the user ID
   SELECT id, email FROM auth.users WHERE email = 'admin@gmail.com';
   
   -- Grant admin role (replace USER_ID with the actual UUID)
   INSERT INTO public.user_roles (user_id, role)
   VALUES ('USER_ID_HERE', 'admin')
   ON CONFLICT (user_id, role) DO NOTHING;
   ```

3. **Verify Admin Access**
   ```sql
   SELECT u.email, ur.role 
   FROM auth.users u
   JOIN user_roles ur ON u.id = ur.user_id
   WHERE ur.role = 'admin';
   ```

---

## Method 3: Using Function (After Migration Runs)

If you've run the migration and want to grant admin to additional emails:

```sql
-- Grant admin to any email
SELECT public.grant_admin_to_email('newemail@example.com');
```

**Note**: The user must sign up first before running this function.

---

## Automatic Admin Assignment

The migration includes a trigger that automatically grants admin role to `admin@gmail.com` when they sign up. This means:

1. User visits `/admin/login`
2. User clicks "Sign Up"
3. User registers with `admin@gmail.com`
4. **Admin role is automatically assigned** ✨
5. User can immediately access admin dashboard

---

## Testing Admin Access

1. **Sign Up/Login**
   ```
   URL: http://localhost:8080/admin/login
   Email: admin@gmail.com
   Password: [your-password]
   ```

2. **Access Dashboard**
   - After login, you should be redirected to `/admin/dashboard`
   - You should see all quiz submissions

3. **Troubleshooting**
   
   If login fails:
   - Check browser console for errors
   - Verify user exists in Supabase > Authentication > Users
   - Run verification query in SQL Editor:
     ```sql
     SELECT * FROM user_roles WHERE user_id = (
       SELECT id FROM auth.users WHERE email = 'admin@gmail.com'
     );
     ```
   - Ensure migration ran successfully

---

## Adding More Admin Users

To add additional admin users:

1. **Update Constants** (optional, for reference)
   Edit `src/config/constants.ts`:
   ```typescript
   export const ADMIN_EMAILS = [
     'admin@gmail.com',
     'newadmin@example.com',  // Add here
   ] as const;
   ```

2. **Update Migration** (for automatic assignment)
   Edit `supabase/migrations/20251130220000_grant_admin_access.sql`:
   ```sql
   if new.email = 'admin@gmail.com' OR new.email = 'newadmin@example.com' then
   ```

3. **Or Use SQL Function**
   ```sql
   SELECT public.grant_admin_to_email('newadmin@example.com');
   ```

---

## Security Recommendations

⚠️ **IMPORTANT SECURITY NOTES**

1. **Change Admin Email in Production**
   - Don't use `admin@gmail.com` in production
   - Use a real, secure email address
   - Use a strong, unique password

2. **Enable 2FA** (if available in Supabase)

3. **Regular Audits**
   ```sql
   -- List all admin users
   SELECT u.email, ur.created_at 
   FROM auth.users u
   JOIN user_roles ur ON u.id = ur.user_id
   WHERE ur.role = 'admin'
   ORDER BY ur.created_at DESC;
   ```

4. **Revoke Admin Access**
   ```sql
   -- Revoke admin from user
   DELETE FROM user_roles 
   WHERE user_id = (SELECT id FROM auth.users WHERE email = 'user@example.com')
   AND role = 'admin';
   ```

---

## Quick Commands Reference

### Check if user exists:
```sql
SELECT id, email, created_at FROM auth.users WHERE email = 'admin@gmail.com';
```

### Check admin users:
```sql
SELECT u.email, ur.role, ur.created_at
FROM auth.users u
JOIN user_roles ur ON u.id = ur.user_id
WHERE ur.role = 'admin';
```

### Grant admin manually:
```sql
INSERT INTO user_roles (user_id, role)
SELECT id, 'admin' FROM auth.users WHERE email = 'admin@gmail.com'
ON CONFLICT (user_id, role) DO NOTHING;
```

### Revoke admin:
```sql
DELETE FROM user_roles 
WHERE user_id = (SELECT id FROM auth.users WHERE email = 'admin@gmail.com')
AND role = 'admin';
```

---

## Need Help?

If you encounter issues:

1. Check Supabase logs: Dashboard > Logs
2. Check browser console for errors
3. Verify environment variables are set correctly
4. Ensure all migrations ran successfully
5. Try signing out and back in

---

**Setup Date**: November 30, 2025  
**Default Admin**: admin@gmail.com  
**Status**: Ready for use after migration ✅
