import React, { Fragment, useContext } from 'react'
import { Context } from '../Context'
import { SubmitButton } from '../components/SubmitButton'

export const User = () => {
    const { removeAuth } = useContext(Context)
    return <Fragment>
      <h1>User</h1>
      <h3>Nombre:</h3>
        <h3>Ciudad:</h3>
        <h3>Descripcion:</h3>
      <SubmitButton onClick={removeAuth}>Cerrar sesión</SubmitButton>
    </Fragment>
  }