import React from 'react'
import './Card.css'


export default function Card({title, body, parametrs, imageUrl}) {
    return (
        <div className='card-container'>
            <div className="img-container">
                <img src={imageUrl} alt=''/>
            </div>
            <div className="card-content">
            <div className="card-title">
                <h3>{title}</h3>
            </div>
            <div className="card-body">
                <p>{body}</p>
            </div>
            <div className="card-parametrs">
                {parametrs}
            </div>
            </div>
        </div>
    )
}

