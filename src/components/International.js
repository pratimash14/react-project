import { Link } from "react-router-dom";

const International = (props)=>{
    return(
        <>
            <div className="col-xl-9">
                <div className="featured-area-style-5">
                    <div className="wrap">
                        <h2 className="rt-section-heading mb--30">
                        <span className="rt-section-text">International </span>
                        <span className="rt-section-dot"></span>
                        <span className="rt-section-line"></span>
                        </h2>
                        <div className="rt-post post-md style-7 grid-meta bold-underline mb--20 international-sec">
                        <div className="post-img">
                            <Link to={props && props.data && props.data.length > 0 ? props.data[0].slug : ''}>
                                <img src={props && props.data && props.data.length > 0 ? props.data[0].image : ''}alt={props && props.data && props.data.length > 0 ? props.data[0].image_caption : ''}width="2000" height="1000" />
                            </Link>
                        </div>
                        <div className="post-content">
                            
                            <h3 className="post-title">
                                <Link to={props && props.data && props.data.length > 0 ? props.data[0].slug : ''}>
                                    {props && props.data && props.data.length > 0 ? props.data[0].title : ''}
                                </Link>
                            </h3>
                            <p>
                            {props && props.data && props.data.length > 0 ? props.data[0].content : ''}
                            </p>
                            
                            
                        </div>
                        </div>
                        <div className="row gutter-24 news-list-style-2 international-sec-col">
                        {props.data && props.data.length > 0 && props.data.slice(1, 7).map((int, i) =>{
                            return(
                                <div className="col-xl-4 col-md-6" key={i}>
                                <div className="item">
                                <div className="item-img">
                                            <Link to={int.slug}>
                                                <img src={int.image} alt={int.image_caption} width="696" height="491" />
                                            </Link>
                                        </div>
                                    <div className="item-content">
                                        <h4 className="post-title">
                                        <Link to={int.slug}>
                                            {int.title}
                                        </Link>
                                        </h4>
                                        <p>{int.content}</p>
                                        
                                    </div>
                                </div>
                            </div>
                            )
                        })}

                        </div>
                    </div>
                </div>
            </div>        
        </>
    )
}
export default International;