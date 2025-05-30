import { AddBentoForm } from "@/components/add-bento-form"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function AddBentoPage() {
  return (
    <main className="container max-w-md mx-auto px-4 py-6">
      <div className="flex items-center mb-6">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/">
            <ArrowLeft className="h-5 w-5" />
            <span className="sr-only">戻る</span>
          </Link>
        </Button>
        <h1 className="text-2xl font-bold text-center flex-1 pr-10">お弁当を記録</h1>
      </div>

      <AddBentoForm />
    </main>
  )
}
