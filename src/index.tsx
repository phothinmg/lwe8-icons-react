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
 * @param fillColor - The color to fill the icon.
 * @param fillOpacity - The opacity of the fill color.
 * @param size - The size of the icon.
 * @param title - The title attribute for accessibility.
 *
 * @returns The JSX element representing the social media icon with the specified properties.

 * ```
 */

export default function ReactIcon({
  name,
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
