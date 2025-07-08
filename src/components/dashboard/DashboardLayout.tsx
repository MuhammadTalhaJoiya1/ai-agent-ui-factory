import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { TopNavbar } from "./TopNavbar";
import { DashboardMain } from "./DashboardMain";

export function DashboardLayout() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="flex h-screen bg-dashboard-bg">
      {/* Sidebar */}
      <Sidebar collapsed={sidebarCollapsed} onToggleCollapse={toggleSidebar} />
      
      {/* Main Content Area */}
      <div className="flex flex-col flex-1 min-w-0">
        <TopNavbar />
        <DashboardMain />
      </div>
    </div>
  );
}