import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Create a mock client if environment variables are missing
const createMockClient = () => ({
  auth: {
    getSession: () => Promise.resolve({ data: { session: null }, error: null }),
    onAuthStateChange: (callback: any) => {
      // Call the callback immediately with null session to initialize properly
      setTimeout(() => callback('SIGNED_OUT', null), 0);
      return { data: { subscription: { unsubscribe: () => {} } } };
    },
    signInWithPassword: () => Promise.resolve({ 
      data: { user: null, session: null },
      error: { message: 'Supabase not connected. Please connect Supabase first.' } 
    }),
    signUp: () => Promise.resolve({ 
      data: { user: null, session: null },
      error: { message: 'Supabase not connected. Please connect Supabase first.' } 
    }),
    signOut: () => Promise.resolve({ 
      error: { message: 'Supabase not connected. Please connect Supabase first.' } 
    }),
  }
});

export const supabase = (supabaseUrl && supabaseAnonKey) 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : createMockClient();