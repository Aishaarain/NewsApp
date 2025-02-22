import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
// import InfiniteScroll from 'react-infinite-scroll-component';


const News=(props)=> {

const [articles,setArticles]=useState([]);
const [loading,setLoading]=useState(true);
const [page,setPage]=useState(1);
const [totalResults,settotalResults]=useState(0);


const capitalizefirstletter=(string)=>{
  return string.charAt(0).toUpperCase()+string.slice(1);
  }
    
  




  const Updatenews=async()=>{
    
  //  props.setProgress(10);
    const url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=${props.apiKey}&pageSize=${props.pageSize}&category=${props.category}&page=${page}`
   setLoading(true);
    let data= await fetch(url);
  //  props.setProgress(30);
    let parseddata= await data.json()
  //  props.setProgress(70);

   setArticles(parseddata.articles)
    settotalResults(parseddata.totalResults)
    setLoading(false)
   
    props.setProgress(100);
  }
  
useEffect(() => {
  if(props.category==="general"){
    document.title=`Home-DAWN-NEWS`
    }
    else{
    document.title=  `${capitalizefirstletter(props.category)}-DAWN-NEWS`
    }
  Updatenews();
}, )

  

const fetchMoreData = async () => {   
  const url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
  setPage(page+1) 
  let data = await fetch(url);
  let parsedData = await data.json()
  setArticles(articles.concat(parsedData.articles))
  settotalResults(parsedData.totalResults)
};

  return (
      <>
          <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}>DAWN-NEWS - Top {capitalizefirstletter(props.category)} Headlines</h1>
          {!loading && <Spinner />}
          <InfiniteScroll
              dataLength={articles?.length}
              next={fetchMoreData}
              hasMore={articles?.length!== totalResults}
              // loader={<Spinner/>}
          > 
              <div className="container">
                
                   
              <div className="row">
                  {articles?.map((element) => {
                      return <div className="col-md-4" key={element?.url}>
                          <NewsItem title={element?.title ? element?.title : ""} description={element?.description ? element?.description : ""} imageUrl={element?.urlToImage} newsUrl={element?.url} author={element?.author} date={element?.publishedAt} source={element?.source.name} />
                      </div>
                  })}
              </div>
              </div> 
          </InfiniteScroll>
      </>
  )

}




News.defaultProps=
  {
    pageSize:20,
category:'general'

  }
  News.propTypes={
pageSize:PropTypes.number,
category:PropTypes.string}

export default News;


