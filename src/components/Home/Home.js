import React,{ useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { ACCESS_TOKEN_NAME, API_BASE_URL } from '../../constants/apiContants';
import axios from 'axios';
function Home(props) {
    useEffect(() => {
        axios.get(API_BASE_URL+'/infoUser', { headers: { 'token': localStorage.getItem(ACCESS_TOKEN_NAME) }})
        .then(function (response) {
            if(response.status === 200){
              console.log("oke",response.data.email)
            }
        })
        .catch(function (error) {
          console.error("is-error",error)
        });
      })

    return(
      <h1>Home</h1>
    )
}

export default withRouter(Home);