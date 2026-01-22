type StatusBadgeProps = {
  status: "active" | "completed" | "on_hold";
};

export default function StatusBadge({ status }: StatusBadgeProps) {
  const styles = {
    active: "bg-green-100 text-green-700",
    completed: "bg-blue-100 text-blue-700",
    on_hold: "bg-yellow-100 text-yellow-700",
  };

  const labels = {
    active: "Active",
    completed: "Completed",
    on_hold: "On hold",
  };

  return (
    <span
      className={`px-3 py-1 text-xs font-medium rounded-full ${styles[status]}`}
    >
      {labels[status]}
    </span>
  );
}
