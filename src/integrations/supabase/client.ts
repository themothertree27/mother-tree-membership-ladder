// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://xodnxqknlogeojnyumeh.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhvZG54cWtubG9nZW9qbnl1bWVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI4NDgwNjUsImV4cCI6MjA1ODQyNDA2NX0.pOV1ViO5hvKWfsWagJM6hGg0EpdHeFcZtVjAJow4rTM";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);