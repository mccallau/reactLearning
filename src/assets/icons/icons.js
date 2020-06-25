import React from 'react';

import { ReactComponent as Icon1 } from './house.svg'
import { ReactComponent as Icon2 } from './browser.svg'
import { ReactComponent as Icon3 } from './shield.svg'
import { ReactComponent as Icon4 } from './menu.svg'

function ico1() {
    return (
      <Icon1
      alt="house icon"
      width="40"
      height="40"
      className="sidenav-icon"
      />
    )
}

function ico2() {
    return (
      <Icon2
      alt="browser icon"
      width="40"
      height="40"
      className="sidenav-icon"
      />
    )
}

function ico3() {
    return (
      <Icon3
      alt="shield icon"
      width="40"
      height="40"
      className="sidenav-icon"
      />
    )
}

function ico4() {
    return (
      <Icon4
      alt="menu icon"
      width="40"
      height="40"
      className="menu-icon"
      />
    )
}

export {
  ico1,
  ico2,
  ico3,
  ico4
}
