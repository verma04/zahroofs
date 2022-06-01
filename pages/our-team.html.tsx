import router from 'next/router'
import React from 'react'
import { useEffect } from 'react'


function Html() {
    useEffect(() => {
      router.push("/aboutus")
    })
    return (
      null
    )
}

export default Html
