import React from 'react';
import styled from 'styled-components';

const SettingContainer = styled.div`
  width: 800px;
`;

class Setting extends React.Component {
  render() {
    return (
      <SettingContainer>Настройки</SettingContainer>
    )
  }
}

export default Setting;