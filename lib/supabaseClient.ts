import { Database } from '@/supabase/database.types';
import { createClient } from '@supabase/supabase-js';

// 環境変数チェック
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '';

if (supabaseUrl === '' || supabaseKey === '') {
  throw new Error(`URL or Anon ENV not set for Server - ${supabaseKey}`);
}

export const supabase = createClient<Database>(supabaseUrl, supabaseKey, {
  auth: { persistSession: false },
});
