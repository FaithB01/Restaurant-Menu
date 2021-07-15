import Button from './Button';
import { render,cleanup } from '@testing-library/react';

import ReactDom from 'react-dom';

afterEach(cleanup);
test('renders correctly',()=>{
  const div=document.createElement('div');
  render(<Button />);
  ReactDom.unmountComponentAtNode(div)
}
);
 
//test('renders button correctly',()=>{
 // const {getByTestId}=render(<Button  />);
  //expect(getByTestId('button')).toHaveTextContent('submit')
//})


