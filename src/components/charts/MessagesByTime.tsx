import { TrendingUp } from "lucide-react";
import { CartesianGrid, LabelList, Line, LineChart, ResponsiveContainer, XAxis } from "recharts";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const chartData = [
  { time: "00:00 - 01:00", count: 31942 },
  { time: "01:00 - 02:00", count: 19949 },
  { time: "02:00 - 03:00", count: 5192 },
  { time: "03:00 - 04:00", count: 787 },
  { time: "04:00 - 05:00", count: 162 },
  { time: "05:00 - 06:00", count: 242 },
  { time: "06:00 - 07:00", count: 1336 },
  { time: "07:00 - 08:00", count: 1323 },
  { time: "08:00 - 09:00", count: 2443 },
  { time: "09:00 - 10:00", count: 8505 },
  { time: "10:00 - 11:00", count: 13084 },
  { time: "11:00 - 12:00", count: 15502 },
  { time: "12:00 - 13:00", count: 21929 },
  { time: "13:00 - 14:00", count: 21796 },
  { time: "14:00 - 15:00", count: 20781 },
  { time: "15:00 - 16:00", count: 20261 },
  { time: "16:00 - 17:00", count: 19162 },
  { time: "17:00 - 18:00", count: 17919 },
  { time: "18:00 - 19:00", count: 16319 },
  { time: "19:00 - 20:00", count: 9832 },
  { time: "20:00 - 21:00", count: 11457 },
  { time: "21:00 - 22:00", count: 14904 },
  { time: "22:00 - 23:00", count: 22952 },
  { time: "23:00 - 00:00", count: 23121 },
];

const chartConfig = {
  count: {
    label: "count",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function MessagesByTime() {
  return (
    <Card className="bg-transparent shadow-none border-0 w-full h-full">
      <CardContent className="h-full p-4">
        <ChartContainer config={chartConfig} className="w-full h-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              accessibilityLayer
              data={chartData}
              margin={{
                top: 20,
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis dataKey="time" tickLine={false} axisLine={false} tickMargin={8} fontSize={9} />
              <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
              <Line
                dataKey="count"
                type="natural"
                stroke="var(--color-count)"
                strokeWidth={2}
                dot={{
                  fill: "var(--color-count)",
                }}
                activeDot={{
                  r: 6,
                }}
              >
                <LabelList position="right" offset={12} className="fill-foreground" fontSize={14} />
              </Line>
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">Showing total visitors for the last 6 months</div>
      </CardFooter>
    </Card>
  );
}
