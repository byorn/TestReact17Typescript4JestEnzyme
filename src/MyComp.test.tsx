import React from 'react';
import { render, screen} from '@testing-library/react';
import App from './App';
import MyComp from './MyComp';
import ReactTestUtils from 'react-dom/test-utils'; 
//import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
//import Enzyme from 'enzyme';

//enzyme.configure({ adapter: new Adapter() });
test('renders learn react link', () => {
  render(<MyComp />);
  const linkElement = screen.getByText(/hello/i);
  expect(linkElement).toBeInTheDocument();
});
