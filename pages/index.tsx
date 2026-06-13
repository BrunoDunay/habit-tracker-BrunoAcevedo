import React, { useEffect, useState } from 'react'

type Habit = {
  id: string
  title: string
  created_at: string
}

export default function Home() {
  const [title, setTitle] = useState('')
  const [habits, setHabits] = useState<Habit[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchHabits()
  }, [])

  async function fetchHabits() {
    setLoading(true)
    try {
      const res = await fetch('/api/habits')
      if (!res.ok) throw new Error('Failed to fetch')
      const data = await res.json()
      setHabits(data || [])
    } catch (err) {
      console.error('Error fetching habits', err)
    } finally {
      setLoading(false)
    }
  }

  async function createHabit(e: React.FormEvent) {
    e.preventDefault()
    if (!title) return
    try {
      const res = await fetch('/api/habits', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title }),
      })
      if (!res.ok) throw new Error('Create failed')
      setTitle('')
      fetchHabits()
    } catch (err) {
      console.error('Error creating habit', err)
    }
  }

  async function deleteHabit(id: string) {
    try {
      const res = await fetch(`/api/habits/${id}`, { method: 'DELETE' })
      if (!res.ok && res.status !== 204) throw new Error('Delete failed')
      fetchHabits()
    } catch (err) {
      console.error('Error deleting habit', err)
    }
  }

  return (
    <main style={{ padding: 20 }}>
      <h1>Habit Tracker (demo)</h1>
      <form onSubmit={createHabit}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Nuevo hábito" />
        <button type="submit">Crear</button>
      </form>

      <h2>Hábitos</h2>
      {loading ? <div>Cargando...</div> : (
        <ul>
          {habits.map(h => (
            <li key={h.id}>
              {h.title} — <small>{new Date(h.created_at).toLocaleString()}</small>
              <button style={{ marginLeft: 8 }} onClick={() => deleteHabit(h.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}
