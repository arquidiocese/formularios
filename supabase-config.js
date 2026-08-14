// Conexão com o Supabase (projeto basilicariopreto)
const SUPABASE_URL = 'https://minoemexikhumganpnjz.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1pbm9lbWV4aWtodW1nYW5wbmp6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk4MDU4ODIsImV4cCI6MjA5NTM4MTg4Mn0.v_llJLvYnjzJZApZqxDgTd6LhiTnLj_Uj3I5f5rth0E';

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
