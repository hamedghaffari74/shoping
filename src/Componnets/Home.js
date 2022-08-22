import React from 'react'
import {Link} from 'react-router-dom'
const Home = () => {
  return (
    <div>
      <div className="row my-4 ">
          <div className='col-4 mx-5 '>
            <Link to='/ClothesMan' >
              <img 
              src={`https://tse1.mm.bing.net/th?id=OIP.3M47FfpI1TQn79mRGrcwwwHaFE&pid=Api&P=0`} 
              style={{ width: 565, height: 380 }}
              /></Link>
          </div>
          <div className='col-1'></div>
          <div className='col-4 mx-3 '>
            <Link to='/ClothesWoman' >
              <img style={{ width: 585, height: 380 }}
                src={`https://tse3.mm.bing.net/th?id=OIP.GWGaqwk3tPFw1g7t1nkZqQHaF1&pid=Api&P=0`}
              /> </Link>
          </div>
        </div>
    </div>
  )
}

export default Home
