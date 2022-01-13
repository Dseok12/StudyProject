/* eslint-disable */
import 소수찾기 from '../index.js'
// test("1이하의 소수는 몇개?", () => {
//   expect(소수가될수없어(1)).toEqual(`입력하신 값은 소수가 될 수 없습니다.`);
// });

test("소수인가?", () => {
  expect(소수찾기(9)).toEqual(`9은 소수가 아님`);
});
