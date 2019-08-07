import React from 'react';

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
  };
  activationEdit = () => {
    this.setState({
      editMode: true,
      status:  this.props.status
    })
  };

  deactivationEdit = () => {
    this.props.updateStatusThunk(this.state.status);
    this.setState({
      editMode: false
    });
  };
  onStatusChange = (e) => {
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