import React, { useContext } from 'react'
import CardItem from '../CardItem'
import SideBar from '../SideBar'
import ClothesContext from '../../Context/ClothesContext'

const ListclothesWoman = () => {

    const clothesContent = useContext(ClothesContext)


    return (

        <div className='row'>
            <div className='col-3'><SideBar /> </div>
            <div className='col-8 row'> {clothesContent.product.map((item) =>
                item.type === 'T-Woman' ?
                    <div className='col-4' key={item.id} >
                        <CardItem item={item} />
                    </div> : '')

            }
            </div>

        </div>
    )
}

export default ListclothesWoman
