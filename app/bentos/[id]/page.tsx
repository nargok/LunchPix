import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Pencil } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// 仮のデータ取得関数
function getBentoById(id: string) {
  // 実際のアプリではデータベースから取得
  return {
    id,
    title: "唐揚げ弁当",
    date: "2025年5月30日",
    imageUrl: "/placeholder.svg?height=400&width=400",
    memo: "今日は唐揚げをメインに、ひじきの煮物、卵焼き、ミニトマトを入れました。唐揚げは前日に下味をつけておいたので朝は揚げるだけでした。",
    tags: ["唐揚げ", "おかず3品", "下味冷凍"],
  }
}

export default function BentoDetailPage({ params }: { params: { id: string } }) {
  const bento = getBentoById(params.id)

  return (
    <main className="container max-w-md mx-auto px-4 py-6">
      <div className="flex items-center mb-6">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/">
            <ArrowLeft className="h-5 w-5" />
            <span className="sr-only">戻る</span>
          </Link>
        </Button>
        <h1 className="text-xl font-bold text-center flex-1 pr-10">{bento.title}</h1>
      </div>

      <div className="relative h-64 w-full mb-6">
        <Image src={bento.imageUrl || "/placeholder.svg"} alt={bento.title} fill className="object-cover rounded-lg" />
      </div>

      <div className="flex items-center text-sm text-muted-foreground mb-4">
        <Calendar className="h-4 w-4 mr-1" />
        {bento.date}
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {bento.tags.map((tag) => (
          <Badge key={tag} variant="outline">
            {tag}
          </Badge>
        ))}
      </div>

      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        <h2 className="font-medium mb-2">メモ</h2>
        <p className="text-gray-700 whitespace-pre-line">{bento.memo}</p>
      </div>

      <div className="fixed bottom-6 right-6">
        <Button asChild size="lg" className="rounded-full w-14 h-14 shadow-lg">
          <Link href={`/bentos/${params.id}/edit`}>
            <Pencil className="h-5 w-5" />
            <span className="sr-only">編集</span>
          </Link>
        </Button>
      </div>
    </main>
  )
}
