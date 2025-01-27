"use client";
import React from "react";
import { type JSX, Suspense, useEffect, useState } from "react";
import { icons } from "./icons.js";
import type { IconName, Icons, JsxIconProps } from "./types.js";

const getPathd = (name: IconName): string => {
	const pd = icons.find((i) => i.name === name) as Icons;
	return pd.d;
};
const getVB = (name: IconName): string => {
	const pd = icons.find((i) => i.name === name) as Icons;
	return pd.viewbox ?? "0 0 24 24";
};
/**
 * ReactIcon is a functional component that renders an SVG icon.
 *
 * @param {JsxIconProps} props - The properties for the icon component.
 * @param {IconName} props.name - The name of the icon to be rendered.
 * @param {string} [props.fillColor="currentColor"] - The fill color of the icon.
 * @param {number} [props.fillOpacity=0.7] - The opacity of the icon's fill color.
 * @param {number} [props.size=24] - The size of the icon in pixels.
 * @param {string} [props.title=props.name] - The title for the icon, used for accessibility.
 *
 * @returns {JSX.Element} The rendered SVG icon element.
 *
 * The component uses React's useState and useEffect hooks to manage and update
 * the icon's properties such as viewBox, path data, color, opacity, size, and title.
 * It utilizes a Suspense component to handle loading states.
 */
export default function ReactIcon({
	name,
	fillColor = "currentColor",
	fillOpacity = 0.7,
	size = 24,
	title = name,
}: JsxIconProps): JSX.Element {
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
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox={view_box}
				width={sz}
				height={sz}
			>
				<title>{tit}</title>
				<path d={pathd} fill={color} fillOpacity={opacity} />
			</svg>
		</Suspense>
	);
}
