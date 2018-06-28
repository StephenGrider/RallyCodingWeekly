import React from 'react';
import App from './App';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<App />).toJSON();

  expect(rendered).toMatchSnapshot();
});

it('renders with given text', () => {
  const rendered = renderer.create(<App headerText="Hi There" />).toJSON();

  expect(rendered).toMatchSnapshot();
});
