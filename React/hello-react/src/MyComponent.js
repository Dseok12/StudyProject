import React from 'react';
import PropTypes from 'prop-types';


const MyComponent = ({ name, favoriteNumber, normalNumber, children }) => {
  return (
  <div>
    안녕하세요, 제 이름은 {name}입니다.<br />
    children 값은 {children}
    입니다.
    <br/>
    이거는 그냥 PropTypes로 숫자 받아온 것 = { normalNumber }
    <br/>
    제가 좋아하는 숫자는 { favoriteNumber }입니다.
  </div>
  )
}

MyComponent.defaultProps = {
  name: '기본이름'
}
MyComponent.propTypes = {
  name: PropTypes.string,
  normalNumber: PropTypes.number,
  favoriteNumber: PropTypes.number.isRequired
}




export default MyComponent;