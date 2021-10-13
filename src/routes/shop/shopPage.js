import React, { Component } from 'react'
import shopData from './shopData'
import { CollectionPreview } from '../components/preview/collectionPreview'

export default class ShopPage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             collections: shopData
        }
    }
    
    render() {
        const { collections } = this.state
        return (
            <div className='shop-page'>
                {/* {collections.map({id, ...props} => {
                    return <CollectionPreview key={id} {...props}/>
                }} */}
                { collections.map(({id, ...props}) => (
                    <CollectionPreview key={id} {...props} />
                ) ) }
            </div>
        )
    }
}
