import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from './homePage/homePage'
import ShopPage from './shop/shopPage'

function RouterConfig() {
    return (
        <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/shop' component={ShopPage}/>
        </Switch>
    )
}
export default RouterConfig