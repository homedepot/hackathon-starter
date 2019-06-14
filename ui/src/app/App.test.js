import React from 'react'
import { shallow } from 'enzyme'
import App from './App'
import { Route } from 'react-router-dom'
import Landing from '../landing/Landing'
import Login from '../login/Login'
import WishGalaxy from '../wish-galaxy/wishGalaxy'

describe('Default routing behavior', () => {
  const findRoute = (wrapper, index) =>
    wrapper
      .find(Route)
      .at(index)
      .props()

  it('renders the login page by default', () => {
    const wrapper = shallow(<App />)

    const loginRoute = findRoute(wrapper, 2)

    expect(loginRoute.path).toEqual('/')
    expect(loginRoute.component).toEqual(Login)

    const wishGalaxyRoute = findRoute(wrapper, 1)

    expect(wishGalaxyRoute.path).toEqual('/wish-galaxy')
    expect(wishGalaxyRoute.component).toEqual(WishGalaxy)

    const landingRoute = findRoute(wrapper, 0)

    expect(landingRoute.path).toEqual('/landing')
    expect(landingRoute.component).toEqual(Landing)
  })
})
