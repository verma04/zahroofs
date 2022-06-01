import router from 'next/router'
import React from 'react'
import { useEffect } from 'react'


function Html() {
    useEffect(() => {
      router.push("/reducing-total-cost-of-operation")
    })
    return (
      null
    )
}

export default Html
