import React from 'react';
import './index.css';
import axios from 'axios';
import {Link} from 'react-router-dom'

function MainPage () {

  const [products, setProducts] = React.useState([]);

  React.useEffect(
    function(){
      axios.get('https://c50bc3d7-0b3c-4a7e-98ba-182184c4fa3a.mock.pstmn.io/products')
        .then(function(result){
          console.log('데이터전송 성공: ', result)
          const products = result.data.products;
          setProducts(products)
          
        }).catch(function(error){
          console.error('error 발생 : ', error)
        })
    },[])
    




  return (
    <div>
      <div id="banner">
        <img src="./images/banners/banner1.png" alt="" />
      </div>
      <h1>판매되는 상품들</h1>
      <div id="product-list">
        {products.map(function(product, index){
          return (
            <div className='product_card'>
              <Link className='product_link' to={`/products/${product.id}`}>
                <div>
                  <img className='product_img'
                  src={product.imageUrl} alt='' />
                </div>
                <div className='product_contents'>
                  <span className='product_name'>
                    {product.name}
                  </span>
                  <span className='product_price'>
                    {product.price}원
                  </span>
                  <div className='product_seller'>
                    <img className='product_avatar'
                    src='images/icons/avatar.png' alt='' />
                    <span>
                      {product.seller}
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          )
        })}
        
      </div>
    </div>
  )
}


export default MainPage;