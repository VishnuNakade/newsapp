import React from 'react'

export default function NewsItem(props) {
  return (
    <div className='my-3'>
          <div className="card" style={{width:"18rem"}}>
          <img src={!props.imageUrl?"https://www.livemint.com/lm-img/img/2023/09/19/600x338/stock_market_holiday_on_Ganesh_Chaturthi_2023_1695085464149_1695085464303.jpg":props.imageUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <a href={props.newsUrl} target='blank' className="btn btn-dark btn-sm">Read More</a>
          </div>
        </div>
    </div>
  )
}
