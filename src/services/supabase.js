import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://jrqmjqwkdfagssbapbxg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpycW1qcXdrZGZhZ3NzYmFwYnhnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk5NDEzOTgsImV4cCI6MjA0NTUxNzM5OH0.uFEJmIJg0ocEH6N_WXgxEGubgHVQC7F1N_UStAbwOBM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
