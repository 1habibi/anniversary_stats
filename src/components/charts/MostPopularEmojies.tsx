import { Card, CardContent } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, LabelList, ResponsiveContainer, XAxis, YAxis } from "recharts";

const chartData = [
  { emoji: "🤯", count: 4934 },
  { emoji: "❤️", count: 4635 },
  { emoji: "🥺", count: 2299 },
  { emoji: "😊", count: 2299 },
  { emoji: "😔", count: 1163 },
  { emoji: "😎", count: 1013 },
  { emoji: "😡", count: 825 },
  { emoji: "😭", count: 790 },
  { emoji: "🤨", count: 502 },
  { emoji: "🥰", count: 489 },
  { emoji: "😋", count: 352 },
  { emoji: "😍", count: 285 },
  { emoji: "😘", count: 215 },
  { emoji: "😝", count: 163 },
];

const chartConfig = {
  desktop: {
    label: "Emoji",
    color: "hsl(var(--chart-1))",
  },
  label: {
    color: "hsl(var(--background))",
  },
} satisfies ChartConfig;

export function MostPopularEmojies() {
  return (
    <Card className="bg-transparent shadow-none border-0 w-full h-full">
      <CardContent className="h-full p-4">
        <ChartContainer config={chartConfig} className="w-full h-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart accessibilityLayer data={chartData} layout="vertical" margin={{ top: 20, right: 60, bottom: 20, left: 60 }}>
              <CartesianGrid horizontal={false} />
              <YAxis dataKey="emoji" type="category" tickLine={false} axisLine={false} width={60} fontSize={16} />
              <XAxis dataKey="count" type="number" hide />
              <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
              <Bar dataKey="count" layout="vertical" fill="var(--color-desktop)" radius={4}>
                <LabelList dataKey="count" position="right" offset={10} className="fill-foreground" fontSize={16} />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
