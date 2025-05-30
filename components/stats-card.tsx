import { Card, CardContent } from "@/components/ui/card"
import { CalendarDays, Flame } from "lucide-react"

interface StatsCardProps {
  monthlyCount: number
  streak: number
  className?: string
}

export function StatsCard({ monthlyCount, streak, className }: StatsCardProps) {
  return (
    <Card className={className}>
      <CardContent className="p-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2">
            <CalendarDays className="h-5 w-5 text-orange-500" />
            <div>
              <p className="text-sm text-muted-foreground">今月</p>
              <p className="text-2xl font-bold">{monthlyCount}個</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Flame className="h-5 w-5 text-red-500" />
            <div>
              <p className="text-sm text-muted-foreground">連続記録</p>
              <p className="text-2xl font-bold">{streak}日</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
