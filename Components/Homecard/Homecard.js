import './Homecard.css'


export function Homecard({img , head , des}){
    return(
        <>
            <div className='hc'>
                <img src={img} className='carimg'/>
                <h2 className='heading'>{head}</h2>
                <p className='des'>{des}</p>
            </div>
        </>
    )
}