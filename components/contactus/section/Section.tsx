import React from "react";
import { Section } from "./Style";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import sgMail from    "@sendgrid/mail";
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from "next/router";
interface Section {
  data: {
    contactaddress: string;
    content: string;
  }; // Change the required prop to an optional prop.
}



type Inputs = {
  Name: string;

  Last: string;
  Location: string;
  Email: string;
 Company: string;
 Comment: string;
 Phone: string
};

interface User {
  id: number;
  firstName: string;
}


const HeroSection: React.FC<Section> = (data) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();


  const router = useRouter()

  const onSubmit: SubmitHandler<Inputs> = async  data =>   {

    
    axios.post<User>('/api/formEnquiry', data)
    .then((response) => {
      
  router.push('/thank-you')
    
    })
    
  

  }

  return (
    <Section>
      <div className="section">
        <div className="section_data">
          <div className="section_left">
            <div
              dangerouslySetInnerHTML={{ __html: data.data.content }}
              className="section-left-top"
            >
              {/* <h2>REQUEST
A QUOTE</h2>

        <h3>
        Thank you for your interest in Zahroof
StraightFlo Valves. All inquiries sent via USPS
mail should be addressed directly to Zahroof
Valves, Inc. If you d like a more immediate
quote, please use the contact form to the right
        </h3>
       */}
            </div>

            <div
              dangerouslySetInnerHTML={{ __html: data.data.contactaddress }}
              className="section-left-bottom"
            >
              {/* <ul>
<li>Headquarters:</li>

<li><h3>8535-N Jackrabbit Rd.</h3> </li>
<li><h3>Houston, TX USA 77095 </h3></li>

      </ul>

      <ul>
    <li> <h3>  Office: (713) 554-2678 </h3> </li>
   <li>  <h3>E-mail: sales@zahroofvalves.com</h3> </li>
      </ul>
        */}
            </div>
          </div>

          <div className="section_right">
            <div className="form">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input-field">
                  <div className="field">
                    <label>Name*</label>
                    <input {...register("Name")}></input>
                  </div>
                  <div className="field">
                    <input {...register("Last")}></input>
                  </div>
                </div>
                <div className="input-field">
                  <div className="field">
                    <label>Phone*</label>
                    <input {...register("Phone")}></input>
                  </div>
                  <div className="field">
                    <label>Company*</label>
                    <input {...register("Company")} ></input>
                  </div>
                </div>
                <div className="input-field">
                  <div className="field">
                    <label>Email*</label>
                    <input {...register("Email")}></input>
                  </div>
                  <div className="field">
                    <label>Location*</label>
                    <input {...register("Location")}></input>
                  </div>
                </div>
                <div className="input-field-2">
                  <div className="field">
                    <label>Select One*</label>
                    <select name="pets" id="pet-select">
                      <option value="">I Would Like An Estimate</option>
                      <option value="dog">Additional Information</option>
                      <option value="cat">General Inquiry</option>
                      <option value="hamster">Design Integration</option>
                   
                    </select>
                  </div>
                </div>

                <div className="input-field">
                  <div className="field-1">
                    <label>Select File*</label>
                    <input type="file"></input>
                  </div>
                </div>
                <div className="input-field-1">
                  <div className="field">
                    <label >Comment*</label>
                    <textarea {...register("Comment")}></textarea>
                  </div>
                </div>
                <div className="input-field">
                  <button>Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
   
      <div className="section-1">
        <div className="section_data">
          <div className="section_left">
            <div
            
              className="section-left-top"
            >
               <h2>REQUEST
A QUOTE</h2>

        <h3>
        Thank you for your interest in
Zahroof StraightFloTM Valves.
Please use the
contact form to the bottom
for an immediate quote.
        </h3> 
       
            </div>

         
          </div>

       
       
       
          <div className="section_right">
            <div className="form">
              <form>
                <div className="input-field">
                  <div className="field">
                    <label>Name*</label>
                    <input></input>
                  </div>
                  <div className="field">
                    <input></input>
                  </div>
                </div>
                <div className="input-field">
                  <div className="field">
                    <label>Phone*</label>
                    <input></input>
                  </div>
                  <div className="field">
                    <label>Company*</label>
                    <input></input>
                  </div>
                </div>
                <div className="input-field">
                  <div className="field">
                    <label>Email*</label>
                    <input></input>
                  </div>
                  <div className="field">
                    <label>Location*</label>
                    <input></input>
                  </div>
                </div>
                <div className="input-field-2">
                  <div className="field">
                    <label>Select One*</label>
                    <select name="pets" id="pet-select">
                      <option value="">I Would Like An Estimate</option>
                      <option value="dog">Additional Information</option>
                      <option value="cat">General Inquiry</option>
                      <option value="hamster">Design Integration</option>
                   
                    </select>
                  </div>
                </div>

                <div className="input-field">
                  <div className="field-1">
                    <label>Select File*</label>
                    <input type="file"></input>
                  </div>
                </div>
                <div className="input-field-1">
                  <div className="field">
                    <label>Comment*</label>
                    <textarea></textarea>
                  </div>
                </div>
                <div className="input-field">
                  <button>Submit</button>
                </div>
              </form>
            </div>
          </div>
       
         
          <div className="section_left_bottom">
        

            <div
              dangerouslySetInnerHTML={{ __html: data.data.contactaddress }}
              className="section-left-bottom"
            >
              {/* <ul>
<li>Headquarters:</li>

<li><h3>8535-N Jackrabbit Rd.</h3> </li>
<li><h3>Houston, TX USA 77095 </h3></li>

      </ul>

      <ul>
    <li> <h3>  Office: (713) 554-2678 </h3> </li>
   <li>  <h3>E-mail: sales@zahroofvalves.com</h3> </li>
      </ul>
        */}
            </div>
          </div>

       
       
       
        </div>
      </div>
   
   
   
   
    </Section>
  );
};

export default HeroSection;
