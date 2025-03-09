export interface NavItem {
  to?: string;
  label: string;
  isLangSwitcher?: boolean;
}

export const getNavigation = (t: (string: string) => string): NavItem[] => [
  { to: "/", label: t("projects") },
  { to: "/about", label: t("about") },
  { to: "/contact", label: t("contact") },
  { label: "Rus", isLangSwitcher: true },
];
