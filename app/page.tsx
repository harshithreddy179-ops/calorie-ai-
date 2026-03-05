'use client'

import { useState } from "react"

export default function Home() {

  const [image, setImage] = useState<File | null>(null)
  const [result, setResult] = useState("")

  const handleUpload = async () => {
    if (!image) return

    const formData = new FormData()
    formData.append("file", image)

    const res = await fetch("/api/analyze", {
      method: "POST",
      body: formData
    })

    const data = await res.json()
    setResult(data.result)
  }

  return (
    <main style={{padding:40}}>
      <h1>Calorie Intelligence AI</h1>

      <input
        type="file"
        onChange={(e)=>setImage(e.target.files?.[0] || null)}
      />

      <button onClick={handleUpload}>
        Analyze Food
      </button>

      <p>{result}</p>
    </main>
  )
}
