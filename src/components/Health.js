import {Link} from 'react-router-dom'
import React from 'react'

const Health=(props)=>{
    console.log('vikas', props);
    return(
        <>
            <div className="col-xl-3 col-lg-8 mx-auto">
                <div className="rt-sidebar">
                    <div className="sidebar-wrap ">
                        <h2 className="rt-section-heading style-2 mb--30">
                        <span className="rt-section-text">Health & Travel </span>
                        <span className="rt-section-dot"></span>
                        <span className="rt-section-line"></span>
                        </h2>
                        <div className="sidebar-post-style-5 grid-meta">
                        <div className="item-img">
                            
                            <Link to={props && props.hData && props.hData.length > 0 && props.hData[0].slug ? props.hData[0].slug : ''}>
                                <img src={props && props.hData && props.hData.length > 0 && props.hData[0].image ? props.hData[0].image : ''} alt={props && props.hData && props.hData.length > 0 && props.hData[0].image_caption ? props.hData.image_caption : ''} width="696" height="491" />
                            </Link>
                        </div>
                        <div className="item-content">
                            <h3 className="post-title">
                                <Link to={props && props.hData && props.hData.length > 0 && props.hData[0].slug ? props.hData[0].slug : ''}>
                                    {props && props.hData && props.hData.length > 0 && props.hData[0].title ? props.hData[0].title : ''}
                                </Link>
                            </h3>
                            <p>{props && props.hData && props.hData.length > 0 && props.hData[0].content ? props.hData[0].content : ''}</p>
                            {props && props.hData && props.hData.length > 0 && props.hData.slice(1, 3).map((heal, h)=>{
                                return(
                                    <div className="item-title-list" key={h}>
                                        <div className="item-img">
                                            <Link to={heal.slug}>
                                                <img src={heal.image} alt={heal.image_caption} width="696" height="491" />
                                            </Link>
                                        </div>        
                                    <div className="single-item">
                                        <h4 className="post-title">
                                        <Link to={heal.slug}>
                                            {heal.title}
                                        </Link>
                                        </h4>
                                        <p>{heal.content}</p>
                                    </div>

                                </div>
                                )
                            })}
                        </div>
                        </div>
                    </div>
                </div>
            </div>        
        </>
    )
}

export default Health;