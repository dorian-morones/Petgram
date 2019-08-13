import React from 'react'
import { PhotoCard } from '../components/PhotoCard'

import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'
import { Loading } from '../Components/Loading/index.js'
const GET_SINGLE_PHOTO = gql`
query getSinglePhoto($id:ID!) {
  photo(id:$id) {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}`

const rederProp =  ({ loading, error, data }) => {
    if(loading) return <Loading />
    if(error) return <p>Error!</p>

    const { photo = {} } = data
    return <PhotoCard {...photo} />
}

export const PhotoCardWithQuery = ({ id }) => (
    <Query query={GET_SINGLE_PHOTO} variables={{ id }}>
      {rederProp}
    </Query>
  )