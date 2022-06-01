import React from 'react'
import Footer from '../components/layout/footer/Footer'
import Navbar from '../components/layout/navbar/navbar'
import Products from '../components/products/reduce-energy-consumption'
import Head from 'next/head'
function product() {
    return (

        
        <div>
            <Head>
            <title>Energy Efficient Gas Compressor Valve</title><meta property="og:site_name" content="Reciprocating Compressor Valves | Gas Compressor Valves | Compressor Reed Valve" />
<meta property="og:title" content="Energy Efficient Gas Compressor Valve" />
<meta property="og:description" content="Gas flows straight through the Straightflo valve compared to a conventional valve decreasing gas losses." />

<meta name="description" content="Gas flows straight through the Straightflo valve compared to a conventional valve decreasing gas losses." />
<meta name="keywords" content="reciprocating compressor valve, gas compressor valves" />

                </Head>
            <Navbar/>
<Products/>
<Footer/>

        </div>
    )
}

export default product
