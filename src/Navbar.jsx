import { Link } from 'react-router-dom';
 

const Navbar = () => {

     return(
        <div className='navbar'>
 <Link to ="/"> 首頁 </Link>
 <Link to ="/Favorite"> 收藏頁面 </Link>
 <Link to ="/ProductDetail"> 商品詳細頁面 </Link>
        </div>
     )
}
export default Navbar
