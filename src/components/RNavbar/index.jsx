import { Link } from 'react-router-dom';
import { BsPersonCircle } from "react-icons/bs";
import RButton from '../RButton';
const RNavbar = () => {
  return(
    <div className='bg-slate-100 flex  items-center justify-evenly h-28 '>
      <Link to ="/"> 首頁 </Link>
      <Link to ="/Favorite"> 收藏頁面 </Link>
      <Link to ="/RoomDetail"> 商品詳細頁面 </Link>
      <RButton shape="round">登入</RButton> 
      <RButton type="text" className="bg-red-500 text-lg " shape="round">登出</RButton>
      <BsPersonCircle className='text-3xl text-gray-400 cursor-pointer' />
    </div>
  )
}
export default RNavbar
