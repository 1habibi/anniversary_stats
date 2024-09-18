import { Label, Pie, PieChart, ResponsiveContainer } from "recharts";
import { Card, CardContent, CardFooter } from "../ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart";

const chartData = [
  { name: "Богданчик", messages: 162387, fill: "var(--color-bogdanchik)" },
  { name: "Дашуня", messages: 158141, fill: "var(--color-dashynya)" },
];

const chartConfig = {
  messages: {
    label: "Messages",
  },
  bogdanchik: {
    label: "Богданчик",
    color: "hsl(var(--chart-1))",
  },
  dashynya: {
    label: "Дашуня",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;

function UsersMessagesCount() {
  return (
    <Card className="bg-transparent shadow-none border-0 flex w-[50%] flex-col">
      <CardContent className="flex-1 pb-0">
        <ChartContainer config={chartConfig} className="h-full w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
              <Pie data={chartData} dataKey="messages" nameKey="name" innerRadius="40%" outerRadius="80%" label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}>
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      return (
                        <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle" dominantBaseline="middle">
                          <tspan x={viewBox.cx} y={viewBox.cy} className="fill-foreground text-3xl font-bold">
                            320.900
                          </tspan>
                          <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 30} className="fill-muted-foreground text-xl">
                            Сообщений
                          </tspan>
                        </text>
                      );
                    }
                  }}
                />
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="text-white flex text-[30px] items-center gap-2 font-medium leading-none">песят на песят (почти)</div>
      </CardFooter>
    </Card>
  );
}

export default UsersMessagesCount;
