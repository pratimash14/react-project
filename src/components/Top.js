import {Link} from 'react-router-dom'

const Top=(props)=>{
    //console.log(props, 'nnnnnnnnn');
    return(
        <>
        <section className="rt-main-post-section main-post-section-style-1 section-padding bg--gray">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="rt-section-heading">
                            <span className="rt-section-text">Top Stories </span>
                            <span className="rt-section-dot"></span>
                            <span className="rt-section-line"></span>
                        </h2>
                    </div>
                </div>
                <div className="row gutter-24">
                    <div className="col-xl-7 col-lg-6 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="800ms">
                        <div className="rt-post-overlay rt-post-overlay-xl layout-1">
                            <div className="post-img">
                                <Link to={props.top[0] && props.top[0].slug ? props.top[0].slug:''} className="img-link">
                                <img src={props.top[0] && props.top[0].image ? props.top[0].image:''} alt={props.top[0] && props.top[0].image_caption ? props.top[0].image_caption:''} width="900" height="600" />
                                </Link>
                            </div>
                            <div className="post-content">
                                <h3 className="post-title bold-underline">
                                <Link to={props.top[0] && props.top[0].slug ? props.top[0].slug:''}>
                                    {props.top[0] && props.top[0].title ? props.top[0].title:''}
                                </Link>
                                </h3>
                                <p>{props.top[0] && props.top[0].content ? props.top[0].content:''}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-6">
                        <div className="row gutter-24">
                            { props.top && props.top.length > 0 && props.top.slice(1, 5).map((tp, k)=>{
                            return(

                                    <div className="col-12 wow fadeInUp" data-wow-delay="400ms" data-wow-duration="800ms" key={k}>
                                        <div className="rt-post post-md style-10">
                                        <div className="post-img">
                                            <Link to={tp.slug}>
                                                <img src={tp.image ? tp.image : ''} alt="post" width="696" height="491" />
                                            </Link>
                                        </div>
                                        <div className="post-content">
                                            
                                            <h3 className="post-title">
                                                <Link to={tp.slug}>
                                                {tp && tp.title ? tp.title:''}
                                                
                                                </Link>
                                            </h3>
                                            {/* <p>{tp && tp.content ? tp.content:''}</p> */}
                                            
                                        </div>
                                        </div>
                                    </div>
                                    
                            )})}
                        </div>
                    </div> 
                </div>
            </div>
        </section>        
        </>
    )
}
export default Top;