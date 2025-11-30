/**
 * Environment variable validation and configuration
 * This ensures all required environment variables are present at startup
 */

interface EnvConfig {
  supabase: {
    projectId: string;
    url: string;
    publishableKey: string;
  };
}

function validateEnv(): EnvConfig {
  const requiredVars = {
    VITE_SUPABASE_PROJECT_ID: import.meta.env.VITE_SUPABASE_PROJECT_ID,
    VITE_SUPABASE_URL: import.meta.env.VITE_SUPABASE_URL,
    VITE_SUPABASE_PUBLISHABLE_KEY: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
  };

  const missingVars = Object.entries(requiredVars)
    .filter(([_, value]) => !value)
    .map(([key]) => key);

  if (missingVars.length > 0) {
    throw new Error(
      `Missing required environment variables:\n${missingVars.join('\n')}\n\nPlease check your .env file.`
    );
  }

  return {
    supabase: {
      projectId: requiredVars.VITE_SUPABASE_PROJECT_ID,
      url: requiredVars.VITE_SUPABASE_URL,
      publishableKey: requiredVars.VITE_SUPABASE_PUBLISHABLE_KEY,
    },
  };
}

export const env = validateEnv();
