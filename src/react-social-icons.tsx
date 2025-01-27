"use client";
import React from "react";
import { type JSX, Suspense, useEffect, useState } from "react";
import { social_icons } from "./social-icons.js";
import type {
	JsxSocialIconProps,
	SocialIconName,
	SocialIcons,
} from "./types.js";

const getPathd = (name: SocialIconName): string => {
	const pd = social_icons.find((i) => i.name === name) as SocialIcons;
	return pd.d;
};
const getVB = (name: SocialIconName): string => {
	const pd = social_icons.find((i) => i.name === name) as SocialIcons;
	return pd.viewbox ?? "0 0 24 24";
};
/**
 * React component that renders a social media icon as an SVG element.
 *
 * @param {JsxSocialIconProps} props - The properties for the social icon component.
 * @param {SocialIconName} props.name - The name of the social icon to render.
 * @param {string} [props.href="#0"] - The URL to link to when the icon is clicked.
 * @param {string} [props.fillColor="currentColor"] - The fill color of the icon.
 * @param {number} [props.fillOpacity=0.7] - The fill opacity of the icon.
 * @param {number} [props.size=24] - The size of the icon in pixels.
 * @param {string} [props.title=name] - The title attribute for the SVG element.
 *
 * @returns {JSX.Element} The rendered SVG icon wrapped in an anchor tag.
 */
export default function ReactSocialIcon({
	name,
	href = "https://example.com",
	target = "_blank",
	fillColor = "currentColor",
	fillOpacity = 0.7,
	size = 24,
	title = name,
}: JsxSocialIconProps): JSX.Element {
	const [view_box, setViewBox] = useState<string>(() => getVB(name));
	const [pathd, setPathd] = useState<string>(() => getPathd(name));
	const [opacity, setOpacity] = useState<number>(fillOpacity);
	const [color, setColor] = useState<string>(fillColor);
	const [sz, setSz] = useState<number>(size);
	const [tit, setTitle] = useState<string>(title);
	useEffect(() => {
		setPathd(getPathd(name));
		setViewBox(getVB(name));
	}, [name]);
	useEffect(() => {
		setOpacity(fillOpacity);
	}, [fillOpacity]);
	useEffect(() => {
		setColor(fillColor);
	}, [fillColor]);
	useEffect(() => {
		setSz(size);
	}, [size]);
	useEffect(() => {
		setTitle(title);
	}, [title]);
	return (
		<Suspense fallback={<p>Loading...</p>}>
			<a href={href} target={target} suppressHydrationWarning={true}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox={view_box}
					width={sz}
					height={sz}
				>
					<title>{tit}</title>
					<path d={pathd} fill={color} fillOpacity={opacity} />
				</svg>
			</a>
		</Suspense>
	);
}
