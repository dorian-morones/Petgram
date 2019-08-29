import React, { Fragment } from 'react'
import { ListOfCategories } from '../Components/ListOfCatefories/index'
import { ListOfPhotoCard } from '../Container/ListOfPhotoCards.js'

export const Home = ({Categoryid}) => (
    <Fragment>
        <ListOfCategories />
        <ListOfPhotoCard categoryId={Categoryid}/>
    </Fragment>
)