import React, {Fragment} from 'react'
import { ListOfCategories } from './Components/ListOfCatefories/index.js'
import {GlobalStyle} from './GlobalStyles.js'
import { ListOfPhotoCard } from './Components/ListOfPhotoCards/index.js'
import {Logo} from "./Components/Logo/index.js"

export const App = () => (
    <Fragment>
        <GlobalStyle />
        <Logo />
        <ListOfCategories />
        <ListOfPhotoCard />
    </Fragment>
)