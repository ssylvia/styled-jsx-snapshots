import { storiesOf } from "@storybook/react";
import { iconStoriesGenerator } from "../_iconStoriesGenerator.stories-helper";
import Icon from "./";

const stories = storiesOf("IconClose", module);

iconStoriesGenerator(stories, Icon);
