import { Icon, IconProps } from '../IconBase';

export class IconClose extends Icon {
  constructor(props: IconProps) {
    const svgDefinition = {
      iconName: 'close',
      path:
        'M16.707 16l10.607 10.606-.708.707L16 16.707 5.394 27.313l-.708-.707L15.293 16 4.686 5.394l.708-.707L16 15.293 26.606 4.687l.708.707z',
      viewBox: '0 0 32 32',
    };
    super(props, svgDefinition);
  }
}

export default IconClose;
