import { storiesOf } from "@storybook/react";

import React from "react";
import { Box } from "@material-ui/core";
import Navigation from "../components/Navigation";

storiesOf("Navigation", module)
  .addDecorator(story => (
    <Box p="5">
      {story()}
      {Array.from(Array(10).keys()).map(v => {
        return (
          <p key={v}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            explicabo corporis fuga beatae esse adipisci nesciunt recusandae
            quis quos atque nobis eaque culpa assumenda ipsam ea dicta, illum
            vel alias. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Facere explicabo corporis fuga beatae esse adipisci nesciunt
            recusandae quis quos atque nobis eaque culpa assumenda ipsam ea
            dicta, illum vel alias. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Facere explicabo corporis fuga beatae esse
            adipisci nesciunt recusandae quis quos atque nobis eaque culpa
            assumenda ipsam ea dicta, illum vel alias.
          </p>
        );
      })}
    </Box>
  ))
  .add("with text", () => <Navigation />);
