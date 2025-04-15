import * as FeatherIcons from 'react-feather';

export type IconName = keyof typeof FeatherIcons;

interface IconProps extends FeatherIcons.IconProps {
  name: IconName;
}

function Icon({ name, ...props }: IconProps) {
  const IconComponent = FeatherIcons[name];

  return <IconComponent {...props} />;
}

export default Icon;
