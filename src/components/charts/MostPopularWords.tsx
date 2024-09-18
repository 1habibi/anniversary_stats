import { Card, CardContent } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Bar, BarChart, LabelList, ResponsiveContainer, XAxis, YAxis } from "recharts";

const chartData = [
  { word: "все", count: 6434 },
  { word: "тебя", count: 6233 },
  { word: "бля", count: 4300 },
  { word: "меня", count: 4036 },
  { word: "надо", count: 3577 },
  { word: "просто", count: 3429 },
  { word: "будет", count: 2938 },
  { word: "люблю", count: 2862 },
  { word: "типа", count: 2851 },
  { word: "если", count: 2822 },
  { word: "хз", count: 2723 },
  { word: "очень", count: 2531 },
  { word: "тоже", count: 2438 },
  { word: "хочу", count: 2383 },
  { word: "щас", count: 2367 },
  { word: "завтра", count: 2258 },
  { word: "вообще", count: 2235 },
  { word: "давай", count: 2214 },
  { word: "хахах", count: 1995 },
  { word: "еще", count: 1977 },
  { word: "ещё", count: 1852 },
  { word: "хахаха", count: 1816 },
  { word: "хорошо", count: 1800 },
  { word: "было", count: 1728 },
  { word: "чето", count: 1688 },
  { word: "может", count: 1669 },
  { word: "буду", count: 1651 },
  { word: "думаю", count: 1615 },
  { word: "потом", count: 1571 },
  { word: "только", count: 1527 },
  { word: "ладно", count: 1516 },
  { word: "ага", count: 1511 },
  { word: "можно", count: 1489 },
  { word: "есть", count: 1465 },
  { word: "спать", count: 1450 },
  { word: "знаю", count: 1416 },
  { word: "блять", count: 1415 },
  { word: "сегодня", count: 1369 },
  { word: "тут", count: 1336 },
  { word: "делать", count: 1320 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  label: {
    color: "hsl(var(--background))",
  },
} satisfies ChartConfig;

export function MostPopularWords() {
  return (
    <Card className="bg-transparent shadow-none border-0 w-full h-full">
      <CardContent className="h-full p-4">
        <ChartContainer config={chartConfig} className="w-full h-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart accessibilityLayer data={chartData} layout="vertical" margin={{ top: 20, right: 60, bottom: 20, left: 60 }}>
              <YAxis dataKey="word" type="category" tickLine={false} axisLine={false} width={60} fontSize={14} />
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
