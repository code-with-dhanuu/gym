import './Plan.css'
import correct from './correct.png'
export function Plan({pimg , headd , Prizze , hour , coache , access , ben}){
    return(
        <>
        <div className="plmain">
          <div className="plcard">
               <img src={pimg} className='pimg'/>
               <h6 className='headdd'>{headd}</h6>
               <h1 className='Prizze'>{Prizze}</h1>
               <p className='hour'><img src={correct} className='co'/>{hour}</p>
               <p className='hour'><img src={correct} className='co'/>{coache}</p>
               <p className='hour'><img src={correct} className='co'/>{access}</p>

               <p className='ben'>See more benefits</p>
               <button className='join'>Join now</button>
         </div>
        </div>
        </>
    )
}


export function Plans({pimg , headd , Prizze , hour , coache , access , ben}){
    return(
        <>
        <div className="plmain">
          <div className="placard">
               <div className='pop'>
                Most Popular
               </div>
               <img src={pimg} className='plimg'/>
               <h6 className='pheaddd'>{headd}</h6>
               <h1 className='pPrizze'>{Prizze}</h1>
               <p className='hour'><img src={correct} className='co'/>{hour}</p>
               <p className='hour'><img src={correct} className='co'/>{coache}</p>
               <p className='hour'><img src={correct} className='co'/>{access}</p>

               <p className='ben'>See more benefits</p>
               <button className='join'>Join now</button>
         </div>
        </div>
        </>
    )
}