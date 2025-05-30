import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { Calendar } from "lucide-react"

interface Bento {
  id: string
  title: string
  date: string
  imageUrl: string
  tags: string[]
}

interface BentoCardProps {
  bento: Bento
}

export function BentoCard({ bento }: BentoCardProps) {
  // 日付をフォーマット
  const formattedDate = new Date(bento.date).toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <Link href={`/bentos/${bento.id}`}>
      <Card className="overflow-hidden hover:shadow-md transition-shadow">
        <div className="relative h-48 w-full">
          <Image src={bento.imageUrl || "/placeholder.svg"} alt={bento.title} fill className="object-cover" />
        </div>
        <CardContent className="p-4">
          <h3 className="font-bold text-lg">{bento.title}</h3>
          <div className="flex items-center text-sm text-muted-foreground mt-1">
            <Calendar className="h-4 w-4 mr-1" />
            {formattedDate}
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex flex-wrap gap-2">
          {bento.tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </CardFooter>
      </Card>
    </Link>
  )
}
