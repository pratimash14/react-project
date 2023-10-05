import { NavLink } from 'react-router-dom';
import React,{useState, useEffect} from 'react';

const Sld=(props)=>{
    const [videoUrl, setVideoUrl] = useState('');
    const videoStartPlay = (url)=>{
        setVideoUrl(url);
    }
    <script dangerouslySetInnerHTML={{
        __html: `
    $(document).ready(function () {
        
        $("#${props.crow}").carousel({ interval:false });           
       
        $(".left").click(function () {
            $("#${props.crow}").carousel("prev");
        });
        $(".right").click(function () {
            $("#${props.crow}").carousel("next");
        });
        `}} />
    return(
        <>
            <div className="modal fade" id="myModal" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body">
                        <video controlslist=" nodownload" autoplay="" data-video-file="" src={videoUrl} width="" height="">
                            <source src={videoUrl} type="video/mp4"/></video>

                            {/* <video controls="true" controlslist=" nodownload" autoplay="" muted="" loop="" data-video-file="">
                            <source src={'https://iansportalimages.s3.amazonaws.com/videos_watermark/260723_NEWS_JUHI%20PARMAR%20PENS%20SCATHING%20POST%20AFTER%20WALKING%20OUT%20OF%20BARBIE%20FILM%20WITH%20DAUGHTER.mp4'} type="video/mp4"/>
                            </video> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="cbx-list cbx-list2">
            <div className="btn5"><NavLink to="#">{props && props.title && props.title ? props.title : ''}</NavLink></div>
                <ul className="list-unstyled">

                    <li>

                        <div id={props.crow} className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                            {props && props.ld && props.ld.length > 0 && props.ld.slice(0,4).map((lb, l)=>{
                        return(
                            <>                                
                                <div className={l==0 ? 'item active' : 'item'} key={l}>
                                {props.iconStaus &&<img src={lb.image} />}
                                {!props.iconStaus &&<a href={'https://iansphoto.in/detail/'+lb.slug}><img src={lb.image} /></a>}
                                    {props.iconStaus &&
                                    
                                    <div class="tv-post-icon">
                                        <a href="javascript:void(0);"  onClick={() => videoStartPlay(lb.video_preview)} data-toggle="modal" data-target="#myModal" ><i class="fa fa-2 fa-play" aria-hidden="true"></i></a>
                                    </div>}
                                    <figcaption><h3 className="title"><NavLink to={lb.slug}>{lb.title}</NavLink></h3></figcaption>
                                </div>  
                                </>
                                )
                            }) }           
                            </div>
                                <a className="tvBtn-prev" href={'#'+props.crow} data-slide="prev">
                                    <i className="fa fa-chevron-left" aria-hidden="true"></i> 
                                </a>
                                <a className="tvBtn-next" href={'#'+props.crow} data-slide="next">
                                    <i className="fa fa-chevron-right" aria-hidden="true"></i> 
                                </a>
                        </div>                       
                    </li>
                  
                        {/* {props && props.ld && props.ld.length > 70 && props.ld.slice(1,4).map((lb, l)=>{
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
                    }) } */}

                </ul>
            </div>
        </>
    )
}

export default Sld