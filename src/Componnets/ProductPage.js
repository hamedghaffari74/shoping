import React, { useContext, useEffect, useState } from 'react'
import ClothesContext from '../Context/ClothesContext'
import CardItem from './CardItem'
import { useParams, Link } from 'react-router-dom'
import Cart from './Cart'
import { type } from '@testing-library/user-event/dist/type'
import Alert from 'react-bootstrap/Alert';
const ProductPage = (props) => {
  const clothesContext = useContext(ClothesContext)

  const params = useParams()
  const productClick = clothesContext.product.find((item) => item.id == params.id)
  const [show ,setShow] = useState(false)
  const handleBye = () => {
    clothesContext.dispatch({ type: 'add-list', payload: { Fee: productClick.fee, Title: productClick.title } });
    alert("محصول به سبد خرید اضافه شد")
  }
  const [size, setSize] = useState()
  const [color ,setColor] =useState()


  return (
    <div className='row  '>
      <div className='col-5 '>
        <div className='boxProduct'>
          <h3 className='feeproduct'>{productClick.fee} تومان</h3>
          <div className='row me-5 mb-4'>
            <button onClick={() => setColor(5)} className={`col-2 mx-4 circleBase circle1 ${color == 5 ? 'activeColor' : ''}`} href='#'></button>
            <button onClick={() => setColor(6)} className={`col-2 mx-4 circleBase circle2 ${color == 6 ? 'activeColor' : ''}`} href='#'></button>
            <button onClick={() => setColor(7)} className={`col-2 mx-4 circleBase circle3 ${color == 7 ? 'activeColor' : ''}`} href='#'></button>
            <button onClick={() => setColor(8)} className={`col-2 mx-4 circleBase circle4 ${color == 8 ? 'activeColor' : ''}`} href='#'></button>
          </div>
          <div className='row mt-4 '>
            <h2 className=' feeproduct mx-0'>: size</h2>
            <button onClick={() => setSize(1)} className={`col-2 mx-4   SquareBase ${size == 1 ? 'activeSize' : ''}`} ><h2 className='sizeproduct'>S</h2></button>
            <button onClick={() => setSize(2)} className={`col-2 mx-4   SquareBase ${size == 2 ? 'activeSize' : ''}`} ><h2 className='sizeproduct'>M</h2></button>
            <button onClick={() => setSize(3)} className={`col-2 mx-4   SquareBase ${size == 3 ? 'activeSize' : ''}`} ><h2 className='sizeproduct'>L</h2></button>
            <button onClick={() => setSize(4)} className={`col-2 mx-4   SquareBase ${size == 4 ? 'activeSize' : ''}`} ><h2 className='sizeproduct'>XL</h2></button>
          </div>
        </div>
        
        <Link onClick={handleBye} to='/' className=" btn row container btn-primary  me-2 mt-3"> اضافه کردن به سبد خرید</Link>

      </div>
      <div className="col-2"></div>
      <div className="col-4 ">

        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner my-5   justify-content-center">
            <div class="carousel-item active">
              <img src={productClick.img} class="d-block w-80" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="..." class="d-block w-80" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="..." class="d-block w-80" alt="..." />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div> {/* <img src={productClick.img} className="imgSingle float-start ms-5" alt={`${productClick.title} ${productClick.id}`}></img> */}
      </div>

    </div>
  )
}

export default ProductPage