import { Link } from "react-router-dom";

const Science = (props) =>{
    return(
        <>
            <div className="col-xl-9 sticky-coloum-item">
                <div className="featured-area-style-1 sticky-wrap">
                    <div className="wrap post-wrap mb--60">
                        <h2 className="rt-section-heading">
                        <span className="rt-section-text">Science & Technology </span>
                        <span className="rt-section-dot"></span>
                        <span className="rt-section-line"></span>
                        </h2>
                        {props && props.data && props.data.length > 0 && props.data.slice(0,4).map((scc, s)=>{
                            return(
                                <div className="post-item wow fadeInUp" data-wow-delay="200ms" data-wow-duration="800ms" key={s}>
                                <div className="rt-post post-md style-2 grid-meta">
                                    <div className="post-img">
                                        <Link to={scc.slug}>
                                            <img src={scc.image} alt={scc.image_caption} width="696" height="491" />
                                        </Link>
                                    </div>
                                    <div className="post-content">
                                        
                                        <h3 className="post-title bold-underline">
                                            <Link to={scc.slug}>
                                            {scc.title}
                                            </Link>
                                        </h3>
                                        <p>
                                        {scc.content}
                                        </p>
                                    </div>
                                </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            
            </div>        
        </>
    )
}

export default Science;