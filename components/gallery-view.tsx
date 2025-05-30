import { BentoCard } from "@/components/bento-card"

// 仮のデータ
const bentos = [
  {
    id: "1",
    title: "唐揚げ弁当",
    date: "2025-05-30",
    imageUrl: "/placeholder.svg?height=300&width=300",
    tags: ["唐揚げ", "おかず3品"],
  },
  {
    id: "2",
    title: "サラダチキン弁当",
    date: "2025-05-29",
    imageUrl: "/placeholder.svg?height=300&width=300",
    tags: ["ヘルシー", "サラダ"],
  },
  {
    id: "3",
    title: "オムライス弁当",
    date: "2025-05-28",
    imageUrl: "/placeholder.svg?height=300&width=300",
    tags: ["卵料理", "子供喜ぶ"],
  },
  {
    id: "4",
    title: "焼き鮭弁当",
    date: "2025-05-27",
    imageUrl: "/placeholder.svg?height=300&width=300",
    tags: ["和食", "魚"],
  },
]

export function GalleryView() {
  return (
    <div className="grid grid-cols-1 gap-4">
      {bentos.map((bento) => (
        <BentoCard key={bento.id} bento={bento} />
      ))}
    </div>
  )
}
