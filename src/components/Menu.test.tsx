import React from 'react';
import { render } from '@testing-library/react';
import ReactDom from 'react-dom';
import Menu from './Menu';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(<Menu />,div);
});