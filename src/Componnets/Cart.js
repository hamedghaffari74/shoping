import React, { useState, useContext ,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ClothesContext from '../Context/ClothesContext'
import Foter from './Foter'

const Cart = ({ Item }) => {
    const context = useContext(ClothesContext)

  

    return <>
        <div className='CartTitle mt-3 mx-4 row'>
            <div className='col-2'><h3>لیست خرید شما</h3></div>
            <div className='col-6'></div>
            <div className='col-2'>تعداد محصولات : {context.products.length}</div>
        </div>
        <div className='CartBody mt-3 mx-4 row'>
            <div className='col-3 bold'>
                نام محصول :
                <ol>
                    {context.products.map((item) => <li key={item.key}>{item.Title}</li>)}
                </ol>
            </div>
            <div className='col-3'></div>
            <ol className='col-3 bold '>قیمت :
                {context.products.map((item) => <li key={item.key}>
                 {item.Fee}
                </li>)}
            </ol>
            <div style={{ borderBottom: '2px solid' }}></div>
            <div className='col-3'></div>
            <div className='col-3'></div>
            <button  className='col-3 btn btn-success'>هزینه نهایی :</button>
        </div>
        <button  className='btn btn-success mt-3 mx-4'>پرداخت </button>
        
        <Foter />


        
    </>

}

export default Cart
