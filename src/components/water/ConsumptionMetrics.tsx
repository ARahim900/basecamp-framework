import { Card, CardContent } from '@/components/ui/card';
import { Droplets, Calendar, TrendingUp, Gauge } from 'lucide-react';

const metrics = [
  {
    label: 'TOTAL CONSUMPTION',
    value: '9,471',
    unit: 'm³',
    icon: Droplets,
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600'
  },
  {
    label: 'MONTHLY AVERAGE',
    value: '1,353',
    unit: 'm³',
    subtitle: 'from 24 active meters',
    icon: Calendar,
    bgColor: 'bg-green-50',
    iconColor: 'text-green-600'
  },
  {
    label: 'PEAK MONTH',
    value: 'Mar-25',
    icon: TrendingUp,
    bgColor: 'bg-red-50',
    iconColor: 'text-red-600'
  },
  {
    label: '% OF LI SUPPLY',
    value: '3.2%',
    subtitle: 'of total supply used',
    icon: Gauge,
    bgColor: 'bg-teal-50',
    iconColor: 'text-teal-600'
  }
];

export function ConsumptionMetrics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((metric) => {
        const Icon = metric.icon;
        
        return (
          <Card key={metric.label}>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-lg ${metric.bgColor}`}>
                  <Icon className={`w-6 h-6 ${metric.iconColor}`} />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    {metric.label}
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-foreground">
                      {metric.value}
                    </span>
                    {metric.unit && (
                      <span className="text-sm text-muted-foreground">
                        {metric.unit}
                      </span>
                    )}
                  </div>
                  {metric.subtitle && (
                    <p className="text-xs text-muted-foreground mt-1">
                      {metric.subtitle}
                    </p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}