import React, { useContext, useEffect } from "react";
import { Route,  Redirect } from "react-router-dom"; 
import AuthContext from "../../context/Authentication/authContext";

const PrivateRoute = ({ component: Component, ...props }) => {

  // Get context authetication info
  const authContext = useContext(AuthContext);
  const { authenticated, loading, authenticatedUser } = authContext

  useEffect(() => {
    authenticatedUser()
  },[]);

  return (
    <Route
      {...props} render={props => !authenticated && !loading  ? (
        <Redirect to="/"/>
      ) : ( 
        <Component {...props}/>
      )} 
    />
  );
}

export default PrivateRoute;