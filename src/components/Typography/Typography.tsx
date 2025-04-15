import * as React from 'react';
import clsx from 'clsx';

type ValidTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  as?: ValidTags;
  children: React.ReactNode;
  className?: string;
}

function Typography({ as = 'p', children, className }: TypographyProps) {
  const tagClasses = {
    h1: 'font-heading font-bold text-sz-5xl',
    h2: 'font-heading font-bold text-sz-4xl',
    h3: 'font-heading font-bold text-sz-3xl',
    h4: 'font-heading font-bold text-sz-2xl',
    h5: 'font-heading font-bold text-sz-1xl',
    h6: 'font-heading font-bold text-lg',
    p: 'font-body text-sz-base',
    span: 'font-body text-sz-sm',
  };

  return React.createElement(
    as,
    { className: clsx(className, tagClasses[as]) },
    children
  );
}

export default Typography;
