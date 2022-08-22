import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavLink } from "react-router-dom"

const CardItem = ({ item, props }) => {

    


return (
    <div className='container '>
        <Card style={{ width: '18rem' }} className="CardItem mt-4">
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <img src={item.img} className="card-img-top imgProduct" alt="..." />

                <Card.Text>
                    Some quick example text to build on the card title
                </Card.Text>
                <NavLink to={`/singleproduct/${item.id}`}  variant="primary"> <h3>{item.fee}</h3></NavLink>
            </Card.Body>
        </Card></div>
)
}

export default CardItem
