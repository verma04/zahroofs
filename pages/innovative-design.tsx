import Head from 'next/head'
import React from 'react'
import Footer from '../components/layout/footer/Footer'
import Navbar from '../components/layout/navbar/navbar'
import Products from '../components/products/innovative-design'


function product() {
    return (
        <div>
            <Head>
     
		<title>Reciprocating Compressors | Compressor Valve Efficiency | Compressor Valve Reliability | Compressor Valve Serviceability</title><meta property="og:site_name" content="Reciprocating Compressor Valves | Gas Compressor Valves | Compressor Reed Valve" />
<meta property="og:title" content="REciprocating Compressors | Compressor Valve Efficiency | Compressor Valve Reliability | Compressor Valve Serviceability" />
<meta property="og:description" content="ZVI Straightflo reciprocating compressor valves have a modular design that results in improved compressor efficiency, improved valve reliability, better serviceability and reduced operating costs." />

<meta name="description" content="ZVI Straightflo reciprocating compressor valves have a modular design that results in improved compressor efficiency, improved valve reliability, better serviceability and reduced operating costs." />
<meta name="keywords" content="reciprocating compressors, compressor efficiency, compressor valve reliability, compressor valve serviceability" />



                </Head>
          
          
            <Navbar/>
<Products/>
<Footer/>

        </div>
    )
}

export default product
