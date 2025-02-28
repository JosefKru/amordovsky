export interface NavItem {
  to?: string;
  label: string;
  isLangSwitcher?: boolean;
}

export const navItems: NavItem[] = [
  { to: "/", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
  { label: "Rus", isLangSwitcher: true },
];
