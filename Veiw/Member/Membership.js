import { Navbar } from "../../Components/Navbar/Navbar"
import './Membership.css'

export function Member(){
    return(
        <div className="div">
        <Navbar/>
        <form className="form">

            <h2 className="headd">Membership</h2>

            <label className="nlabel">Name :</label> 
            <input type="text" placeholder="Enter your name"  required  className="inp"/>  <br/>
            <label className="nlabel">Email :</label>
            <input type="email" placeholder="Enter Email" required  className="inp"/>   <br/> 
            <label className="nlabel">Mob No :</label>
            <input type="number" placeholder="+91 000 000 0000" required  className="inp"/> <br/> 


                     
              <label  className="nlabel">Gender:</label>
            <input type="radio" name="gender" value="male" className="gen" />Male
            <input type="radio" name="gender" value="female" className="gen" />Female
            <input type="radio" name="gender" value="male"  className="gen" />Others

            <h5 className="Add">Address</h5>
      
      <hr/> 
      <label  className="nlabel">Country:</label>
      <select className="inp" >
      <option>Choose your Country</option>
      <option>India</option>
      <option>Pakistan</option>
      <option>Australia</option>
      <option> Canda</option>
      <option>China</option>
      <option>Russia</option>
       <option>Brazil</option>
      </select> <br/>
                                                                        
      <label className="nlabel">State:</label> 
      <input type="text" placeholder="Enter your state"  required  className="inp"/>  <br/>
      <label className="nlabel">City:</label> 
      <input type="text" placeholder="Enter your city"  required  className="inp"/>  <br/>
      <label className="nlabel">Location:</label> 
      <input type="text" placeholder="Enter your location"  required  className="inp"/>  <br/>   
                                         
                              
             <button className="btns">Submit</button>
        </form>
        </div>
    )
}