## React Icons from Simple Icons

[![Checked with Biome](https://img.shields.io/badge/Checked_with-Biome-60a5fa?style=flat&logo=biome)](https://biomejs.dev)

## Install

```bash
npm i lwe8-icons-react
```

```bash
pnpm i lwe8-icons-react
```

```bash
yarn add lwe8-icons-react
```

## Use

```tsx
import { ReactIcon, ReactSocialIcon } from "lwe8-icons-react";

export function Home() {
  return (
    <main>
      <ReactIcon
        name="next-js"
        size={36}
        fillColor="#673ab8"
        fillOpacity={0.9}
        title="next-js"
      />
      <ReactSocialIcon
        name="github"
        href="https://github.com/"
        target="_blank"
        size={36}
        fillColor="#673ab8"
        fillOpacity={0.9}
        title="Link to my github profile"
      />
    </main>
  );
}
```

## Options

| Name          | Description                                                         |    Default               |
| ------------- | ------------------------------------------------------------------- | :---------------------:  |
| `name`        | Name of icon                                                        |                          |
| `href`        | HTML Anchor Element Attribute "href" for `<ReactSocialIcon/>` only  | "https://example.com"    |
| `target`      | HTML Anchor Element Attribute "target"for `<ReactSocialIcon/>` only |   "\_blank"              |
| `title`       | Tooltip text for icon                                               |  name of icon            |
| `size`        | Size for icon                                                       |       24                 |
| `fillColor`   | Color for icon                                                      | "currentcolor"           |
| `fillOpacity` | Opacity of icon. 0.1 to 1                                           |      0.7                 |

## Acknowledgments

- This project was created with assistance from [Qodo AI](https://www.qodo.ai/) code generation. Special thanks for the guidance and support in developing key components of the project.

- All icons are sourced from Simple Icons - https://simpleicons.org/ - https://github.com/simple-icons/simple-icons. License - https://github.com/simple-icons/simple-icons?tab=CC0-1.0-1-ov-file#cc0-10-universal. Legal Disclaimer: https://github.com/simple-icons/simple-icons/blob/develop/DISCLAIMER.md#disclaimer
