import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ConsumptionMetrics } from './ConsumptionMetrics';
import { ConsumptionChart } from './ConsumptionChart';
import { ConsumptionTable } from './ConsumptionTable';
import { ConsumptionBreakdown } from './ConsumptionBreakdown';
import { TypeDistribution } from './TypeDistribution';
import { AlertTriangle, Download } from 'lucide-react';

const usageTypes = [
  'Building',
  'Building_Bulk', 
  'Building_Common',
  'IRR_Services',
  'MB_Common',
  'Main Bulk',
  'Residential (Apartment)',
  'Residential (Villa)',
  'Retail',
  'Zone Bulk'
];

export function WaterSystemAnalysis() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-foreground">Water System Analysis</h1>
          <p className="text-sm text-muted-foreground">Muscat Bay Resource Management</p>
        </div>
        
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="bg-warning/10 text-warning border-warning/20">
            <AlertTriangle className="w-3 h-3 mr-1" />
            Data Validation
          </Badge>
        </div>
      </div>

      {/* Database Connection Banner */}
      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium text-blue-900">Database Connection</h3>
              <p className="text-sm text-blue-700">Test your Supabase connection and daily consumption setup</p>
            </div>
            <Button variant="outline" size="sm" className="border-blue-300 text-blue-700">
              Test Connection
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Tabs */}
      <Tabs defaultValue="overview" className="space-y-6">
        <div className="flex items-center justify-between">
          <TabsList className="grid w-auto grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="zone">Zone Analysis</TabsTrigger>
            <TabsTrigger value="consumption">Consumption by Type</TabsTrigger>
            <TabsTrigger value="database">Main Database</TabsTrigger>
            <TabsTrigger value="daily">Daily Consumption</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="overview" className="space-y-6">
          {/* Usage Type Filters */}
          <div className="flex flex-wrap gap-2">
            <span className="text-sm text-muted-foreground mr-2">Filter by Usage Type:</span>
            {usageTypes.map((type) => (
              <Badge 
                key={type}
                variant={type === 'Building' ? 'default' : 'secondary'}
                className={type === 'Building' ? 'bg-primary text-primary-foreground' : ''}
              >
                {type}
              </Badge>
            ))}
          </div>

          {/* Date Range */}
          <div className="flex items-center gap-4 text-sm">
            <span className="text-muted-foreground">Range: Jan-25 - Jul-25</span>
            <span className="text-muted-foreground">Range: Jan-25 - Jul-25</span>
            <Button variant="ghost" size="sm" className="text-primary ml-auto">
              Reset
            </Button>
          </div>

          {/* Consumption Analysis */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold">Consumption Analysis: Building</h2>
                <p className="text-sm text-muted-foreground">Jan-25 to Jul-25</p>
              </div>
              <Button size="sm" className="bg-primary text-primary-foreground">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>

            <ConsumptionMetrics />
            <ConsumptionChart />
            <ConsumptionTable />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ConsumptionBreakdown />
              <TypeDistribution />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="zone">
          <Card>
            <CardHeader>
              <CardTitle>Zone Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Zone analysis content will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="consumption">
          <Card>
            <CardHeader>
              <CardTitle>Consumption by Type</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Consumption by type analysis will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="database">
          <Card>
            <CardHeader>
              <CardTitle>Main Database</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Main database view will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="daily">
          <Card>
            <CardHeader>
              <CardTitle>Daily Consumption</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Daily consumption data will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}