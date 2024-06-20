
import { Navbar } from '../../Components/Navbar/Navbar'
import './Signin.css'

export function Signup(){
    return(
        <>
        <Navbar/>
           <form className='formc'>
            <h2 className='headd'> Signup </h2>
               <label className='nlabel'>Username:</label><br/>
               <input  type="text" placeholder="Username" className='inpt'/><br/>
               <label className='nlabel'>Password:</label><br/>
               <input  type="Password" placeholder="Password" className='inpt'/><br/> 
               <button className='btnS'>Signup</button> 

 </form>
        </>
    )
}