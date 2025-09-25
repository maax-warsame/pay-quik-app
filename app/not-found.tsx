import Link from "next/link"
import { ArrowLeft } from 'lucide-react'
export default function Component() {
  return (
    <div className="flex items-center min-h-screen px-4 py-12 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <div className="w-full space-y-6 text-center">
        <div className="space-y-3">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl animate-bounce">404</h1>
          <p className="text-gray-700">This page does not exist</p>
        </div>
        <Link
          href="/"
          className="inline-flex h-10 items-center justify-center gap-2 rounded-md px-8 bg-accent hover:bg-accent/90 text-accent-foreground"
          prefetch={false}
        >
          <ArrowLeft/>
          Go Back
        </Link>
      </div>
    </div>
  )
}