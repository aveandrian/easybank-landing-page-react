export default function ArticleItem(props) {
    return (
        <div className='article-item'>
            <img className='article-item-img' src={props.image}></img>
            <div className='article-item-content'>
              <p className='article-item-author'>By {props.author}</p>
              <h3 className='article-item-title'>{props.title}</h3>
              <p className='article-item-text'>{props.text}</p>
            </div>
        </div>
    )
}