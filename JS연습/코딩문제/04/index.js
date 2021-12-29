/*
  30번 문자열 속 문자 찾기
  
  문자 pineapple에는 apple이라는 문자가 숨어 있습니다. 원범이는 이렇듯 문자열 속에 숨어있는 문자를 찾아보려고 합니다.
  첫번째 입력에서는 문자열이 입력되고, 두번째에는 찾을 문자가 입력되어야 합니다.
  그 문자가 시작하는 index를 반환하는 프로그램을 만드시오.
  
  입력: pineapple is yummy / apple
  출력: 4
 */


/*
function 문자찾는기계 (x, i) {
  const 입력된문자 = `${x}`;
  const 몇번째 = 입력된문자.indexOf(i)
  console.log(입력된문자, 몇번째)
}
문자찾는기계('pineapple is yummy', 'is');

*/
const 문자찾는기계2 = (x, y) => {
  let count = 0;
  for (let i = 0;i < x.lenght; i++){
    if(x[i] == y[count]){
      count++
      if(x.lenght == count){
        console.log(i - x.lenght + 1)
      }
    }
  }
}
문자찾는기계2('pineapple is yummy', 'is')



/*
태원이가 푼거

const solution = (firstString, findString) => {
  for(let i=0; i<firstString.length; i++){
      if(findString[0] == firstString[i]){
          console.log("index is = ",i);
          return i;
      }
  }
}

solution("pineapple is yummy","is");



const solution = (firstString, findString) => {
    let count= 0;
    for(let i=0; i<firstString.length; i++){
        if(firstString[i] == findString[count]){
            count++;
            if(findString.length == count){
                // console.log(findString.length,count);
                console.log(i - findString.length + 1);
            }
        }
    }
}

solution("다음다음은 다음은 다음","다음은");
*/


/*
주희가 푼거

function searchpara (para, search) {
  return para.indexOf(search)
}
searchpara('pineapple is yummy', 'is');
*/