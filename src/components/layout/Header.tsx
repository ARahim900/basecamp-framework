import { Button } from '@/components/ui/button';
import { Bell, User, ChevronDown } from 'lucide-react';

export function Header() {
  return (
    <header className="h-16 bg-card border-b border-border flex items-center justify-between px-6">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">+</span>
          <span className="text-sm font-medium">Water</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Button variant="outline" size="sm">
          Test Connection
        </Button>
        
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm">
            <Bell className="w-4 h-4" />
          </Button>
          
          <div className="flex items-center gap-2 px-3 py-1 bg-muted rounded-lg">
            <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
              <User className="w-3 h-3 text-primary-foreground" />
            </div>
            <span className="text-sm font-medium">Admin</span>
            <span className="text-xs text-muted-foreground">Manager</span>
            <ChevronDown className="w-3 h-3 text-muted-foreground" />
          </div>
        </div>
      </div>
    </header>
  );
}