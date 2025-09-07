import { createClient } from '@supabase/supabase-js'


let supabaseURL = 'https://ufmunskfeyijrmuqgbsg.supabase.co'
  let supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVmbXVuc2tmZXlpanJtdXFnYnNnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYxODkwNzIsImV4cCI6MjA3MTc2NTA3Mn0.GdBYvjFBp3SgjNcjKbK1nEuT2JNqx8mQlud0Wm27mko'

export const supabase = createClient(supabaseURL, supabaseKey)