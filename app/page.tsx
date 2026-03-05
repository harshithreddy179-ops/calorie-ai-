"use client"

import { useState } from "react"

export default function Home() {

  const [file, setFile] = useState<File | null>(null)
  const [result, setResult] = useState("")

  async function analyzeImage() {

    if (!file) return

    const formData = new FormData()
    formData.append("file", file)

    const res = await fetch("/api/analyze", {
      method: "POST",
      body: formData
    })

    const data = await res.json()

    setResult(data.result)
  }

  return (
    <main style={{padding:40,fontFamily:"Arial"}}>

      <h1>🍔 Calorie Intelligence AI</h1>

      <input
        type="file"
        onChange={(e)=>setFile(e.target.files?.[0] || null)}
      />

      <br/><br/>

      <button onClick={analyzeImage}>
        Analyze Food
      </button>

      <h2>{result}</h2>

    </main>
  )
}
