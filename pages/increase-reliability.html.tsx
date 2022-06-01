import router from 'next/router'
import React from 'react'
import { useEffect } from 'react'


function Html() {
    useEffect(() => {
      router.push("/increase-reliability")
    })
    return (
      null
    )
}

export default Html
