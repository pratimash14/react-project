import {Link} from 'react-router-dom'
const Latest=(props)=>{
    return(
        <>
        <section className="top-stories-style-1 section-padding motion-effects-wrap">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="rt-section-heading">
                            <span className="rt-section-text">Latest News </span>
                            <span className="rt-section-dot"></span>
                            <span className="rt-section-line"></span>
                        </h2>
                    </div>
                </div>
                <div className="row gutter-24">
                    {  props &&props.lat && props.lat.length > 0 && props.lat.map((latt, l) =>{
                    return(
                        <div className="col-xl-3 col-md-6 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="800ms" key={l}>
                        <div className="rt-post-grid grid-meta">
                            <div className="post-img">
                                <Link to={latt.slug}>
                                <img src={latt.image} alt={latt.image_caption}/>
                                </Link>
                            </div>
                            <div className="post-content">
                                
                                <h3 className="post-title">
                                <Link to={latt.slug}>
                                    {latt.title}
                                </Link>
                                </h3>
                                <p>{latt.content}</p>
                            </div>
                        </div>
                        </div>
                    )
                    })

                    }
                </div>
            
            </div>
        </section>        
        </>
    )
}
export default Latest;