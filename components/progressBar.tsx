type Props = {
  percentage: number;
};

export function ProgressBar({ percentage }: Props) {
  return (
    <div className="w-20 bg-gray-200 rounded-full h-min dark:bg-gray-700">
      <div
        className="bg-blue-600 h-min rounded-full text-xs flex items-center justify-center"
        style={{ width: `${percentage}%` }}
      >
        {percentage}%
      </div>
    </div>
  );
}
