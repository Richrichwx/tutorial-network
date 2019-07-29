import React from 'react'
import { withRouter } from 'react-router'

function MainRouteHOC({ location, component: Component, title, description, isMain, match, history, ...rest }) {
  debugger
  const isStart = localStorage.getItem('first');
  window.navigate = history;
  if (history.location.pathname === '/') history.push('/');

  if (isStart) {
    return (
      <React.Fragment>
        <div className='container'>
          <Component match={match} {...rest} />
        </div>
      </React.Fragment>
    )
  }

  return (
    <React.Fragment>
      <div className="main">
        <Component match={match} {...rest} />
      </div>
    </React.Fragment>
  )
}

export default withRouter(MainRouteHOC)
