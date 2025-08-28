import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const breakdownData = [
  { month: 'Jan-25', consumption: 1.1 },
  { month: 'Feb-25', consumption: 1.0 },
  { month: 'Mar-25', consumption: 2.0 },
  { month: 'Apr-25', consumption: 1.4 },
  { month: 'May-25', consumption: 1.3 },
  { month: 'Jun-25', consumption: 1.1 },
  { month: 'Jul-25', consumption: 1.5 }
];

export function ConsumptionBreakdown() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Monthly Consumption Breakdown</CardTitle>
        <p className="text-sm text-muted-foreground">Bar chart showing Building consumption by month</p>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={breakdownData}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis 
                dataKey="month" 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 11 }}
                className="text-muted-foreground"
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 11 }}
                className="text-muted-foreground"
                domain={[0, 2.5]}
                ticks={[0, 0.5, 1.0, 1.5, 2.0, 2.5]}
                tickFormatter={(value) => `${value}k`}
              />
              <Bar 
                dataKey="consumption" 
                fill="hsl(var(--primary))"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}