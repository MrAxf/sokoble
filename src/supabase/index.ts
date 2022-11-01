import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SPABASE_KEY,
  { db: { schema: 'public' } }
)

export default supabase
