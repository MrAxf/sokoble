import type { NextRequest } from 'next/server'

import supabase from '../../supabase'

const baseDate = new Date('2022-01-01')

export const config = {
  runtime: 'experimental-edge',
}

export default async function handler(req: NextRequest) {
  const { count } = await supabase
    .from('levels')
    .select('*', { count: 'exact', head: true })
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const day = Math.ceil(
    (today.getTime() - baseDate.getTime()) / (1000 * 3600 * 24)
  )

  const levelNo = (day * 53) % count

  const { data } = await supabase
    .from('levels')
    .select('*')
    .range(levelNo + 1, levelNo + 1)
    .single()

  return new Response(JSON.stringify(data.level), {
    status: 200,
    headers: {
      'content-type': 'application/json',
      'cache-control': 'public, s-maxage=86400, stale-while-revalidate=600',
    },
  })
}
