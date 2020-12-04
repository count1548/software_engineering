import React, {useState, useEffect} from 'react'

export default function InnerTextImg(props:any) {
    const {type, img, children, showDate=true, date, size = 'middle'} = props
    const containerStyle = 'fh5co_suceefh5co_height' + ((size === 'middle') ? '_2' : '')
    const labelStyle = 'fh5co_suceefh5co_height_position_absolute_font' + ((size === 'middle') ? '_2' : '')
    const textStyle = "fh5co_good_font" + ((size === 'middle') ? '_2' : '')
    return (
        <div className={containerStyle}>
            <img src={img} alt="img" />
            <div className="fh5co_suceefh5co_height_position_absolute"></div>
            <div className={labelStyle}>
                {showDate ? 
                <div className=""><a href="#" className="color_fff">
                    <i className="fa fa-clock-o"></i>&nbsp;&nbsp;{date}
                </a></div> : null}
                <div className="">
                    <a href="single.html" className={textStyle}>{children}</a>
                </div>
            </div>
        </div>
    )
}