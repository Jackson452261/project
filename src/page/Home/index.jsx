import RLayout from "../../components/layouts/RLayout"
 
import RProductCard from "../../components/RProductCard"
import RNavbar from "../../components/RNavbar"
import RInput from "../../components/RInput"
import RCarousel from "../../components/RCarousel"

const carouselData = [
  {
    id: 1,
    name:'台中物件',
    title: '物件1',
    price: 1000,
 
  },
  {
    id: 2,
    title: '物件2',
    price: 2000,
  
   
  },
  {
    id: 3,
    title: '物件3',
    price: 3000,
    
    
  },
]
 const carouselDataTwo = [ 
  {
    id: 4,
    name: '台北物件',
    title: '物件1',
    price: 4000,
 
  },
  {
    id: 5,
    title: '物件2',
    price: 5000,
   
  },
  {
    id: 6,
    title: '物件3',
    price: 6000,
    
  },
 
]

const carouselThree = [
  {
    id:7, 
    name: '高雄物件',
    title: '物件1',
    price: 7000,
  },
  {
    id:8, 
    title: '物件2',
    price: 8000,
  },
  
  {
    id:9, 
    title: '物件3',
    price: 9000,
  },
 
]

const products = [
  {
    id: 1,
    data: carouselData
  },
  {
    id: 2,
    data: carouselDataTwo
  },
  {
    id: 3,
    data: carouselThree
  }
]


 

const Home = () => {
  return (
    <RLayout>
     <RNavbar />
     <RInput />
     <div className="flex flex-wrap justify-around">
     {products.map(product => (
     
      <RProductCard  key={product.id} data={product.data}/>
     ))}
     
      </div>
    </RLayout>
  )
}

export default Home