export default function WhyItem(props){

    return (
        <div className='why-item'>
            <img className='why-item-icon' src={props.image}></img>
            <h2 className='why-item-title'>{props.title}</h2>
            <p className='why-item-text'>
              {props.text}
            </p>
        </div>
    )
}