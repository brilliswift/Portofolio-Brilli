import React from 'react'

const Contact = () => {
  return (
      <>

      <section id='contact'>
        <h2>Contact</h2>
        <div className='main-container'>
          <div className='contact-container'>
                      <form className='contact-form'>
                          <h3>Send me a message</h3>
             <div>           
                              <input type="text" placeholder='Name' />
                          </div>  
                          <div> 
                  <input type="text" placeholder='Email' />
                          </div> 
                          <div>
                              <textarea placeholder='Message'></textarea>
                          </div>
                          <div>
                              <button className='btn-submit' type='submit'>Submit</button>
                              </div>
           </form>
                  </div>
              </div>
          </section>


    </>
  )
}

export default Contact
