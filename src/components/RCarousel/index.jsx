import { Carousel } from 'antd';
import images from "../../assets/images/images"

const RCarousel = ({ data, images  }) => {
  return (
    <Carousel className='bg-slate-600'>
    {data.map(item => (
      <div key={item.id}>
        <img src={images[item.id]} alt={item.title} />
        <div className='flex py-4 items-center justify-between flex-wrap'> 
        <h2 className='text-stone-200 text-3xl'>{item.title}</h2>
        <h2 className='text-2xl text-red-600'> 租金{item.price}</h2>
        </div>
      </div>
    ))}
   
    </Carousel>
  )
}

export default RCarousel