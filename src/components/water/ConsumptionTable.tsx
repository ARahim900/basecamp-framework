import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const tableData = [
  { period: 'JAN-25 (M³)', value: '1,180' },
  { period: 'FEB-25 (M³)', value: '1,100' },
  { period: 'MAR-25 (M³)', value: '1,951' },
  { period: 'APR-25 (M³)', value: '1,407' },
  { period: 'MAY-25 (M³)', value: '1,262' },
  { period: 'JUN-25 (M³)', value: '1,093' },
  { period: 'JUL-25 (M³)', value: '1,470' },
  { period: 'TOTAL (M³)', value: '9,471', isTotal: true },
  { period: '% OF LI', value: '3.2%' },
  { period: 'METERS', value: '24 meters' }
];

export function ConsumptionTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Consumption by Type</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-b">
                {tableData.map((item) => (
                  <TableHead 
                    key={item.period} 
                    className="text-xs font-medium text-muted-foreground uppercase text-center"
                  >
                    {item.period}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                {tableData.map((item) => (
                  <TableCell 
                    key={item.period} 
                    className={`text-center font-medium ${
                      item.isTotal 
                        ? 'text-primary font-bold' 
                        : item.period === '% OF LI' 
                        ? 'text-green-600' 
                        : 'text-foreground'
                    }`}
                  >
                    {item.value}
                  </TableCell>
                ))}
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div className="mt-4 text-right">
          <p className="text-xs text-muted-foreground">
            Type: Building | Period: Jan-25 to Jul-25
          </p>
        </div>
      </CardContent>
    </Card>
  );
}