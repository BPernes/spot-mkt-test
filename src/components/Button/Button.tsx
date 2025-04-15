import * as React from 'react';
import clsx from 'clsx';
import Icon from '@/components/Icon';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  iconName?: string;
}

function Button({ children, className, iconName }: ButtonProps) {
  console.log(children, className, iconName);

  const baseClasses = `
				flex
				text-white
				text-sz-base
				bg-primary
				min-h-12
				rounded-sm
				p-2
				font-bold
				tracking-wide
				cursor-pointer
		`;

  return (
    <button className={clsx(className, baseClasses)} type="submit">
      {iconName && <Icon name={iconName} />}
      {children}
    </button>
  );
}

export default Button;
