import React from 'react';
import { updateStatusThunk } from '../../store/profile/profile.action';


class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
  };
  activationEdit = () => {
    this.setState({
      editMode: true
    })
  };

  deactivationEdit = () => {
    this.setState({
      editMode: false
    });
    this.props.updateStatusThunk(this.state.status)
  };
  onStatusChange = (e) => {
    console.log(this.state.status)
    this.setState({
      status: e.currentTarget.value
    });
  };
  render() {
    return (
      <div>
        { !this.state.editMode ? (
          <div onClick={ this.activationEdit }>{ this.props.status }</div>
        ) : (
          <input type="text" value={ this.state.status }
                 onBlur={ this.deactivationEdit }
                 autoFocus={ true }
          onChange={this.onStatusChange}/>
        ) }
      </div>
    )
  }
}

export default ProfileStatus;