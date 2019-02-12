import React, { Component } from "react";
import { IconProps } from "./IconBase";
export const iconStoriesGenerator = (
  stories: { add: (name: string, story: () => {}, decoratorOptions: {}) => {} },
  // tslint:disable-next-line no-any
  IconComponent: new (...args: any[]) => Component<IconProps>
) => {
  const decoratorOptions = {};

  stories.add(
    "Default",
    () => (
      <div className="STORYBOOK-STYLE-WRAPPER" style={{ fontSize: "3em" }}>
        <IconComponent />
      </div>
    ),
    decoratorOptions
  );

  stories.add(
    "With Class",
    () => (
      <div className="STORYBOOK-STYLE-WRAPPER" style={{ fontSize: "3em" }}>
        <IconComponent className="test-class" />
      </div>
    ),
    decoratorOptions
  );

  stories.add(
    "With Color",
    () => (
      <div className="STORYBOOK-STYLE-WRAPPER" style={{ fontSize: "3em" }}>
        <IconComponent color="red" />
      </div>
    ),
    decoratorOptions
  );

  stories.add(
    "With a11y Title",
    () => (
      <div className="STORYBOOK-STYLE-WRAPPER" style={{ fontSize: "3em" }}>
        <IconComponent title="Title" />
      </div>
    ),
    decoratorOptions
  );
};
