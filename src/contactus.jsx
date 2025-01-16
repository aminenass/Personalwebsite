import { useState } from 'react'
import React from 'react';




const allForms = [
  { name: 'Full name',id : '1', type :'text', current:false},
  { name: 'Subject', id : '2', type :"text" ,current : false},
  { name: 'Email', id : '3', type : "email", current :false},  
  { name: 'Message',id : '4' ,type :"message",current:true },
  
]

export default function Contact({contactRef}) {

  const [result, setResult] = React.useState("");

  const [formData,setFormData] = useState({
    'Full name' :'',
    'Subject' : '',
    'Email' :'',
    'Message' : '',
  })
  const formDataToSend = new FormData();
  for (const [key, value] of Object.entries(formData)) {
    formDataToSend.append(key, value);
  }
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    sendEmail()
  };
    
   const sendEmail = async () => {
      try {
        const response = await fetch("/.netlify/functions/email", {
          method: "POST",
          body: JSON.stringify(formData),
        });
  
        const data = await response.json();
        if (data.success) {
          setResult("Form Submitted Successfully");
          setFormData({
            'Full name': '',
            'Subject': '',
            'Email': '',
            'Message': '',
          });
        } else {
          setResult(data.message);
        }
      } catch (error) {
        console.error("Error:", error);
        setResult("There was an error submitting the form.");
      }
    };
  
  const setAnotherform = () => {
    setResult("")
    setFormData({
      'Full name' :'',
      'Subject' : '',
      'Email' :'',
      'Message' : '',
    })
  }

  return (
    
    <div ref={contactRef} id="contact-section"> 
    {result === "Form Submitted Successfully" ? (
                <div className="pb-24 sm:pb-32 flex sm:flex-row flex-col sm:justify-around flex-wrap items-center ">
                    <div href="#" className="bg-stone-800 rounded-xl max-w-sm flex flex-col sm:flex-row items-center flex-wrap mt-16 ">
                       <div className="my-10 mx-12 ">
                          <div className="text-center text-stone-700 text-2xl font-semibold flex justify-center items-center flex-col">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#058ED9" className="size-32 sm:size-40 mb-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            <h5 className="font-Poppins text-3xl sm:text-4xl font-semibold tracking-tight text-white  mb-4">Success !</h5>
                            <p className="font-normal text-white/75 text-lg sm:text-xl">{result}</p>
                           <div className="mt-6">
                              <button
                                onClick={setAnotherform}
                                type="submit"
                                className="block w-full rounded-md bg-custom-blue px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none"
                              >  Submit another form</button>
                            </div>
                         </div>
                       </div>
                     </div>
                 </div>
    ) : (
    <div className=" px-6 pb-24 sm:pb-32 lg:px-8 bg-gradient-to-t from-darkish via-stone-800 to-darkish ">      
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance text-4xl font-semibold font-Poppins tracking-tight text-white/90 sm:text-5xl ">Leave a <span className='underline underline-offset-8 decoration-custom-blue'>Message</span>  </h2>
      </div>
      <form onSubmit={onSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
  <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 font-jak">
      <div className='sm:col-span-2'> 
      {allForms.map((items) => (
        <div className="mt-2.5" key = {items.id}>

          <label  
              htmlFor = {items.name}  
              className="block text-sm/6 font-semibold text-white/85">
              {items.name}
          </label>
          { !items.current ?  
          (
          <input 

              value={formData[items.name] || ''}
              autoComplete="off"
              name = {items.name}
              onChange={(e) => setFormData({ ...formData, [items.name]: e.target.value })}              
              required 
              type = {items.type}  
              className="mt-2.5 block w-full bg-transparent border-b-2 border-gray-300 px-3.5 py-2 text-base text-white focus:outline-none focus:border-blue-500">
          </input> ) 
          : ( <textarea 

            value={formData[items.name] || ''}
            autoComplete="off"
            name = {items.name}
            onChange={(e) => setFormData({ ...formData, [items.name]: e.target.value })}              
            required 
            type = {items.type}  
            className="mt-2.5 block w-full bg-transparent border-b-2 border-gray-300 px-3.5 py-2 text-base text-white focus:outline-none focus:border-blue-500">
            </textarea>
          )}
          
        </div>
        
      ))}

      
    </div>
    


  </div>

  <div className="mt-10">
    <button
      type="submit"
      className="block w-full rounded-md bg-custom-blue px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none"
    >
      Let's talk
    </button>
  </div>
</form>
    

    </div>


    
  )};
   {result && result !== "Form Submitted Successfully" && (
                <div className="pb-24 sm:pb-32 flex sm:flex-row flex-col sm:justify-around flex-wrap items-center ">
                    <div href="#" className="bg-stone-800 rounded-xl max-w-sm flex flex-col sm:flex-row items-center flex-wrap mt-16 ">
                        <div className="my-10 mx-12 ">
                               <div className="text-center text-stone-700 text-2xl font-semibold flex justify-center items-center flex-col">
                        <h5 className="font-Poppins text-3xl sm:text-4xl font-semibold tracking-tight text-red-600  mb-4">{result}</h5>
                            </div>
                        </div>
                    </div>
                 </div>
        
      )}

      
    </div>
  );

}
