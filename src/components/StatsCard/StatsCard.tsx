import Typography from '../Typography';
import Icon from '../Icon';
import { IconName } from '../Icon';

interface StatsCardProps {
  title: string;
  trend: 'up' | 'down';
  value: string;
  percentage: string;
  cash: string;
  iconName: IconName;
}

function StatsCard({
  title,
  value,
  trend,
  percentage,
  cash,
  iconName,
}: StatsCardProps) {
  return (
    <div
      className="
			bg-white 
			border 
			border-grey-disabled 
			rounded-2xl
			p-4
			h-45
			col-span-12
			md:col-span-4
			flex flex-col justify-between
		"
    >
      <div className="flex justify-between">
        <Typography className="text-grey-title font-bold">
          {title.toUpperCase()}
        </Typography>
        <Icon name={iconName} />
      </div>
      <div className="flex gap-2 items-center">
        <Typography as="h4">{value}</Typography>
        <span
          className={`text-xs 
					flex 
					items-center 
					gap-1 
					font-medium 
					px-2 
					py-1 
					rounded 
					${trend === 'up' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}
        >
          {trend === 'up' ? (
            <Icon className="w-4 h-4" name="TrendingUp" />
          ) : (
            <Icon name="TrendingDown" />
          )}
          {percentage}
        </span>
      </div>
      <div className="flex gap-0.5">
        <span
          className={`${trend === 'up' ? 'text-green-700' : 'text-red-700'}`}
        >
          {cash}
        </span>
        <Typography className="text-grey-title">desde o último mês</Typography>
      </div>
    </div>
  );
}

export default StatsCard;
