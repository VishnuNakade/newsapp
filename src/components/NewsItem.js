import React, { Component } from 'react'

export class NewsItem extends Component {

 

  render() {
    let {title,description,imageUrl,newsUrl}=this.props;
    return (
      <div className='my-3'>
            <div className="card" style={{width:"18rem"}}>
            <img src={!imageUrl?"https://www.livemint.com/lm-img/img/2023/09/19/600x338/stock_market_holiday_on_Ganesh_Chaturthi_2023_1695085464149_1695085464303.jpg":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <a href={newsUrl} target='blank' className="btn btn-dark btn-sm">Read More</a>
            </div>
          </div>
      </div>
    )
  }
}

export default NewsItem
