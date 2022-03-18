var products = [{
  name: '농구공',
  description: '농구 황제 마이클 조던이 사용한 농구공입니다',
  price: 100000,
  seller: '민수'
}, {
  name: '축구공',
  description: '축구 황제 메시가 사용한 축구공입니다',
  price: 50000,
  seller: '철수'
}]

function pra(arr){
  return console.log(arr.length);
}
pra(products)



function pra2(product){
  return product.seller
}
console.log(pra2(products[0]))


