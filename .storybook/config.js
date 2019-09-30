import React from 'react';

import { configure, addDecorator } from '@storybook/react';

import { addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';

import { MemoryRouter } from 'react-router-dom';
import theme from '../src/assets/theme';

import './styles.scss';
const req = require.context('../src/stories', true, /.stories.jsx$/);

function loadStories() {
  req.keys().forEach(req);
}

const AppProvider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MemoryRouter>{children}</MemoryRouter>
    </ThemeProvider>
  );
};

addDecorator(story => <AppProvider>{story()}</AppProvider>);

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS
  }
});

configure(loadStories, module);
