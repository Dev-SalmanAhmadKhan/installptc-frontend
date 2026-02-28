export const ROUTES = {
  DASHBOARD: "https://adsnes.com",

  HOME: "/",
  ABOUT: "/about",
  CONTACT: "#contact",

  TERMS: "/terms-and-conditions",
  PRIVACY: "/privacy-policy",
  COOKIES: "/",

  API: {
    AUTH: "/api/auth",
    STATS: "/api/stats",
  },
} as const;

export type RouteKeys = keyof typeof ROUTES;
export type NestedRoutes = typeof ROUTES;
