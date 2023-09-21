import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {


  constructor(){
    super();
    console.log("hellow i am constuctor from news component")
    this.state= {
      articles:[],
      loading:false,
      page:1,
      
    }
  }

  async componentDidMount(){
   let url="https://newsapi.org/v2/top-headlines?country=IN&apiKey=c5821203840041189a93fc0be3ea27a6&page=1";
   let data = await fetch(url);
   let parsedData=await data.json()
   console.log(parsedData);
   this.setState({articles:parsedData.articles})

  }
 handlePrevClick= async ()=>{
  let url=`https://newsapi.org/v2/top-headlines?country=IN&apiKey=c5821203840041189a93fc0be3ea27a6&page=-${this.state.page-1}`;
  let data = await fetch(url);
  let parsedData=await data.json()
  console.log(parsedData);
  this.setState({articles:parsedData.articles})

  this.setState({
    page:this.state.page-1,
    articles:parsedData.articles
    
  })


  }
   handleNextClick=async()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=IN&apiKey=c5821203840041189a93fc0be3ea27a6&page=-${this.state.page+1}`;
    let data = await fetch(url);
    let parsedData=await data.json()
    console.log(parsedData);
    this.setState({articles:parsedData.articles})

    this.setState({
      page:this.state.page+1,
      articles:parsedData.articles
      
    })
  }

  render() {
    return (
      <div className='container mx--5 my-3'>
        <h1 className="text-center">NewsMonkey - Top Headlines</h1>
        
        
        <div className="row">
        {this.state.articles.map((element)=>{
        return <div className="col md-4" key={element.url}>
        <NewsItem  title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url}/>
        </div>})}
        </div>

        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
        <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>

        </div>
        
      </div>
    )
  }
}

export default News
