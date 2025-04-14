import * as React from 'react';
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

function Button({ children, className }: ButtonProps) {
  const baseClasses = `
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
      {children}
    </button>
  );
}

export default Button;
