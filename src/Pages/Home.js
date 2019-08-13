import React, { Fragment } from 'react'
import { ListOfCategories } from '../Components/ListOfCatefories/index'
import { ListOfPhotoCard } from '../Container/ListOfPhotoCards.js'

export const Home = ({id}) => (
    <Fragment>
        <ListOfCategories />
        <ListOfPhotoCard categoryId={id}/>
    </Fragment>
)