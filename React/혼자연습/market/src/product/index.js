import {useParams} from 'react-router-dom'

function ProductPage () {
  const {id} = useParams();
  return <h1>상품 {id} 상세페이지</h1>
}


export default ProductPage;