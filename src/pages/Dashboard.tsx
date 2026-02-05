import React from "react";
import Sidebar from "../components/layout/Sidebar";
import RevenueChart from "../components/dashboard/RevenueChart";
import StatsCard from "../components/dashboard/StatsCard";

import TopCategories from "../components/dashboard/TopCategories";
import RecentOrders from "../components/dashboard/RecentOrders";
import StaffOnDuty from "../components/dashboard/StaffOnDuty";

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-layout">
      <Sidebar />

      <main className="dashboard-main">
        

        {/* ===== STATS CARDS ===== */}
        <div className="dashboard-stats-grid">
          <StatsCard
            label="Today's Revenue"
            value="$987"
            change="22.1%"
            changeType="positive"
          />

          <StatsCard
            label="Total Orders"
            value="$853"
            change="17.1%"
            changeType="positive"
          />

          <StatsCard
            label="Active Orders"
            value="36"
            change="19%"
            changeType="negative"
          />

          <StatsCard
            label="POS Overview"
            value="$3,577"
          />
        </div>

        {/* ===== MIDDLE SECTION ===== */}
        <div className="dashboard-middle-grid">
          <RevenueChart />
          <TopCategories />
        </div>

        {/* ===== BOTTOM SECTION ===== */}
        <div className="dashboard-bottom-grid">
          <RecentOrders />
          <StaffOnDuty />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
