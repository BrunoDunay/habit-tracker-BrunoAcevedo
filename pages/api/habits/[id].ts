import type { NextApiRequest, NextApiResponse } from 'next'
import { supabaseServer } from '../../../lib/supabaseServer'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query
  if (!id || Array.isArray(id)) return res.status(400).json({ error: 'invalid id' })
  try {
    if (req.method === 'GET') {
      const { data, error } = await supabaseServer.from('habits').select('*').eq('id', id).limit(1)
      if (error) return res.status(500).json({ error: error.message })
      return res.status(200).json(data?.[0] ?? null)
    }

    if (req.method === 'PUT') {
      const { title } = req.body
      if (!title || typeof title !== 'string') return res.status(400).json({ error: 'title is required' })
      const { data, error } = await supabaseServer.from('habits').update({ title }).eq('id', id).select()
      if (error) return res.status(500).json({ error: error.message })
      return res.status(200).json(data?.[0] ?? null)
    }

    if (req.method === 'DELETE') {
      const { error } = await supabaseServer.from('habits').delete().eq('id', id)
      if (error) return res.status(500).json({ error: error.message })
      return res.status(204).end()
    }

    res.setHeader('Allow', 'GET, PUT, DELETE')
    res.status(405).end(`Method ${req.method} Not Allowed`)
  } catch (err: any) {
    res.status(500).json({ error: err.message })
  }
}
