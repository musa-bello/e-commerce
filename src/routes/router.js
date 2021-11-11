import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Header } from './header/header'
import HomePage from './homePage/homePage'
import ShopPage from './shop/shopPage'
import SignIn from './signIn/signIn'

function RouterConfig() {
    return (
        <>
            <Header />
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/shop' component={ShopPage} />
                <Route exact path='/signin' component={SignIn} />
            </Switch>
        </>
    )
}
export default RouterConfig