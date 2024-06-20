import { Navbar } from '../../Components/Navbar/Navbar';
import './Contact.css';
// import location from '../Contact/location.png'
// import tel from '../Contact/te.jpg'
// import email from '../Contact/mail.jpg'
// import contact from '../Contact/contact.png'



export  function Contact() {
  return (
  <>
  <Navbar/>
  {/* <img src={contact}/> */}
    <div>
      <h1 className='first'>CONTACT US</h1>
     
    </div>
    <div className='oneclass'>
    {/* <div  className='Container'> */}
    {/* <div className='row'>
      <div className='contactitem'>
        <h3>Registered Office </h3>
        <div className='merge'>
            <div>  
              {/* <img src={location} className='logosize'/> */}
            {/* </div>
            <div>
              <p className='head5'> URJA GLOBAL LIMITED<br/>
              <span>486/63,1st Floor,National Market,Peeragarhi,New Delhi-110087 </span> </p>
            </div>
        </div>

        <h3>Contact Us</h3>

        <div className='merge'>
            <div> */}
               {/* <img src={tel} className='logosize'/> */}
            {/* </div>
            <div>
               <p className='head5'>Official Landline Number <br/>
                  <span>+91-11-25279143 | +91-11-45588274</span>
               </p>
            </div>
        </div>

        <div className='merge'>
            <div> */}
               {/* <img src={tel} className='logosize'/> */}
            {/* </div>
            <div>
               <p className='head5'>Toll Free No.<br/>
                  <span>8000-500-789 </span>
               </p>
            </div>
        </div>
      
        <div className='merge'>
            <div> */}
               {/* <img src={email} className='logosize'/> */}
            {/* </div>
            <div>
               <p className='head5'>EMAIL ADDRESS FOR ONLINE SUPPORT <br/>
                  <span>customercare@urjaglobal.in</span>
               </p>
            </div>
        </div>
      </div>
    </div>
    </div>        */} 
     
  
  

    <div className='row'>
      <div className='contactitem'>
          <h3>Get In Touch With Us!</h3>
          <div className='C_itemD'>
               <label>Name</label>
               <br></br>
                <input type='text' className='label'></input>
                <br></br>
                <label>Email</label><br></br>
                <input type='mail' className='label'></input><br></br>
                <label>Mobile Number</label><br></br>
                <input type='number' className='label'></input><br></br>  
                <label>Query</label><br></br>
                <input type='text' className='int'></input><br></br> 
                <button type='submit' className='btn'>Submit</button>  
          </div>  
       </div>    
    </div >
    </div>

  </>
   
  )
}

