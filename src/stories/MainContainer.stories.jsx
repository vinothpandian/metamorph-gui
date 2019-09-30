import { storiesOf } from "@storybook/react";

import React from "react";

import SectionContainer from "../components/SectionContainer";

storiesOf("Section Container", module)
  .add("Basic", () => <SectionContainer>Hello</SectionContainer>)
  .add("Yellow", () => (
    <SectionContainer solidBackground="#ff0">Hello</SectionContainer>
  ))
  .add("FullPage", () => (
    <SectionContainer fullPage solidBackground="green">
      Hello
    </SectionContainer>
  ));
