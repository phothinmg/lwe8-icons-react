export type SocialIconName =
	| "gitbook"
	| "github"
	| "gitlab"
	| "codepen"
	| "codesandbox"
	| "hashnode"
	| "facebook"
	| "twitter-X"
	| "dev-to"
	| "discord"
	| "line"
	| "linkedin"
	| "medium"
	| "jsfiddle"
	| "mastodon"
	| "messenger"
	| "slack"
	| "stackedit"
	| "stackoverflow"
	| "telegram"
	| "viber"
	| "wechat"
	| "whatsapp"
	| "wordpress"
	| "youtube";

export type IconName =
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
export interface SocialIcons {
	name: SocialIconName;
	d: string;
	viewbox?: string;
}
export interface JsxIconProps {
	/**
	 * ```
	 * 'Name of icon'
	 * ```
	 */
	name: Icons["name"];
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
export interface JsxSocialIconProps {
	/**
	 * ```
	 * 'Name of icon'
	 * ```
	 */
	name: SocialIcons["name"];
	// Icon
	href?: string;
	target?: "_blank" | "_parent" | "_self" | "_top";
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
