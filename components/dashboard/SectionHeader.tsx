type SectionHeaderProps = {
  title: string;
  actionText?: string;
};

export default function SectionHeader({ title, actionText }: SectionHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-4">
      <h1 className="text-xl font-semibold text-gray-900">
        {title}
      </h1>

      {actionText && (
        <button className="text-sm text-blue-600 hover:underline">
          {actionText}
        </button>
      )}
    </div>
  );
}
