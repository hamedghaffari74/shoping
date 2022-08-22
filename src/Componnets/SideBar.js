import React from 'react'
import { NavLink } from 'react-router-dom'


const SideBar = () => {
    
    return (
        <div className='SideBar'>
            <ol className='LinkDecorGroup'>
            <NavLink  to='/ClothesMan'><li className='LinkDecor'>تیشرت مردانه </li></NavLink>
            <NavLink  to='/ClothesWoman'><li className='LinkDecor'>تیشرت زنانه</li></NavLink>
            <NavLink  to='/'><li className='LinkDecor'>شلوارمردانه</li></NavLink>
            <NavLink  to='/'><li className='LinkDecor'>شلوار زنانه</li></NavLink>
            <NavLink  to='/'><li className='LinkDecor'>اسپرت</li></NavLink>
            <NavLink  to='/'><li className='LinkDecor'>لباس کودک</li></NavLink>
            <NavLink  to='/'><li className='LinkDecor'> برنامه نویس و طراح حامد غفاری</li></NavLink>


        
            </ol>
        </div>
    )
}

export default SideBar
