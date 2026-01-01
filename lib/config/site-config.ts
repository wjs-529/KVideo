/**
 * Site Configuration
 * Handles environment variables for site branding and customization
 */

export interface SiteConfig {
  title: string;
  description: string;
  name: string;
}

/**
 * Get site configuration from environment variables
 * Falls back to default values if not set
 */
export function getSiteConfig(): SiteConfig {
  return {
    title: process.env.NEXT_PUBLIC_SITE_TITLE || "KVideo - 视频聚合平台",
    description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION || "Multi-source video aggregation platform with beautiful Liquid Glass UI",
    name: process.env.NEXT_PUBLIC_SITE_NAME || "KVideo",
  };
}

/**
 * Get individual configuration values
 */
export const siteConfig = {
  get title() {
    return process.env.NEXT_PUBLIC_SITE_TITLE || "KVideo - 视频聚合平台";
  },

  get description() {
    return process.env.NEXT_PUBLIC_SITE_DESCRIPTION || "Multi-source video aggregation platform with beautiful Liquid Glass UI";
  },

  get name() {
    return process.env.NEXT_PUBLIC_SITE_NAME || "KVideo";
  },
};