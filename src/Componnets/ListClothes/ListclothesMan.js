import React, { useContext } from 'react'
import CardItem from '../CardItem'
import ClothesContext from '../../Context/ClothesContext'
import SideBar from '../SideBar'
const ListclothesMan = () => {

    const clothesContent = useContext(ClothesContext)


    return (
        <div className='row'>
        <div className='col-3'><SideBar /></div>

        <div className='col-8 row'> {clothesContent.product.map((item) =>
            item.type === 'T-Man' ?
                <div className='col-4' key={item.id} >
                    <CardItem item={item} />
                </div> : '')
               
        }
        </div>
        </div>

    )
}

export default ListclothesMan
