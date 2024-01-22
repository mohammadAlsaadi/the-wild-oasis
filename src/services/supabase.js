import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://meiasgpbmdibonygoaan.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1laWFzZ3BibWRpYm9ueWdvYWFuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ0NDIwMzEsImV4cCI6MjAyMDAxODAzMX0.5NWiZdcIBhv669_KaOUxhfZ8BMO1pcwjQ272b2gc2dI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
