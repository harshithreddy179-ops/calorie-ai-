import { NextResponse } from "next/server"

export async function POST(req: Request) {

  const formData = await req.formData()
  const file = formData.get("file")

  if (!file) {
    return NextResponse.json({ result: "No image uploaded" })
  }

  return NextResponse.json({
    result: "Food detected. Calories estimation coming soon."
  })
}
