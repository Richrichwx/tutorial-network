import React from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';


export const WithAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      const {isAuth} = this.props;
      if(!isAuth)
        return <Redirect  to="/login" />
      return (
          <Component {...this.props}/>
      )
    }
  }
      return RedirectComponent
};
const mapStateToProps = state => ({
  isAuth: state.auth.isAuth
});
export default connect(mapStateToProps)(WithAuthRedirect)