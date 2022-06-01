import React from 'react'
import { Section} from './Style'
import Image from 'next/image'
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from "next/router";
import axios from 'axios'
import { useForm, SubmitHandler  } from "react-hook-form";
import { useState } from 'react';
 const  MakeCall: React.FC<{}> = () => {

    type Inputs = {
        Name: string;
      
        Last: string;
        Location: string;
        Email: string;
        Subject: string;
       Message: string;
       Department: string
      };
      
      interface User {
        id: number;
        firstName: string;
      }
    const router = useRouter();

    const [loading , setLoading] = useState(false)
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();


 

    const onSubmit: SubmitHandler<Inputs> = async  data =>   {
     
      await     setLoading(true)
      
     await axios.post<User>('/api/makethecall', data)
      .then( (response) => {
        
        toast.success("Success")
        setLoading(false)
      
      })
      
    
  
    }
    return (

      
      
        <Section>
        
           
           <div id="about" className="section"  >
             
           
             

             
               <div  className="section_data" >
<div className="section_left" >

    <div  className="section-left-top" >

        <h2>Apply Now</h2>

        <h3>
        One great decision can make a huge difference.

        </h3>
        </div>

  
    
    </div>

    <div className="section_right" >
    <div className="icon">

        <ul>
            <li>
            <Image     objectFit="contain" layout="fill" src='https://app.zahroofvalves.com/wp-content/uploads/2021/08/pnqbtnq5yxgu1o7pyquc.png' alt="sd" />
            </li>
            <li>Tel</li>
            <li>(713) 554-2678</li>
        </ul>

        <ul>
            <li>  <Image     objectFit="contain" layout="fill" src='https://app.zahroofvalves.com/wp-content/uploads/2021/08/nt4lgdaec6ngnwwo8bro.png' alt="sd" /></li>
            <li>Email</li>
            <li
            
            onClick={() => window.open('mailto:info@zahroofvalves.com') }
      title="info@zahroofvalves.com"
            >info@zahroofvalves.com</li>
        </ul>
      
            </div>
    <div className="form">
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-field" >

            <div className="field" >
               
         <input {...register("Name")} placeholder="Your Name" ></input>
                </div>
                <div className="field" >
               
         <input {...register("Email")}  placeholder="Your Email" ></input>
                </div>

            </div>
          

                
           
               
                <div className="input-field-1" >

                <div className="field" >
                
         <textarea {...register("Message")}  placeholder="Message"></textarea>
                </div>
                
                </div>

                <div className="input-field" >

            <div className="field" >
               
               <label style={{fontWeight:'bolder', paddingBottom:"0.2rem"}} >Resume or Cv</label>
         <input {...register("Name")} type="file" ></input>
                </div>
               
            </div>
                <div className="input-field" >
                    {loading ? 
                    (
                        <button>Submit Message ...</button>
                    )
                    :
                    (
                        <button>Submit Message </button>
                    )

                    }
            
                </div>
                

        </form>
            
            </div>
    </div>

                   </div>
                   
              
               </div>
         
           
            
        </Section>
    )
}

export default  MakeCall