import {NavLink} from 'react-router-dom';

const PhotoGal =(props)=>{
    return(
        <>
        <div className="ianstv-power-play-video">
            <div className="btn2" ><a href="#">WHAT'S HOT</a></div>
            <div className="list-unstyled">
            <div id="my1Carousel" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className='item active'>
                    <div className="gallery">	
                        <NavLink to={props && props.imageDatat && props.imageDatat.length > 0 && props.imageDatat[0].slug ? props.imageDatat[0].slug : '/'}>
                            <img className="lozad" src={props && props.imageDatat && props.imageDatat.length > 0 && props.imageDatat[0].image ? props.imageDatat[0].image : ''}/>
                        </NavLink>
                        <NavLink to={props && props.imageDatat && props.imageDatat.length > 0 && props.imageDatat[1].slug ? props.imageDatat[1].slug : '/'}>
                        <img className="lozad" src={props && props.imageDatat && props.imageDatat.length > 0 && props.imageDatat[1].image ? props.imageDatat[1].image : ''}/>
                        </NavLink>
                    </div>
                    <div className="gallery">
                        <NavLink to={props && props.imageDatat && props.imageDatat.length > 0 && props.imageDatat[2].slug ? props.imageDatat[2].slug : '/'}>                        	
                    <img className="lozad" src={props && props.imageDatat && props.imageDatat.length > 0 && props.imageDatat[2].image ? props.imageDatat[2].image : ''}/>
                    </NavLink>
                        <NavLink to={props && props.imageDatat && props.imageDatat.length > 0 && props.imageDatat[3].slug ? props.imageDatat[3].slug : '/'}>                    
                    <img className="lozad" src={props && props.imageDatat && props.imageDatat.length > 0 && props.imageDatat[3].image ? props.imageDatat[3].image : ''}/>
                    </NavLink>
                    </div>                                                
                </div>
                <div className='item'>
                    <div className="gallery">
                        <NavLink to={props && props.imageDatat && props.imageDatat.length > 0 && props.imageDatat[4].slug ? props.imageDatat[4].slug : '/'}>                        	
                    <img className="lozad" src={props && props.imageDatat && props.imageDatat.length > 0 && props.imageDatat[4].image ? props.imageDatat[4].image : ''}/>
                    </NavLink>
                    <NavLink to={props && props.imageDatat && props.imageDatat.length > 0 && props.imageDatat[5].slug ? props.imageDatat[5].slug : '/'}>                    
                    <img className="lozad" src={props && props.imageDatat && props.imageDatat.length > 0 && props.imageDatat[5].image ? props.imageDatat[5].image : ''}/>
                    </NavLink>
                    </div>
                    <div className="gallery">
                        <NavLink to={props && props.imageDatat && props.imageDatat.length > 0 && props.imageDatat[6].slug ? props.imageDatat[6].slug : '/'}>                        	
                    <img className="lozad" src={props && props.imageDatat && props.imageDatat.length > 0 && props.imageDatat[6].image ? props.imageDatat[6].image : ''}/>
                    </NavLink>

                    {/* <NavLink to={props && props.imageDatat && props.imageDatat.length > 0 && props.imageDatat[6].slug ? props.imageDatat[6].slug : '/'}>                        	
                    <img className="lozad" src={props && props.imageDatat && props.imageDatat.length > 0 && props.imageDatat[6].image ? props.imageDatat[6].image : ''}/>
                    </NavLink>                     */}
                    <NavLink to={props && props.imageDatat && props.imageDatat.length > 0 && props.imageDatat[7].slug ? props.imageDatat[7].slug : '/'}>                    
                    <img className="lozad" src={props && props.imageDatat && props.imageDatat.length > 0 && props.imageDatat[7].image ? props.imageDatat[7].image : ''}/>
                    </NavLink>
                    </div>                                                
                </div>
                
               
            </div>
            <a className="swiper-button-prev" href="#my1Carousel" data-slide="prev"><i className="fa fa-chevron-left" aria-hidden="true"></i> </a>
            <a className="swiper-button-next" href="#my1Carousel" data-slide="next"><i className="fa fa-chevron-right" aria-hidden="true"></i> </a>
        </div>                                           
            </div>
        </div>        
        </>
    )
}
export default PhotoGal