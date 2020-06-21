import React, { useContext, useEffect } from 'react'
import AuthContext from "../../context/Authentication/authContext"

const Purchase = () => {

  // Get context authetication info
  const authContext =  useContext(AuthContext);
  const {  user, authenticatedUser, logoutSession } = authContext

  useEffect(()=> {
    authenticatedUser()
  },[]);

  return (
    <>
    <h1>Purchase</h1>
    {user ? <p>{user.name}</p> : null}
    <button
      onClick={() => {logoutSession()}}
    >Sair</button>
    </>
  )
}

export default Purchase;