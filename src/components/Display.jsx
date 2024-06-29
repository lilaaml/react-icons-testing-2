import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import './Display.css'

const Header = () => {
  return (
    <div className="container-sm">
        <h3 className="fw-bold text-uppercase my-5 text-center p-5">
            testing react icons
        </h3>
        <h3 className="fw-bold text-uppercase my-5 text-center p-5">
            <FiShoppingCart />
        </h3>
        <h3 className="fw-bold text-uppercase my-5 text-center p-5">
            <FaRegHeart />
        </h3>
        <h3 className="fw-bold text-uppercase my-5 text-center p-5">
            <FaRegUser />
        </h3>
    </div>
  )
}

export default Header
