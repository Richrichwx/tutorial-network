import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainRouteHOC from '../containers/HOC/MainRouteHOC';
import Routes from '../routes'


class RouterWrapper extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <Switch>
            {Routes.map((prop) => (
              <Route
                exact={true}
                key={prop.path}
                path={prop.path}
                render={(props) => (
                  <>
                    <MainRouteHOC
                      title={prop.title}
                      description={prop.description}
                      component={prop.component}
                      history={props.history}
                    />
                  </>
                )}
              />
            ))}
          </Switch>
        </>
      </BrowserRouter>
    )
  }
}
export default RouterWrapper;