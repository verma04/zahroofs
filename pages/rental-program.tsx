import React from 'react'
import Footer from '../components/layout/footer/Footer'
import Navbar from '../components/layout/navbar/navbar'
import Products from '../components/products/rental-program'
import Head from 'next/head'
function product() {
    return (
        <div>

            <Head>
            <title>Zahroof Valves Rental Program - Rugged Valves, Easy Rental</title><meta property="og:site_name" content="Reciprocating Compressor Valves | Gas Compressor Valves | Compressor Reed Valve" />
<meta property="og:title" content="Zahroof Valves Rental Program - Rugged Valves, Easy Rental" />
<meta property="og:description" content="Access award-winning Zahroof StraightFlo compressor valves with no upfront cost and no long term obligation. Return the valves at any time. Experience the benefits of increased reliability, improved performance, reduction in inventory and no machining." />

<meta name="description" content="Access award-winning Zahroof StraightFlo compressor valves with no upfront cost and no long term obligation. Return the valves at any time. Experience the benefits of increased reliability, improved performance, reduction in inventory and no machining." />
<meta name="keywords" content="Zahroof Valves Rental Program,  Compressor Valve Rental, Valve Lease" />


                </Head>
            <Navbar/>
<Products/>
<Footer/>

        </div>
    )
}

export default product
