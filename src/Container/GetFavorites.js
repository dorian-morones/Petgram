import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'
import { FavList } from '../Components/FavList/FavList.js'

const GET_FAVS = gql`
  query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`

const renderProp = ({ loading, error, data }) => {
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error!</p>
    const { favs } = data
  
    return  favs.map( favs => <FavList key={favs.id} data={favs}/>)
}

export const FavsWithQuery = () => (
  <Query query={GET_FAVS} >
    {renderProp}
  </Query>
)