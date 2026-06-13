import type { NextApiRequest, NextApiResponse } from 'next'
import { supabaseServer } from '../../../lib/supabaseServer'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'GET') {
      const { data, error } = await supabaseServer.from('habits').select('*').order('created_at', { ascending: false })
      if (error) return res.status(500).json({ error: error.message })
      return res.status(200).json(data)
    }

    if (req.method === 'POST') {
      const { title } = req.body
      if (!title || typeof title !== 'string') return res.status(400).json({ error: 'title is required' })
      const { data, error } = await supabaseServer.from('habits').insert([{ title }]).select()
      if (error) return res.status(500).json({ error: error.message })
      return res.status(201).json(data?.[0] ?? null)
    }

    res.setHeader('Allow', 'GET, POST')
    res.status(405).end(`Method ${req.method} Not Allowed`)
  } catch (err: any) {
    res.status(500).json({ error: err.message })
  }
}
