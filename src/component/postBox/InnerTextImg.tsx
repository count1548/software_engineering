import React, {useState, useEffect} from 'react'

export default function InnerTextImg(props:any) {
    const {type, img, children, date} = props
	const sub = type==='sub' ? '_2' : ''
    return (
         <div className="col-md-6 col-12 paddding animate-box" data-animate-effect="fadeIn">
			<div className={"fh5co_suceefh5co_height"+sub}><img src={img} alt="img" />
				<div className="fh5co_suceefh5co_height_position_absolute"></div>
				<div className={"fh5co_suceefh5co_height_position_absolute_font"+sub}>
					<div className=""><a href="#" className="color_fff">
						<i className="fa fa-clock-o"></i>&nbsp;&nbsp;{date}
					</a></div>
					<div className=""><a href="single.html" className={"fh5co_good_font"+sub}>
						{children}
					</a></div>
				</div>
			</div>
		</div>
    )
}