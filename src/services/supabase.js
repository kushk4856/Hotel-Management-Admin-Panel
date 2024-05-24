import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://xjlsdepduwvvrjlopzux.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhqbHNkZXBkdXd2dnJqbG9wenV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ5Njc3NzMsImV4cCI6MjAzMDU0Mzc3M30.YrSDrU0XjYdC9JcwRJczwJDywYIMGUPxUKjY0Sk5-U8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
