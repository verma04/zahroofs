import React from 'react'
import Footer from '../components/layout/footer/Footer'
import Navbar from '../components/layout/navbar/navbar'
import Products from '../components/products/reduce-environmental-impact'
import Head from 'next/head'
function product() {
    return (
        <div>
            <Head>
            <title>High Efficiency Reciprocating Compressor Valves</title><meta property="og:site_name" content="Reciprocating Compressor Valves | Gas Compressor Valves | Compressor Reed Valve" />
<meta property="og:title" content="High Efficiency Reciprocating Compressor Valves" />
<meta property="og:description" content="Higher efficiency valves reduce waste, emissions, noise and fuel consumption." />

<meta name="description" content="Higher efficiency valves reduce waste, emissions, noise and fuel consumption." />
<meta name="keywords" content="reciprocating compressor valves" />



                </Head>
            <Navbar/>
<Products/>
<Footer/>

        </div>
    )
}

export default product
