import React from 'react';


class ProfileStatus extends React.Component {
  state = {
    status: 'Hello my  friends',
    editMode: false
  };

  activatedAditMode = () => {
    this.setState({
      editMode: true
    })
  };
  diactivatedAditMode = () => {
    this.setState({
      editMode: false
    })
  };

  render() {
    return (
      <div>
        { !this.state.editMode ? (
          <div onClick={ this.activatedAditMode }>{ this.state.status }</div>
        ) : (
          <input type="text" value={ this.state.status }
                 onBlur={ this.diactivatedAditMode }
                 autoFocus={ true }/>
        ) }
      </div>
    )
  }
}

export default ProfileStatus;