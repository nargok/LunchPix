"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Card } from "@/components/ui/card"
import { ja } from "date-fns/locale"

// 仮のデータ - 弁当を作った日付
const bentosDates = [
  new Date(2025, 4, 30),
  new Date(2025, 4, 29),
  new Date(2025, 4, 28),
  new Date(2025, 4, 27),
  new Date(2025, 4, 24),
  new Date(2025, 4, 23),
  new Date(2025, 4, 22),
  new Date(2025, 4, 20),
]

export function CalendarView() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  // カレンダーの日付装飾用関数
  const isDayWithBento = (day: Date) => {
    return bentosDates.some(
      (bentoDate) =>
        bentoDate.getDate() === day.getDate() &&
        bentoDate.getMonth() === day.getMonth() &&
        bentoDate.getFullYear() === day.getFullYear(),
    )
  }

  return (
    <Card className="p-4">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        locale={ja}
        modifiers={{ withBento: bentosDates }}
        modifiersStyles={{
          withBento: {
            backgroundColor: "#fef3c7",
            borderRadius: "100%",
          },
        }}
        className="mx-auto"
      />
      <div className="mt-4 text-center text-sm text-muted-foreground">
        <span className="inline-block w-3 h-3 rounded-full bg-amber-100 mr-2"></span>
        お弁当を作った日
      </div>
    </Card>
  )
}
