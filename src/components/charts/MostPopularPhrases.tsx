import { Card, CardContent } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, LabelList, ResponsiveContainer, XAxis, YAxis } from "recharts";

const chartData = [
  { phrase: "люблю тебя очень очень", count: 25 },
  { phrase: "люблю тебя очень сильно", count: 24 },
  { phrase: "люблю тебя сильно сильно", count: 19 },
  { phrase: "люблю тебя тоже очень", count: 18 },
  { phrase: "тебя тоже очень люблю", count: 88 },
  { phrase: "обнимаю крепко тебя", count: 15 },
  { phrase: "сладких снов тогда", count: 31 },
  { phrase: "сладких снов кися", count: 53 },
  { phrase: "все будет оки", count: 23 },
  { phrase: "все ок будет", count: 19 },
  { phrase: "хочу тебя обнять", count: 29 },
  { phrase: "надеюсь все хорошо будет", count: 6 },
  { phrase: "думаю все оки будет", count: 6 },
  { phrase: "во скок завтра вставать", count: 5 },
  { phrase: "тоже думала об этом", count: 4 },
  { phrase: "бим бим бом бом", count: 3 },
  { phrase: "все будет хорошо обязательно", count: 7 },
  { phrase: "говорили тобой об этом", count: 4 },
  { phrase: "2200 0305 0446 4430", count: 4 },
  { phrase: "приятного аппетита", count: 143 },
  { phrase: "спать хочу", count: 98 },
  { phrase: "хуй знает", count: 186 },
  { phrase: "хочу тебя", count: 290 },
  { phrase: "доброе утречко", count: 165 },
  { phrase: "сладких снов", count: 998 },
  { phrase: "люблю тебя", count: 1490 },
];

const chartConfig = {
  phrase: {
    label: "Фраза",
    color: "hsl(var(--chart-1))",
  },
  label: {
    color: "hsl(var(--background))",
  },
} satisfies ChartConfig;

export function MostPopularPhrases() {
  return (
    <Card className="bg-transparent shadow-none border-0 mt-[-10px] w-full h-full">
      <CardContent className="h-full p-4">
        <ChartContainer config={chartConfig} className="w-full h-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              accessibilityLayer
              data={chartData}
              layout="vertical"
              margin={{
                right: 16,
              }}
            >
              <CartesianGrid horizontal={false} />
              <YAxis dataKey="phrase" type="category" tickLine={false} tickMargin={10} axisLine={false} tickFormatter={(value) => value.slice(0, 3)} hide />
              <XAxis dataKey="count" type="number" hide />
              <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
              <Bar dataKey="count" layout="vertical" fill="var(--color-phrase)" radius={4}>
                <LabelList dataKey="count" position="right" offset={8} className="fill-foreground text-white" fontSize={12} />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
