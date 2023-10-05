import { NavLink } from 'react-router-dom';

const Slide=(props)=>{
    return(
        <>
            <div className="btn5"><NavLink to="#">{props && props.title && props.title ? props.title : ''}</NavLink></div>
            <div className="cbx-list cbx-list2">
                <ul className="list-unstyled">
                { props && props.ld && props.ld.length > 0 &&
                    <li>
                        <figure>
                            <span className="img-area">
                                <NavLink title="" to={props.ld[0].slug}>
                                    <img alt={props.ld[0].image_caption} className="cbx-sidebarthumbnail"src={props.ld[0].image} />
                                </NavLink>
                            </span>
                            <figcaption>
                                <h3 className="title">
                                    <NavLink to={props.ld[0].slug}>{props.ld[0].title}</NavLink>
                                </h3>
                            </figcaption>
                        </figure>
                    </li>
                    }
                        {props && props.ld && props.ld.length > 0 && props.ld.slice(1,props.limit).map((lb, l)=>{
                        return(
                            <>
                    <li>
                        <figure>
                            <div className="tabtextarea-unstyright">
                                <NavLink to={lb.slug}><h3 className="title">{lb.title}</h3></NavLink>
                            </div>
                        </figure>
                    </li>
                    </>
                        )
                    }) }

                </ul>
            </div>
        </>
    )
}

export default Slide