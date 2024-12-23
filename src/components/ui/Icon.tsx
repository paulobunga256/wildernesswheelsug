import { icons } from "lucide-react";

const Icon = ({
  name,
  color,
  size,
  className,
}: {
  name: string;
  color?: string;
  size?: string;
  className?: string;
}) => {
  const LucideIcon = icons[name as keyof typeof icons] || icons["Award"];

  return <LucideIcon color={color} size={size} className={className} />;
};

export default Icon;
