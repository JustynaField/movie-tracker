import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import configureMockStore from 'redux-mock-store';
import NavBarContainer from './NavBarContainer';
import NavBar from './NavBar';

const state = {
  user: {
    name: '',
    email: '',
    password: '',
    id: ''
  }
}

const mockStore = configureMockStore()(state);

const setup = () => {
  const Container = mount(<Provider store={mockStore}>
                            <NavBarContainer history={browserHistory} />
                          </Provider>);
  const Component = Container.find(NavBar);

  return { Container, Component }
};

describe.skip('NavBarContainer', () => {
  const { Container, Component } = setup();

  it('should pass the appropriate props from state', () => {
    expect(Object.keys(Component.props())).toContain('user');
  });

  it('should pass down the correct actions as props', () => {
    expect(Object.keys(Component.props())).toContain('signOut');
  });
});

describe('NavBar component', () => {

  it('should render expected elements', () => {
    const wrapper = shallow(<NavBar user={state.user}/>);

    expect(wrapper.find('h2').text()).toEqual('');
    expect(wrapper.find('NavLink').length).toBe(3);
  });

  it.skip('should display login button if user is undefined', () => {
    const wrapper = mount(<NavBar user={{}} history={browserHistory} />);

    const button = wrapper.find('link').last()

    expect(button.text()).toEqual('Login');
  });

  it.skip('should redirect to login if user logs out', () => {
    spyOn(browserHistory, 'replace');
    const mockUser = {
      name: 'Dude',
      email: 'suh@gmail.com',
      password: 'gucci',
      id: 1
    }
    const wrapper = mount(<NavBar user={mockUser} history={browserHistory} />);

    const logOutButton = wrapper.find('a');

    logOutButton.simulate('click');

    expect(browserHistory.replace).toHaveBeenCalledWith('/login');
  });
});
