import router from 'next/router'
import React from 'react'
import { useEffect } from 'react'


function Html() {
    useEffect(() => {
      router.push("/reduce-environmental-impact")
    })
    return (
      null
    )
}

export default Html
