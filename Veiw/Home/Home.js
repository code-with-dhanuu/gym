import { Navbar } from '../../Components/Navbar/Navbar'
import './Home.css'
import trainer from './trainer.jpeg'
import Main from './gym.jpg'
import { Homecard } from '../../Components/Homecard/Homecard'
import barbell from './dumble.png'
import yoga from './yoga.png'
import body from './body.png'
import loss from './loss.png'
import crown from './crown.png'
import heart from './heart.png'
import { Plan } from '../../Components/Plan/Plan'
import { Plans } from '../../Components/Plan/Plan'
export function Home(){
    return(
<>
<Navbar/>
<div className="homeimg">

   <div className='con'>
      <h2>Gym fitness</h2>
         <h1 className='head'>BUILD  YOUR  BODY <br/>
          <span className='orange'>TRANSFORM  </span>
            YOUR  LIFE    </h1>

<h2 className='head1'>Get Healthy Body With Perfect Exercise</h2>

<p className='head1 p'>Empower your journey to peak fitness. Build a stronger body and transform your life  with our expert support and guidence</p>

<button  className='btnj'>JOIN US</button><button className='btnl'>Learn More</button>
</div>


<div className='mainimg'>
    <img  src={Main} className='mimg'/>
</div>

</div >

<div className='homeg'>
   <div >
        <img src={trainer} className='imgt' />
   </div>
<div className='cont'>
<h1>Get Ready To Reach Your Fitness Goals</h1>
<p className='p'>Ditch the excuses, grab your motivation backpack! "Get Ready To Reach Your Fitness Goals" isn't just a title, it's a battle cry. This guide is your personal trainer, cheerleader, and goal-crushing buddy rolled into one. We'll break down your aspirations into bite-sized.</p>
<p className='p'>Get ready to conquer your doubts, rewrite your limits, and finally claim the healthier, happier you!</p>
<button className='btnf'>Free Trial Now</button>
</div>

</div>
<div className='pp'>
<div className='plan'>
<h1 className='head0'>The  Best Programs We Offers For You</h1>
<p className='para'>
Stop searching, start thriving! We've handpicked programs just for you.<br/> Unlock your potential, from fitness feats to career climbs. Let's make magic happen!
</p>
</div>
<div className='cardd'>
<Homecard img={barbell} head="Strength Training" des="Unlock your potential with a dynamic strength training program for lasting fitness gain."/>
<Homecard img={yoga} head="Basic Yoga" des="ewreytukl,mnbgfvdcsxa"/>
<Homecard img={body} head="Body Building" des="ewreytukl,mnbgfvdcsxa"/>
<Homecard img={loss} head="Weight Loss" des="ewreytukl,mnbgfvdcsxa"/>
</div>
</div>
<div className='pland'>
    <h2 className='h2'>Choose The Best Plan</h2>
    <h3 className='ready'>Ready To Your Journey Now WithUs</h3>

   <div className='planss' >
    <Plan pimg={heart} headd="BASIC PLAN" Prizze="₹ 122" hour="xcghjkl" coache="ssdfghjk" access="dfghjk" />
    <Plans pimg={crown} headd="BASIC PLAN" Prizze="₹ 122" hour="xcghjkl" coache="ssdfghjk" access="dfghjk" />
    <Plan pimg={barbell} headd="BASIC PLAN" Prizze="₹ 122" hour="xcghjkl" coache="ssdfghjk" access="dfghjk" />
  
   </div>
</div>
</>

    )
}
