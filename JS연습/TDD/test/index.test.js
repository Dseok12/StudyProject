/* eslint-disable */
import 소수찾기 from '../index.js'
test("1이하의 소수는 몇개?", () => {
  expect(소수찾기(1)).toEqual(`입력하신 값은 1이므로 소수가 될 수 없습니다.`);
});
