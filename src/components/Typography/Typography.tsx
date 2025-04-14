import * as React from 'react';
import clsx from 'clsx';

type ValidTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  as?: ValidTags;
  children: React.ReactNode;
  className: string;
}

function Typography({ as = 'p', children, className }: TypographyProps) {
  const tagClasses = {
    h1: 'text-black font-heading font-bold text-sz-5xl',
    h2: 'text-black font-heading font-bold text-sz-4xl',
    h3: 'text-black font-heading font-bold text-sz-3xl',
    h4: 'text-black font-heading font-bold text-sz-2xl',
    h5: 'text-black font-heading font-bold text-sz-1xl',
    h6: 'text-black font-heading font-bold text-lg',
    p: 'text-black font-body text-sz-base',
    span: 'text-black font-body text-sz-sm',
  };

  return React.createElement(
    as,
    { className: clsx(className, tagClasses[as]) },
    children
  );
}

export default Typography;
