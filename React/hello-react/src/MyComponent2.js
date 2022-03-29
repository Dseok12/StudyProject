import React, { Component } from 'react';
import PropTypes from 'prop-types'


class MyComponent2 extends Component {
  render(){
    const { name, favoriteNumber, children } = this.props;

    return (
      <div>
        안녕하세요. 제 이름은 { name }입니다.<br/>
        children값은 { children }입니다.
        
      </div>
    );
  }

}

MyComponent2.defaultProps = {
  name: '기본 이름'
}

MyComponent2.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired
}

export default MyComponent2;