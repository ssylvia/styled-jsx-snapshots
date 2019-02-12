import React, { Component, ReactNode } from 'react';
import classnames from 'classnames';

export interface IconProps {
  /** The a11y title describing the icon. Must be a string */
  title?: string | ReactNode;

  /** A valid CSS width string. Will use `1em` by default. */
  width?: string;

  /** A valid CSS height string. Will use `1em` by default. */
  height?: string;

  /** A valid CSS color string. Will use "currentColor" (font color) by default. */
  color?: string;

  /** Additional class names for adding/overriding styles */
  className?: string;
}

export interface SVGDefinition {
  /** The name of the icon. Used for class names and external references */
  iconName: string;
  /** The path defining the SVG shape. */
  path: string;
  /** The html viewBox attribute to add to the SVG tag. */
  viewBox: string;
  /** The svg children */
  children?: (content: ReactNode) => ReactNode;
}

export abstract class Icon extends Component<IconProps> {
  /** The properties defining the SVG */
  protected svgDefinition: SVGDefinition;

  constructor(props: IconProps, svgDefinition: SVGDefinition) {
    super(props);

    this.svgDefinition = svgDefinition;
  }

  public render() {
    const classNames = classnames(
      'icon',
      `icon-${this.svgDefinition.iconName}`,
      this.props.className
    );

    return (
      <span className={classNames}>
        <svg viewBox={this.svgDefinition.viewBox}>
          {typeof this.props.title === 'string' ? (
            <title>{this.props.title}</title>
          ) : (
            this.props.title
          )}
          <path d={this.svgDefinition.path} />
          {this.svgDefinition.children && this.svgDefinition.children(this.props.children)}
        </svg>
        <style jsx>{`
          span {
            display: inline-block;
            vertical-align: middle;
            line-height: 0;
          }
          svg {
            width: ${this.props.width || '1em'};
            height: ${this.props.height || '1em'};
            fill: ${this.props.color || 'currentColor'};
          }
        `}</style>
      </span>
    );
  }
}

export default Icon;
