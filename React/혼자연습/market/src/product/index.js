import {useParams} from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

function ProductPage () {
  const {id} = useParams();
  const [product, setProducts] = useState(null);
  useEffect(function(){
    axios.get(`https://c50bc3d7-0b3c-4a7e-98ba-182184c4fa3a.mock.pstmn.io/products/${id}`)
    .then(
      function(result){
        setProducts(result.data)
      }
    ).catch(
      function(error){
        console.log(error)
      }
    )
  },[])
  console.log(product)
  return <h1>상품 {id} 상세페이지</h1>
}


export default ProductPage;