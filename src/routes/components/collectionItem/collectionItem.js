import React from 'react'
import './style.scss'

export const CollectionItem = ({name, price, imageUrl, props}) => {
    return (
        <div className='collection-item'>
            <div className='image' style={{backgroundImage:`url(${imageUrl})`}}/>
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
        </div>
    )
}
