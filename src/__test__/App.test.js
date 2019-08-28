import "@testing-library/jest-dom";
import React             from 'react';
import {render, cleanup} from "@testing-library/react";
import App               from '../App';

afterEach(cleanup);

describe('App component', ()=> {
  it("matches snapshot", () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders without crashing', () => {
    render(<App/>)  
  });
})