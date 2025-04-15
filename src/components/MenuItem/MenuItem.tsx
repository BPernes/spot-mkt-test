import * as React from 'react';
import Typography from '../Typography';
import { Icon } from 'react-feather';
import clsx from 'clsx';

interface MenuItemProps extends React.HTMLAttributes<HTMLLinkElement> {
  icon: Icon;
  children: React.ReactNode;
}

function MenuItem({ icon: FeatherIcon, children, className }: MenuItemProps) {
  const baseClasses = `
		flex 
		p-1 
		rounded 
		gap-3 
		place-items-center 
		cursor-pointer 
		overflow-clip
		hover:color-accent
	`;
  return (
    <a href="#" className={clsx(className, baseClasses)}>
      {FeatherIcon && <FeatherIcon className="min-w-8 min-h-8" />}
      <Typography className="font-bold">{children}</Typography>
    </a>
  );
}

export default MenuItem;
