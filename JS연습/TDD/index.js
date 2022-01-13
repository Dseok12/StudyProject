/* eslint-disable */
// const 소수가될수없어 = (_input) => {
//   if(_input <= 1) {return `입력하신 값은 ${_input}이므로 소수가 될 수 없습니다.`}
// };

const 소수찾기 = (input) => {
  for (let i = 2; i < input; i++) {
    if (input % i === 0) {
      return `${input}은 소수가 아님`;
    }
  }

  return `${input}은 소수`;
}

export default 소수찾기;
