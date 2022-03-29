import React from 'react';
import PropTypes from 'prop-types'


const MyComponent = ({ name, favoriteNumber, children }) => {
  // props를 밑에와 같이 묶어서 사용할 수 있다.
  // 그렇게 되면 props.name / props.children과 같이 길게 쓸 필요가 없다.
  // 이것을 비구조화 할당 문법이라고 한다.
  // const { name, children } = props;
  return (
    <div>
      안녕하세요. 제 이름은 { name }입니다.<br/>
      children값은 { children }입니다.
    </div>
  );
}

MyComponent.defaultProps = {
  name: '기본 이름'
}

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired
}

export default MyComponent;