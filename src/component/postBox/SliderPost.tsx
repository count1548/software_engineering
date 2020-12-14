import React, {useState, useEffect} from 'react'

export default function InnerTextImg(props:any) {
    const {img, children, date} = props
    return (
         <div className="item px-2">
			<div className="fh5co_hover_news_img">
				<div className="fh5co_news_img"><img src={img} alt="" /></div>
				<div>
					<a href="single.html" className="d-block fh5co_small_post_heading">
						<span className="">{children}</span>
					</a>
					<div className="c_g"><i className="fa fa-clock-o"></i>{date}</div>
				</div>
			</div>
		</div>
    )
}