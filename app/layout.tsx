export const metadata = {
  title: "Calorie Intelligence AI",
  description: "AI powered calorie detection"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
