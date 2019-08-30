import React from 'react'
import { Img } from './styles'

export const FavList = (favs) => {
    console.log("favs", favs)
  return (
    <Img id={favs.data.id} src={favs.data.src} />
  )
}

