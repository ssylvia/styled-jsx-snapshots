# Icons

Icon components are reusable SVG graphics that can be styled and used throughout an application to provide additional meaning.

## Styling Icons

By default, Icons will be sized with a width and height of `1em` and will inherit the color of their surrounding text.

Icons can be styled by adding a css `class` to the components that has font-styles. These font-styles will style the SVG's encapsulating `span` tag and pass the styles onto the `SVG`

**Example**

```css
.icon-class {
  font-size: 2em; /* Size */
  color: red; /* Color */
}
```

Alternatively, if all you want to style is about size and color, you can pass the valid strings as props (`width`, `height`, and `color`). For example, you want set the height of a white esri icon as `5rem`:

```tsx
<IconEsri color="white" width="auto" height="5rem" />
```

## Creating New Icons

All icon components extend the `IconBase` class instead of the `React.Component` class. This base class ensures all icons are rendered in a consistent manner with the same properties. It also allows us to add additional optimizations over time.

Steps to add a new icon:

1. Add a new folder to the Icon folder with the name of the icon
2. Add an index.tsx file (see example below)
3. Add a README to your icon folder to show the icon source.
4. Add an export to the `components/Icons/index.ts` file and `components/index.ts` file.
5. Add a `story` entry to the `components/Icons/index.stories.tsx` file.

**Example `index.tsx` file**

```ts
import { Icon, IconProps } from '../IconBase';

export class IconEllipsis extends Icon {
  constructor(props: IconProps) {
    const svgDefinition = {
      iconName: 'ellipsis',
      path:
        'M8 17.5A1.5 1.5 0 0 1 6.5 19h-3A1.5 1.5 0 0 1 2 17.5v-3A1.5 1.5 0 0 1 3.5 13h3A1.5 1.5 0 0 1 8 14.5zm11-3a1.5 1.5 0 0 0-1.5-1.5h-3a1.5 1.5 0 0 0-1.5 1.5v3a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5zm11 0a1.5 1.5 0 0 0-1.5-1.5h-3a1.5 1.5 0 0 0-1.5 1.5v3a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5z',
      viewBox: '0 0 32 32',
    };
    super(props, svgDefinition);
  }
}

export default IconEllipsis;
```

Change the following:

1. Class Name and `default` Export
2. SVG Definition
   - `iconName`
   - `path`
   - `viewBox`
