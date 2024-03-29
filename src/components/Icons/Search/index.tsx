import { Icon, IconProps } from '../IconBase';

export class IconSearch extends Icon {
  constructor(props: IconProps) {
    const svgDefinition = {
      iconName: 'search',
      path:
        'M29.385 27.97l-8.643-8.642a10 10 0 1 0-1.414 1.414l8.643 8.643zM7.343 18.656a8 8 0 1 1 11.314 0 8 8 0 0 1-11.314 0z',
      viewBox: '0 0 32 32',
    };
    super(props, svgDefinition);
  }
}

export default IconSearch;
