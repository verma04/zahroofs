const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");
import caseStudeis from '../../caseStudeis/casestudeis.json'
export default async (req, res) => {


 
    const arr = []
    const data =  await caseStudeis.forEach(element => {

      element.category.forEach(element2 => {
       
 
         const data = {

          url:`/caseStudies/${element.slug}/${element2.slug}` ,
          changefreq: "daily", priority: 0.3 

         }

         arr.push(data)

      });
      
      
    });

  

  // An array with your links
  const links = [
    { url: "/", changefreq: "daily", priority: 0.3 },
    { url: "/c-suitebenefits", changefreq: "daily", priority: 0.3 },
    { url: "/fieldbenefits", changefreq: "daily", priority: 0.3 },
    { url: "/esgbenefits", changefreq: "daily", priority: 0.3 },
    { url: "/caseStudies", changefreq: "daily", priority: 0.3 },
   
    { url: "/aboutus", changefreq: "daily", priority: 0.3 },
    { url: "/contactus", changefreq: "daily", priority: 0.3 },
    { url: "/privacypolicy", changefreq: "daily", priority: 0.3 },
    
    { url: "/blog", changefreq: "daily", priority: 0.3 },

    { url: "/careers", changefreq: "daily", priority: 0.3 },
   


 

    { url: "/privacypolicy", changefreq: "daily", priority: 0.3 },
  
    { url: "/howitworks", changefreq: "daily", priority: 0.3 },

    { url: "/increase-reliability", changefreq: "daily", priority: 0.3 },
    { url: "/innovative-design", changefreq: "daily", priority: 0.3 },
    { url: "/reduce-energy-consumption", changefreq: "daily", priority: 0.3 },
    { url: "/reduce-environmental-impact", changefreq: "daily", priority: 0.3 },
    { url: "/reduce-operating-costs", changefreq: "daily", priority: 0.3 },
    { url: "/rental-program", changefreq: "daily", priority: 0.3 },
    { url: "/support", changefreq: "daily", priority: 0.3 },

    { url: "/caseStudies", changefreq: "daily", priority: 0.3 },
    { url: "/caseStudies/upstream-case-studies", changefreq: "daily", priority: 0.3 },
    { url: "/caseStudies/midstream-case-studies", changefreq: "daily", priority: 0.3 },
    { url: "/caseStudies/downstream-case-studies", changefreq: "daily", priority: 0.3 },


    { url: "/career/director-of-marketing", changefreq: "daily", priority: 0.3 },
    { url: "/career/business-development-manager-channel-sales", changefreq: "daily", priority: 0.3 },
    { url: "/career/director-of-business-development-international-sales", changefreq: "daily", priority: 0.3 },
    { url: "/career/business-development-manager-downstream", changefreq: "daily", priority: 0.3 },
    ...arr,
  ];

 

  // Create a stream to write to
  const stream = new SitemapStream({ hostname: `https://www.zahroofvalves.com` });

  res.writeHead(200, {
    "Content-Type": "application/xml",
  });

  const xmlString = await streamToPromise(
    Readable.from(links).pipe(stream)
  ).then((data) => data.toString());

  res.end(xmlString);
};