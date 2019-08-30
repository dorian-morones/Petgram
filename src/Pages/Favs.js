import React, { Fragment } from 'react'
import {FavsWithQuery} from "../Container/GetFavorites"

export const Favs = () => (
    <Fragment>
        <h1 className="title">Favs</h1>
        <FavsWithQuery />
    </Fragment>
)