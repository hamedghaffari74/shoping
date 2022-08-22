import React ,{useContext}from 'react'
import { Link } from 'react-router-dom'
import ClothesContext from '../Context/ClothesContext'
import Cart from './Cart'
const Navbar = () => {
  const clothesContext = useContext(ClothesContext)
const handleclick =()=>{
  clothesContext.products.map((item) => <Cart Item={item}/>)
}
  return (
    <nav className="navbar navbar-page navbar-expand-lg navColor">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item ">
              <Link className="nav-link navlink  active" aria-current="page" to="/">خانه </Link>
            </li>
            <li className="nav-item" >
              <Link onClick={handleclick} className="nav-link navlink" aria-current="page" to="/Cart">سبد خرید</Link>
            </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
