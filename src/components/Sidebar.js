import React,{useState, useEffect, useCallback} from 'react';
import {NavLink} from 'react-router-dom';

const Sidebar=(props)=>{
    return(
        <>
        <div className="col-xl-3 col-lg-8 mx-auto sticky-coloum-item">
            <div className="rt-sidebar sticky-wrap">
                    <div className="ad">
                    <a href="https://in.jooble.org/" target="_blank"><img className=" lazyloaded" src="/assets/Images/Jooble_logo.png" /></a>
                    </div>
                    <h2 className="rt-section-heading style-2 mb--30"><span className="rt-section-text">Latest News</span><span className="rt-section-dot"></span><span className="rt-section-line"></span></h2>
                <ul className="list-latest-news">
                {props && props.data && props.data.length > 0 && props.data.slice(0, 8).map((lt, k)=>{
                    return(
                        <li key = {k}>
                        <figure>
                            <figcaption className="tabtextarea-latest-news">
                                <NavLink to={lt.slug}>
                                    <h3 className="title">{lt.title}</h3>
                                </NavLink>
                            </figcaption>
                            <div className="img-area-latest-news">
                                <NavLink to={lt.slug}><img src={lt.image} alt={lt.image_caption} /></NavLink>
                            </div>
                        </figure>
                    </li>
                    )
                })}

            </ul>

            </div>
        </div>        
        </>
    )
}
export default Sidebar