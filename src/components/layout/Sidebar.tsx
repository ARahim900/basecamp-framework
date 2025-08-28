import { cn } from '@/lib/utils';
import { 
  Droplets, 
  Zap, 
  Wind, 
  Shield, 
  Users, 
  Factory,
  Bell,
  Moon,
  ChevronRight
} from 'lucide-react';
import { useState } from 'react';

const navigationItems = [
  { 
    id: 'water', 
    label: 'Water', 
    icon: Droplets, 
    active: true,
    items: ['Overview', 'Zone Analysis', 'Consumption by Type', 'Main Database', 'Daily Consumption']
  },
  { 
    id: 'electricity', 
    label: 'Electricity', 
    icon: Zap, 
    active: false,
    items: ['Overview', 'Energy Analysis', 'Peak Demand', 'Cost Analysis']
  },
  { 
    id: 'hvac', 
    label: 'HVAC System', 
    icon: Wind, 
    active: false,
    items: ['Equipment Status', 'Maintenance', 'Energy Efficiency']
  },
  { 
    id: 'firefighting', 
    label: 'Firefighting & Alarm', 
    icon: Shield, 
    active: false,
    items: ['System Status', 'Inspections', 'Maintenance']
  },
  { 
    id: 'contractor', 
    label: 'Contractor Tracker', 
    icon: Users, 
    active: false,
    items: ['Active Contracts', 'Performance', 'Payments']
  },
  { 
    id: 'stp', 
    label: 'STP Plant', 
    icon: Factory, 
    active: false,
    items: ['Operations', 'Water Quality', 'Maintenance']
  },
];

export function Sidebar() {
  const [expandedItem, setExpandedItem] = useState<string>('water');

  return (
    <div className="w-64 bg-sidebar-background border-r border-sidebar-border flex flex-col">
      {/* Logo */}
      <div className="p-4 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Droplets className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-sidebar-foreground font-semibold text-sm">Muscat Bay</h1>
            <p className="text-sidebar-foreground/70 text-xs">Utilities Management</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-2">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const isExpanded = expandedItem === item.id;
          
          return (
            <div key={item.id} className="mb-1">
              <button
                onClick={() => setExpandedItem(isExpanded ? '' : item.id)}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors",
                  item.active 
                    ? "bg-sidebar-accent text-sidebar-accent-foreground" 
                    : "text-sidebar-foreground hover:bg-sidebar-accent/50"
                )}
              >
                <Icon className="w-4 h-4" />
                <span className="flex-1 text-left">{item.label}</span>
                {item.active && (
                  <ChevronRight 
                    className={cn(
                      "w-4 h-4 transition-transform",
                      isExpanded && "rotate-90"
                    )} 
                  />
                )}
              </button>
              
              {item.active && isExpanded && (
                <div className="ml-7 mt-1 space-y-1">
                  {item.items?.map((subItem) => (
                    <button
                      key={subItem}
                      className="w-full text-left px-3 py-1 text-xs text-sidebar-foreground/70 hover:text-sidebar-foreground rounded"
                    >
                      {subItem}
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* Bottom actions */}
      <div className="p-2 border-t border-sidebar-border">
        <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-sidebar-foreground hover:bg-sidebar-accent/50 rounded-lg">
          <Bell className="w-4 h-4" />
          <span>Notifications</span>
        </button>
        <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-sidebar-foreground hover:bg-sidebar-accent/50 rounded-lg">
          <Moon className="w-4 h-4" />
          <span>Dark Mode</span>
        </button>
      </div>
    </div>
  );
}