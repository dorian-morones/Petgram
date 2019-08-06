import React from 'react'
import { PhotoCard} from '../PhotoCard/index.js'
import {photos} from '../../../api/db.json'

export const ListOfPhotoCard = () => {
    return(
        <ul>
            {photos.map(item => <li key={item.id}> <PhotoCard {...item} /></li>)}
        </ul>
    )
}