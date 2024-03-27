import RCarousel from "../RCarousel"
import images from "../../assets/images/images"

const RProductCard = ({data}) => {
 
  return (
    <div className="bg-slate-200  w-96 h-80  ">
       {data.map(item => (  
          <div className="flex justify-evenly items-center    ">
        <h2 className="text-4xl" key={item.id}>{item.name}    </h2>
      
      </div>
       ))}
      <RCarousel data={data} images={images}/>
      
    </div>
  )
}

export default RProductCard