import React from "react";
import {
  Wheat,
  Home,
  Sparkles,
  Cookie,
  Coffee,
  Pencil,
  ChefHat,
  Droplet,
  Percent,
  ShieldCheck,
  Smile,
  Layers,
  Car,
  Zap,
  Phone,
  MapPin,
  Clock,
  Mail,
  Search,
  Check,
  Star,
  ChevronRight,
  Heart,
  ShoppingCart,
  MessageCircle,
  TrendingDown,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Wheat: Wheat,
  Home: Home,
  Sparkles: Sparkles,
  Cookie: Cookie,
  Coffee: Coffee,
  PenTool: Pencil,
  ChefHat: ChefHat,
  Trash2: Droplet,
  BadgePercent: Percent,
  ShieldCheck: ShieldCheck,
  Smile: Smile,
  Layers: Layers,
  Car: Car,
  Zap: Zap,
  Phone: Phone,
  MapPin: MapPin,
  Clock: Clock,
  Mail: Mail,
  Search: Search,
  Check: Check,
  Star: Star,
  ChevronRight: ChevronRight,
  Heart: Heart,
  ShoppingCart: ShoppingCart,
  MessageCircle: MessageCircle,
  TrendingDown: TrendingDown,
  ArrowRight: ArrowRight,
  Menu: Menu,
  X: X,
};

interface LucideIconProps {
  name: string;
  className?: string;
  key?: React.Key;
}

export default function LucideIcon({ name, className = "" }: LucideIconProps) {
  const IconComponent = iconMap[name];
  if (!IconComponent) {
    // Return a default icon if not found
    return <Check className={className} />;
  }
  return <IconComponent className={className} />;
}
