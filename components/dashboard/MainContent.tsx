import StatsGrid from "./StatsGrid";
import SectionHeader from "./SectionHeader";
import RecentTasksTable from "./RecentTasksTable";

export default function MainContent() {
  return (
    <main className="p-6 space-y-8 bg-gray-50 min-h-screen">
      <div>
        <SectionHeader title="Dashboard Overview" />
        <StatsGrid />
      </div>

      <div>
        <SectionHeader title="Recent Tasks" actionText="View all" />
        <RecentTasksTable />
      </div>
    </main>
  );
}
