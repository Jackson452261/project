import { useParams } from 'react-router-dom';


const products = [
  {
    id: '1',
    title: '產品 1',
    description: '這是產品 1 的詳細描述。',
    price: 100
  },
  {
    id: '2',
    title: '產品 2',
    description: '這是產品 2 的詳細描述。',
    price: 200
  },
  {
    id: '3',
    title: '產品 3',
    description: '這是產品 3 的詳細描述。',
    price: 300
  },
   
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(product => product.id === id);

  if (!product) {
    return <div>找不到該產品</div>;
  }
  return (
    <div>
      <h2>產品ID: {id}</h2>
       <h2>{product.title}</h2>
       <p>{product.description}</p>
       <p>{product.price}</p>
    </div>
  );
};

export default ProductDetail;