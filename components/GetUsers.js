import React, {useEffect, useState} from 'react'
import {useQuery, gql} from '@apollo/client'
import {LOAD_USERS} from "../GraphQL/Queries"
function GetUsers() {

    const {error, loading, data} = useQuery(LOAD_USERS)

    useEffect(()=> {
console.log(data);
    }, [data])
  return (
    <div>GetUsers</div>
  )
}

export default GetUsers