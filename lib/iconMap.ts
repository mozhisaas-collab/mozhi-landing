// Map FontAwesome icon classes to Lucide React icon names
import { 
  FileText, Mic, Globe, GraduationCap, Wrench, TestTube, Languages, 
  Video, Users, Code, TrendingUp, MessageSquare, Laptop, Heart, 
  ShoppingCart, Scale, Film, Building2, Plane, Zap, Cpu, Landmark, 
  Megaphone, Factory, Package, Phone, Search, ShieldCheck, Rocket 
} from "lucide-react";

export const iconMap: Record<string, any> = {
  "fas fa-language": FileText,
  "fas fa-microphone": Mic,
  "fas fa-globe-americas": Globe,
  "fas fa-graduation-cap": GraduationCap,
  "fas fa-laptop-code": Wrench,
  "fas fa-bug": TestTube,
  "fas fa-chalkboard-teacher": Languages,
  "fas fa-video": Video,
  "fas fa-users": Users,
  "fas fa-code": Code,
  "fas fa-chart-line": TrendingUp,
  "fas fa-comments": MessageSquare,
  "fas fa-laptop": Laptop,
  "fas fa-heartbeat": Heart,
  "fas fa-shopping-cart": ShoppingCart,
  "fas fa-gavel": Scale,
  "fas fa-film": Film,
  "fas fa-university": Building2,
  "fas fa-plane": Plane,
  "fas fa-bolt": Zap,
  "fas fa-microchip": Cpu,
  "fas fa-landmark": Landmark,
  "fas fa-bullhorn": Megaphone,
  "fas fa-industry": Factory,
  "fas fa-box": Package,
  "fas fa-signal": Phone,
};

// Direct icon name mapping (for services.ts)
export const serviceIconMap: Record<string, any> = {
  "FileText": FileText,
  "Mic": Mic,
  "Globe": Globe,
  "GraduationCap": GraduationCap,
  "Wrench": Wrench,
  "TestTube": TestTube,
  "Languages": Languages,
  "Video": Video,
  "Users": Users,
  "Code": Code,
  "TrendingUp": TrendingUp,
  "MessageSquare": MessageSquare,
};

