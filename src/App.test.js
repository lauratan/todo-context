import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, mount } from 'enzyme';
import App from './App';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import TodoCounter from './components/TodoCounter';

configure({adapter: new Adapter()});

describe('App component tests', () => {
  it('renders without crashing', () => {
    shallow(<App/>);
  });

  it('renders AddTodo component', () => {
    const wrapper = mount(<App/>);
    expect(wrapper.find(AddTodo));
  });

  it('renders TodoList component', () => {
    const wrapper = mount(<App/>);
    expect(wrapper.find(TodoList));
  });

  it('renders TodoCounter component', () => {
    const wrapper = mount(<App/>);
    expect(wrapper.find(TodoCounter));
  });

})