import {useParams} from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

function ProductPage () {
  const {id} = useParams();
  const [product, setProduct] = useState(null);
  useEffect(function(){
    axios.get(
      `https://c50bc3d7-0b3c-4a7e-98ba-182184c4fa3a.mock.pstmn.io/products/${id}`
    )
    .then(function(result){
      setProduct(result.data)
    })
    .catch(function(error){
      console.log(error)
    })
  }, [])

  if(product === null){
    return <h1>상품정보를 받고있습니다...</h1>
  }

  return (
    <div>
      <div id="image_box">
        <img src={'/' + product.imageUrl} />
      </div>
      <div id="profile_box">
        <img src="/images/icons/avatar.png" />
        <span>{ product.seller }</span>
      </div>
      <div id='contents_box'>
        <div id='name'>
          {product.name}
        </div>
        <div id='price'>
          {product.price}원
        </div>
        <div id='description'>
          {product.desctiption}
        </div>
      </div>
    </div>
  )
}


export default ProductPage;