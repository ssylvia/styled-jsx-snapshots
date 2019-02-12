import React from "react";
import { storiesOf } from "@storybook/react";
import SearchBox from "./";

const stories = storiesOf("SearchBox", module);
const decoratorOptions = {};

stories.add(
  "Default",
  () => (
    <SearchBox
      id="storybook-searchbox"
      label="Search"
      clearBtnLabel="Clear search"
      placeholder="Search Stories"
      onChange={() => {}}
      onClear={() => {}}
    />
  ),
  decoratorOptions
);
