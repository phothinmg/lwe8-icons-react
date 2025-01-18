"use client";
import React from "react";
import { type JSX, Suspense, useEffect, useState } from "react";
import { icons } from "./icons.js";
import type { IconName, Icons, JsxSocialIconProps } from "./types.js";

export type { IconName, JsxSocialIconProps };

const getPathd = (name: IconName): string => {
  const pd = icons.find((i) => i.name === name) as Icons;
  return pd.d;
};
const getVB = (name: IconName): string => {
  const pd = icons.find((i) => i.name === name) as Icons;
  return pd.viewbox ?? "0 0 24 24";
};
/**
 * #### Component for rendering a icon with customizable properties.
 *
 * @param name - The name of the icon to display.
 * @param href - The URL the icon should link to.
 * @param target - The target attribute for the link.
 * @param fillColor - The color to fill the icon.
 * @param fillOpacity - The opacity of the fill color.
 * @param className - Additional CSS class for styling.
 * @param size - The size of the icon.
 * @param title - The title attribute for accessibility.
 *
 * @returns The JSX element representing the social media icon with the specified properties.
 * 
 * ```ts
 * import ReactIcon from "lwe8-icons-react";

	export function Home() {
	return (
		<main>
		<ReactIcon
			name="github"
			href="https://github.com"
			size={36}
			fillColor="#673ab8"
			fillOpacity={0.9}
			title="Link to my github profile"
			target="_blank"
			className="My class"
		/>
		</main>
	);
	}
 * ```
 */

export default function ReactIcon({
  name,
  href = "#0",
  target = "_blank",
  fillColor = "currentColor",
  fillOpacity = 0.7,
  className = "",
  size = 24,
  title = name,
}: JsxSocialIconProps): JSX.Element {
  const [view_box, setViewBox] = useState<string>(() => getVB(name));
  const [pathd, setPathd] = useState<string>(() => getPathd(name));
  const [opacity, setOpacity] = useState<number>(fillOpacity);
  const [color, setColor] = useState<string>(fillColor);
  const [link, setLink] = useState<string>(href);
  const [tg, setTg] = useState<string>(target);
  const [cname, setCname] = useState<string>(className);
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
    setLink(href);
  }, [href]);
  useEffect(() => {
    setTg(target);
  }, [target]);
  useEffect(() => {
    setCname(className);
  }, [className]);
  useEffect(() => {
    setSz(size);
  }, [size]);
  useEffect(() => {
    setTitle(title);
  }, [title]);
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <a
        href={link}
        style={{ textDecoration: "none", color: "currentcolor" }}
        className={cname}
        target={tg}
      >
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
