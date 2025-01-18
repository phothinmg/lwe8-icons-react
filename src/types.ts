export type IconName =
  | "codepen"
  | "codesandbox"
  | "dev-to"
  | "discord"
  | "facebook"
  | "gitbook"
  | "github"
  | "gitlab"
  | "hashnode"
  | "jsfiddle"
  | "line"
  | "linkedin"
  | "mastodon"
  | "medium"
  | "messenger"
  | "slack"
  | "stackedit"
  | "stackoverflow"
  | "telegram"
  | "viber"
  | "wechat"
  | "whatsapp"
  | "wordpress"
  | "youtube"
  | "twitter-X"
  | "rss"
  | "next-js"
  | "node-js"
  | "notion"
  | "npm"
  | "numpy"
  | "openai"
  | "threads"
  | "tailwind-css"
  | "tiktok"
  | "toml"
  | "typescript"
  | "ubuntu"
  | "vercel"
  | "vim"
  | "vs-code"
  | "vite"
  | "vk"
  | "yaml"
  | "android"
  | "angular"
  | "apache"
  | "apple"
  | "biome"
  | "bitbucket"
  | "bluesky"
  | "react"
  | "markdown"
  | "daisy-ui"
  | "laptop"
  | "color-dark"
  | "color-light"
  | "bars"
  | "email"
  | "file-document";

export interface Icons {
  name: IconName;

  d: string;
  viewbox?: string;
}

export interface JsxSocialIconProps {
  /**
   * ```
   * 'Name of icon'
   * ```
   */
  name: Icons["name"];
  // Anchor Element
  /**
   * ```
   * 'HTML Anchor Element Attribute "href"'
   * ```
   *
   * ```html
   * <a href=""></a>
   *
   * ```
   */
  href?: string;
  /**
   * ```
   * 'HTML Anchor Element Attribute "target"'
   * ```
   *
   * ```html
   * <a href="" target=""></a>
   *
   * ```
   */
  target?: "_blank" | "_parent" | "_self" | "_top";
  /**
   * ```
   * 'HTML Anchor Element `className`'
   * ```
   *
   * ```
   * 'Default style - {textDecoration: none, color: currentcolor }'
   * ```
   *
   * ```html
   *
   * <a href="" target="" className=""></a>
   *
   * ```
   */
  className?: string;
  // Icon
  /**
   * ```
   * 'Size for icon - default - 24'
   * ```
   */
  size?: number;
  /**
   * ```
   * 'Color for icon - default - "currentcolor"'
   * ```
   */
  fillColor?: string;
  /**
   * ```
   * 'Opacity of icon. 0.1 to 1 > default 0.7'
   * ```
   */
  fillOpacity?: 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1;
  /**
   * ```
   * 'Tooltip text for icon. default name of icon .'
   * ```
   *
   *
   */
  title?: string;
}
