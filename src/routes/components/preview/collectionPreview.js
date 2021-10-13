import React from 'react'
import { CollectionItem } from '../collectionItem/collectionItem'
import './style.scss'

export const CollectionPreview = ({title, items}) => {
    return (
        <div className='collection-preview'>
            <div className='title'>
                <h1>{title.toUpperCase()}</h1>
            </div>
            <div className='preview'>
                { items.filter((item, index)=> index < 4).map( ({id, ...props}) => (
                    <CollectionItem key={id} {...props}/>
                )) }
            </div>
        </div>
    )
}
