import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Area, AreaChart } from 'recharts';

const chartData = [
  { month: 'Jan-25', consumption: 1180 },
  { month: 'Feb-25', consumption: 1100 },
  { month: 'Mar-25', consumption: 1950 },
  { month: 'Apr-25', consumption: 1750 },
  { month: 'May-25', consumption: 1600 },
  { month: 'Jun-25', consumption: 1480 },
  { month: 'Jul-25', consumption: 1400 }
];

export function ConsumptionChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Monthly Trend for Building</CardTitle>
        <p className="text-sm text-muted-foreground">Consumption pattern from Jan-25 to Jul-25</p>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="colorConsumption" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis 
                dataKey="month" 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12 }}
                className="text-muted-foreground"
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12 }}
                className="text-muted-foreground"
                tickFormatter={(value) => `${value}`}
              />
              <Area
                type="monotone"
                dataKey="consumption"
                stroke="hsl(var(--primary))"
                strokeWidth={2}
                fill="url(#colorConsumption)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}