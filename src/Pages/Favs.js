import React, { Fragment } from 'react'
import {FavsWithQuery} from "../Container/GetFavorites"
import { Layout } from "../Components/Layout/index.js"

export const Favs = () => (
    <Layout title="Tus Favoritos" subtitle="Aqui puedes encontrar animales favoritos">
        <FavsWithQuery />
    </Layout>
)