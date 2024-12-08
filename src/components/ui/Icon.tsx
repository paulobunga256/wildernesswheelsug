import * as LucideIcons from "lucide-react";

// Define the prop types for the Icon component
interface IconProps {
  name: keyof typeof LucideIcons;
  color?: string;
  size?: number;
  className?: string;
}

const Icon: React.FC<IconProps> = ({
  name,
  color = "currentColor",
  size = 24,
  className = "",
}) => {
  // Correctly type the icon component
  const IconComponent = LucideIcons[name] as React.ComponentType<{
    color?: string;
    size?: number;
    className?: string;
  }>;

  // Check if the icon exists
  if (!IconComponent) {
    console.warn(`Icon with name "${name}" not found`);
    return null;
  }

  return <IconComponent color={color} size={size} className={className} />;
};

export default Icon;
