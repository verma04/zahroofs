import router from 'next/router'
import React from 'react'
import { useEffect } from 'react'


function Html() {
    useEffect(() => {
      router.push("/markets-served")
    })
    return (
      null
    )
}

export default Html
