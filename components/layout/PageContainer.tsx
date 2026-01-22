type PageContainerProps = {
  title: string;
  children: React.ReactNode;
  rightSlot?: React.ReactNode;
};

export default function PageContainer({
  title,
  children,
  rightSlot,
}: PageContainerProps) {
  return (
    <main className="flex-1 p-6 bg-gray-50 overflow-y-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
        {rightSlot}
      </div>

      {children}
    </main>
  );
}
