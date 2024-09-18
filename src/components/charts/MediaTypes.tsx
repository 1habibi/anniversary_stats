import { Card, CardContent } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

const chartData = [
  { type: "Видео", count: 1390 },
  { type: "Кружочек", count: 4545 },
  { type: "Голосовое", count: 18165 },
  { type: "Стикер", count: 14738 },
  { type: "Музыка", count: 22 },
  { type: "Гифочка", count: 645 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function MediaTypes() {
  return (
    <Card className="bg-transparent shadow-none border-0 w-full h-full">
      <CardContent className="h-full p-4">
        <ChartContainer config={chartConfig} className="w-full h-full">
          <BarChart accessibilityLayer data={chartData} margin={{ top: 20, right: 60, bottom: 20, left: 60 }}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="type" tickLine={false} tickMargin={10} axisLine={false} fontSize={16} />
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Bar dataKey="count" fill="var(--color-desktop)" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
