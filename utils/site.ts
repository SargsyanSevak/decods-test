export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Decods",
  leftNavMenuItems: [
    {
      label: "About Us",
      href: "/about",
    },
    {
      label: "Hire Developer",
      href: "/hire-developer",
    },
    {
      label: "Portfolio",
      href: "/portfolio",
    },
  ],
  rightNavMenuItems: [
    {
      label: "Services",
      href: "/services",
    },
    {
      label: "Articles",
      href: "/articles",
    },
  ],
};
