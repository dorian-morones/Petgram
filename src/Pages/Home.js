import React from 'react'
import { ListOfCategories } from '../Components/ListOfCatefories/index'
import { ListOfPhotoCard } from '../Container/ListOfPhotoCards.js'
import { Layout } from "../Components/Layout/index.js"

export const Home = ({Categoryid}) => (
    <Layout title="Tu app de mascotas" subtitle="En petgram puedes encontrar fotos de mascotas muy bonitas">
        <ListOfCategories />
        <ListOfPhotoCard categoryId={Categoryid}/>
    </Layout>
)