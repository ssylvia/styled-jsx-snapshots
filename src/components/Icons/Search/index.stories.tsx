import { storiesOf } from "@storybook/react";
import { iconStoriesGenerator } from "../_iconStoriesGenerator.stories-helper";
import Icon from "./";

const stories = storiesOf("IconSearch", module);

iconStoriesGenerator(stories, Icon);
