

const NewsItem=(props)=>  {

    let {title, description, imageUrl, newsUrl,author,date,source} = props;
    return (
      <>
      
      <div className="my-3">
                <div className="card">
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: '0'
                    }
                    }> 
                        <span className="badge rounded-pill bg-danger"> {source} </span>
  <img src={!imageUrl?"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fbreaking-news-globe&psig=AOvVaw3yc7SIEWEWx6ypELCZKG19&ust=1736877101458000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDWkfeh84oDFQAAAAAdAAAAABAE":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description} </p>
    <div className="card-text">
        <small className="text-muted">Author: {!author?"Unknown":author} <br/>Date: {new Date(date).toGMTString()}</small>
      </div>
    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-dark"  >Read More</a>
  </div>
</div>
</div></div>
</>
    )
  }

export default NewsItem