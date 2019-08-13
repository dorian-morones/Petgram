import React, { Fragment } from 'react'
import { Home } from './Pages/Home.js'
import {GlobalStyle} from './Styles/GlobalStyles.js'
import { PhotoCardWithQuery } from './Container/PhotoCardWithQuery.js'
import {Logo} from "./Components/Logo/index.js"
import { Router } from '@reach/router'

export const App = () => {
    const urlParams = new window.URLSearchParams(window.location.search)
    const detailId = urlParams.get('detail')
    console.log('detail', detailId)
    
    return(
    <Fragment>
        <GlobalStyle />
        <Logo />
        { detailId ? 
        <PhotoCardWithQuery id={detailId} />
        :
        <Router>
            <Home path='/'/>
            <Home path='/pet/:id'/>
        </Router>
        }

    </Fragment>

    )
}