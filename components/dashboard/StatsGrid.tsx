import StatCard from "./StatCard";

export default function StatsGrid() {
  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <StatCard
        title="Total Tasks"
        value={24}
        subtitle="Across all projects"
      />

      <StatCard
        title="Completed"
        value={16}
        subtitle="This month"
      />

      <StatCard
        title="In Progress"
        value={5}
      />

      <StatCard
        title="Overdue"
        value={3}
        subtitle="Needs attention"
      />
    </section>
  );
}
