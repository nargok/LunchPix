import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarView } from "@/components/calendar-view"
import { GalleryView } from "@/components/gallery-view"
import { StatsCard } from "@/components/stats-card"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <main className="container max-w-md mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold text-center mb-6">お弁当ログ</h1>

      <StatsCard monthlyCount={12} streak={5} className="mb-6" />

      <Tabs defaultValue="gallery" className="mb-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="gallery">ギャラリー</TabsTrigger>
          <TabsTrigger value="calendar">カレンダー</TabsTrigger>
        </TabsList>
        <TabsContent value="gallery">
          <GalleryView />
        </TabsContent>
        <TabsContent value="calendar">
          <CalendarView />
        </TabsContent>
      </Tabs>

      <div className="fixed bottom-6 right-6">
        <Button asChild size="lg" className="rounded-full w-14 h-14 shadow-lg">
          <Link href="/add">
            <Plus className="h-6 w-6" />
            <span className="sr-only">弁当を追加</span>
          </Link>
        </Button>
      </div>
    </main>
  )
}
