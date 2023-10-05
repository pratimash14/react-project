import React,{useState, useEffect} from 'react';
import axios from 'axios';
import Header from './Header'
import Footer from './Footer'
import Top from './Top'
import Latest from './Latest'
import {NavLink} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import National from './National';
import International from './International';
import Bollywood from './Bollywood'
import Hollywood from './Hollywood'
import Health from './Health';
import Science from './Science';
import Sports from './Sports';
import {Helmet} from "react-helmet";
import TV from './TV';
import Trailer from './Trailer';
import Slide from './Slide';
import Sld from './Sld';
import New from './New';
                                        
import  Carousel from './Gal'
import PhotoGal from './PhotoGal';

const Home =()=>{
    const [isLoading, setIsLoading] = useState(false);
    const [topData, setTopData] = useState({
            id: null,
            title: '',
            byline: '',
            content: '',
            image: '',
            slug:'',
            image_caption: ''
    });
    const [specialDatt, setSpecialDatt] = useState({
        id: null,
        title: '',
        byline: '',
        content: '',
        image: '',
        slug:'',
        image_caption: ''
    });
    const [photosDSata, setPhotosDSata] = useState({
        id: null,
        title: '',
        image: '',
        slug:'',
        image_caption: ''
    });    
    const [bollyDatt, setBollyData] = useState({
        id: null,
        title: '',
        byline: '',
        content: '',
        image: '',
        slug:'',
        image_caption: ''
    });
    const [hollyDatt, setHollyData] = useState({
        id: null,
        title: '',
        byline: '',
        content: '',
        image: '',
        slug:'',
        image_caption: ''
    });
    const [tvvData, setTvData] = useState({
        id: null,
        title: '',
        byline: '',
        content: '',
        image: '',
        slug:'',
        image_caption: ''
    }); 
    const [OtttData, setOTTData] = useState({
        id: null,
        title: '',
        byline: '',
        content: '',
        image: '',
        slug:'',
        image_caption: ''
    });          
    const [latData, setLatestData] = useState({
        id: null,
        title: '',
        image: '',
        slug:'',
        video_preview: ''
    }); 
    const [regData, setRegionalData] = useState({
        id: null,
        title: '',
        byline: '',
        content: '',
        image: '',
        slug:'',
        image_caption: ''
    });
    const [imageDatat, setGAlleryyData] = useState({
        id: null,
        title: '',
        byline: '',
        content: '',
        image: '',
        slug:'',
        image_caption: ''
    });    
    const [posterrData, setPosterData] = useState({
        id: null,
        title: '',
        image: ''
    });
    const [mussSData, setMusicalData] = useState({
        id: null,
        title: '',
        byline: '',
        content: '',
        image: '',
        slug:'',
        image_caption: ''
    });  
    const [recomData, setRecomVideo] = useState({
        id: null,
        title: '',
        content: '',
        slug:''
    });  
    const [trailerData, setTrailer] = useState({
        id: null,
        title: '',
        content: '',
        slug:''
    });           

    const tvApi = `https://cms.iansnews.in/api/elastic/news/list/?language=english&tags=tv`;
    const ottApi = `https://cms.iansnews.in/api/elastic/news/list/?language=english&tags=ott`;
    const photoApi = `https://cms.iansnews.in/api/elastic/imagenews/list/?language=english&tags=entertainment`

    const getPhotosData =()=>{
        axios.get(photoApi).then((res) => {
        const photoStories =
            res.data.results &&
            res.data.results.length > 0 &&
            res.data.results.slice(0, 5).map((item) => {
            return {
                id: item.id,
                image: item.image.replace("/thumbnails_watermark", "/thumbnails"),
                title: item.title,
                slug:'/'+item.slug,
                image_caption: item.image_caption,
            };
            });
            setPhotosDSata(photoStories);
        });
    }  
    const topSData =()=>{
        axios
        .get(
        `https://cms.iansnews.in/api/elastic/news/list/?language=english&topNews_category=entertainment`
        )
        .then((res) => {
        const topStories =
            res.data.results &&
            res.data.results.length > 0 &&
            res.data.results.map((item) => {
            return {
                byline: item.byline,
                content: item.short_desc,
                id: item.id,
                image: item.thumbnail,
                title: item.title,
                slug:'/'+item.slug,
                image_caption: item.image_caption,
            };
            });
        setTopData(topStories);
        });
    }

    const LatestData =()=>{
        axios
        .get(
        `https://cms.iansnews.in/api/elastic/video/list/?tags=entertainment`
        )
        .then((res) => {
        const latestStories =
            res.data &&
            res.data.data &&
            res.data.data.length > 0 &&
            res.data.data.slice(0, 5).map((item) => {
            return {
                id: item.id,
                image: item.thumbnail,
                title: item.title,
                slug:'/'+item.slug,
                video_preview: item.video_preview,
            };
            });
        setLatestData(latestStories);
        });
    }
    const TvData =()=>{
        axios
        .get(
            tvApi
        )
        .then((res) => {
        const tvS =
            res.data.results &&
            res.data.results.length > 0 &&
            res.data.results.map((item) => {
            return {
                byline: item.byline,
                content: item.short_desc,
                id: item.id,
                image: item.thumbnail,
                title: item.title,
                slug:'/'+item.slug,
                image_caption: item.image_caption,
            };
            });
        setTvData(tvS);
        });
    }
    const OTTData =()=>{
        axios
        .get(
            ottApi
        )
        .then((res) => {
        const OttS =
            res.data.results &&
            res.data.results.length > 0 &&
            res.data.results.map((item) => {
            return {
                byline: item.byline,
                content: item.short_desc,
                id: item.id,
                image: item.thumbnail,
                title: item.title,
                slug:'/'+item.slug,
                image_caption: item.image_caption,
            };
            });
            setOTTData(OttS);
        });
    }   
        
    const BollData =()=>{
        const spotApi = "https://cms.iansnews.in/api/elastic/news/list/?language=english&tags=bollywood";
        axios
        .get(
            spotApi
        )
        .then((res) => {
        const bollystr =
            res.data.results &&
            res.data.results.length > 0 &&
            res.data.results.map((item) => {
            return {
                byline: item.byline,
                content: item.short_desc,
                id: item.id,
                image: item.thumbnail,
                title: item.title,
                slug:'/'+item.slug,
                image_caption: item.image_caption,
            };
            });
        setBollyData(bollystr);
        });
    }
    const SpclData =()=>{
        const specApi = `https://cms.iansnews.in/api/elastic/news/list/?language=english&tags=cine_special`;
        axios
        .get(
            specApi
        )
        .then((res) => {
        const speccstr =
            res.data.results &&
            res.data.results.length > 0 &&
            res.data.results.map((item) => {
            return {
                byline: item.byline,
                content: item.short_desc,
                id: item.id,
                image: item.thumbnail,
                title: item.title,
                slug:'/'+item.slug,
                image_caption: item.image_caption,
            };
            });
            setSpecialDatt(speccstr);
        });
    }   
    const HollyData =()=>{
        const holApi = "https://cms.iansnews.in/api/elastic/news/list/?language=english&tags=hollywood";
        axios
        .get(
            holApi
        )
        .then((res) => {
        const hollystr =
            res.data.results &&
            res.data.results.length > 0 &&
            res.data.results.map((item) => {
            return {
                byline: item.byline,
                content: item.short_desc,
                id: item.id,
                image: item.thumbnail,
                title: item.title,
                slug:'/'+item.slug,
                image_caption: item.image_caption,
            };
            });
        setHollyData(hollystr);
        });
    }          

    const galleyApi = `https://cms.iansnews.in/api/news/portals/?language=english&topNews_category=whats-hot`;
    const musApi = `https://cms.iansnews.in/api/elastic/news/list/?language=english&tags=music`;  
    const region =`https://cms.iansnews.in/api/elastic/news/list/?language=english&tags=regional-cinema`; 
    const posterApi = `https://cms.iansnews.in/api/elastic/imagenews/list/?language=english&tags=bc-poster`;
    const RegionalData =()=>{
        axios
        .get(
            region
        )
        .then((res) => {
        const regnStories =
            res.data.results &&
            res.data.results.length > 0 &&
            res.data.results.map((item) => {
            return {
                byline: item.byline,
                content: item.short_desc,
                id: item.id,
                image: item.image,
                title: item.title,
                slug:'/'+item.slug,
                image_caption: item.image_caption,
            };
            });
        setRegionalData(regnStories);
        });
    }
    const GalleryyData =()=>{
        axios
        .get(
            galleyApi
        )
        .then((res) => {
        const gllStories =
            res.data.results &&
            res.data.results.length > 0 &&
            res.data.results.slice(0, ).map((item) => {
            return {
                byline: item.byline,
                content: item.short_desc,
                id: item.id,
                image: item.image,
                title: item.title,
                slug:'/'+item.slug,
                image_caption: item.image_caption,
            };
            });
            setGAlleryyData(gllStories);
        });
    }    
    const posterData =()=>{
        axios
        .get(
            posterApi
        )
        .then((res) => {
        const posterStories =
            res.data.results &&
            res.data.results.length > 0 &&
            res.data.results.slice(0, 7).map((item) => {
            return {
            
                id: item.id,
                image: item.image,
                title: item.title,
                slug:'/'+item.slug
            };
            });
        setPosterData(posterStories);
        });
    }    
    const MusicalData =()=>{
        axios
        .get(
            musApi
        )
        .then((res) => {
        const musStories =
            res.data.results &&
            res.data.results.length > 0 &&
            res.data.results.map((item) => {
            return {
                byline: item.byline,
                content: item.short_desc,
                id: item.id,
                image: item.image,
                title: item.title,
                slug:'/'+item.slug,
                image_caption: item.image_caption,
            };
            });
        setMusicalData(musStories);
        });
    }  
    const recApi = `https://cms.iansnews.in/api/misc/?tags=recommended_videos`;
    const recomVideo =()=>{
        axios
        .get(
            recApi
        )
        .then((res) => {
        const recStories =
            res.data.results &&
            res.data.results.length > 0 &&
            res.data.results.slice(0, 7).map((item) => {
            return {
                content: item.description,
                id: item.id,
                title: item.title,
                slug:'/'+item.slug
            };
            });
        setRecomVideo(recStories);
        });
    }   
    const traApi = `https://cms.iansnews.in/api/misc/?tags=movie_trailers`;

    const Trailer =()=>{
        axios
        .get(
            traApi
        )
        .then((res) => {
        const traStories =
            res.data.results &&
            res.data.results.length > 0 &&
            res.data.results.map((item) => {
            return {
                content: item.description,
                id: item.id,
                title: item.title,
                slug:'/'+item.slug
            };
            });
            setTrailer(traStories);
        });
    }          
    useEffect(() => {
        BollData();
        Trailer();
        MusicalData();
        RegionalData();
        TvData();
        OTTData();
        LatestData();
        GalleryyData();
        HollyData();
        SpclData();
        topSData();
        recomVideo();
        posterData();
        getPhotosData();
      }, []);
       
    return(
        <>
        <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="icon" href="icon-new.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/theme/bollywood/images/favicon.ico" type="image/x-icon" />
        <title>Bollywoodcountry.in - The last word on Bollywood and Indian movies</title>
        <meta data-meta-title="Bollywoodcountry.in" name="keywords" content="Bollywood news, Bollywood updates, Bollywood celebrities, Hindi cinema, Indian film industry, Bollywood gossips, Bollywood rumors, Bollywood releases, Movie reviews, Celebrity interviews" />
        <meta data-meta-title="Bollywoodcountry.in" name="description" content="Stay up-to-date with the latest Bollywood news and updates. Get the hottest gossips, rumors, movie reviews, and exclusive celebrity interviews from the captivating world of Hindi cinema. Your one-stop destination for everything Bollywood." />
        <script dangerouslySetInnerHTML={{
         __html: `
            var mybutton = document.getElementById("myBtn");
            window.onscroll = function() {scrollFunction()};
            function scrollFunction() 
            {
                if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                    mybutton.style.display = "block";
                }else{
                    mybutton.style.display = "none";
                }
            }
            $(window).scroll(function() 
            {
                if ($(this).scrollTop() >= 50) {       
                    $('#return-to-top').fadeIn(200); 
                } else {
                    $('#return-to-top').fadeOut(200); 
                }
            });
            $('#return-to-top').click(function() {  
                $('body,html').animate({
                    scrollTop : 0                     
                }, 500);
            });

            var swiper = new Swiper('.swiper-container', {
                slidesPerView: 1,
                spaceBetween: 30,
                loop: true,
                
                pagination: {
                el: '.swiper-pagination',
                clickable: true,
                },
                navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                },
                autoplay: {
                delay: 5000,
                },
            });
            $(document).ready(function () {
                    
                $("#myCarousel").carousel({ interval:false });           
            
                $(".left").click(function () {
                    $("#myCarousel").carousel("prev");
                });
                $(".right").click(function () {
                    $("#myCarousel").carousel("next");
                });


                $("#my1Carousel").carousel({ interval:false });           
                
                $(".left").click(function () {
                    $("#my1Carousel").carousel("prev");
                });
                $(".right").click(function () {
                    $("#my1Carousel").carousel("next");
                });
            });     
         `}} />
        </Helmet>
            <Header />
            <section>
                <div className="cbx-section cbx-newsbuzz">
                    <div className="cbx-section-inner">
                        <div className="container">
                            <div className="row">
                            <div className="col-xs-12 col-sm-5 col-md-3">
                                <Slide ld ={bollyDatt} title={'Bollywood'} limit="5"/>
                            </div>
                            <div className="col-xs-12 col-sm-5 col-md-6">
                            <div className="btn5"><a href="#">THE POSTER SHOW</a></div>
                                <div className="cbx-list cbx-list2">
                                    <div id="myCarousel" className="carousel slide" data-ride="carousel">
                                        <div className="carousel-inner">
                                        {posterrData && posterrData.length > 0 && posterrData.slice(0,9).map((posst, p)=>{
                                          return(                                                              
                                            <>
                                            <div className={p==0 ? 'item active' : 'item'} key={p}>
                                                <img src={posst.image.replace("/thumbnails_watermark","/thumbnails")} />
                                                <div className="carousel-caption lof-main-item-desc">
                                                    <p><NavLink to={posst.slug} title={posst.title} className="y_14" target="_blank">{posst.title}</NavLink><NavLink to={posst.slug} className="btnclick">Click Here </NavLink></p>
                                                </div>
                                            </div>
                                            </>
                                                )})}
                                        </div>
                                        <a className="swiper-button-prev" href="#myCarousel" data-slide="prev"><i className="fa fa-chevron-left" aria-hidden="true"></i> </a>

                                        <a className="swiper-button-next" href="#myCarousel" data-slide="next"><i className="fa fa-chevron-right" aria-hidden="true"></i> </a>

                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-5 col-md-3">
                                <Sld ld ={latData} title={'VIDEO'} iconStaus ={true} crow={'myCarouseltvvideo'}/>
                                <Sld ld ={photosDSata} title={'PHOTO'} iconStaus ={false} crow={'myCarouseltvphoto'}/>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="cbx-section cbx-newsbuzz">
                    <div className="cbx-section-inner">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12 col-sm-5 col-md-3">
                                   <Slide ld ={hollyDatt} title={'Hollywood'} limit="5"/>
                                </div>
                                <div className="col-xs-12 col-sm-5 col-md-6 greybg ">
                                    <div className="btn2">
                                        <div className="ticker-title"><span>Latest News</span></div>
                                        <div className="vwrap">
                                            <div className="vmove">
                                            {topData && topData.length > 0 && topData.slice(0, 5).map((topp, t)=>{
                                                return(
                                                    <>
                                                        <div className="vitem" key={t}>{topp.title}</div>
                                                    </>
                                                )
                                            })}
                                            
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="cbx-list cbx-list2 greysec">
                                        <ul className="list-unstyled">
                                            <li>
                                                <figure>
                                                    <span className="img-blog-news iphone-frame">
                                                        <a title="" href="#">
                                                            <img className="cbx-sidebarthumbnail"src= {topData && topData.length > 0 && topData[0].image ? topData[0].image : '' }/>
                                                        </a>
                                                    </span>
                                                    <figcaption>
                                                        <h3 className="title">
                                                            <NavLink to={topData && topData.length > 0 && topData[0].slug ? topData[0].slug : '' }>{topData && topData.length > 0 && topData[0].title ? topData[0].title : '' }</NavLink>
                                                        </h3>
                                                    </figcaption>
                                                </figure>
                                            </li>
                                            {topData && topData.length > 0 && topData.slice(1,4).map((toppp, tp)=>{
                                                return(
                                                    <>
                                            <li key={tp}>
                                            
                                                <figure>
                                                    <div className="tabtextarea-unstyright greyhed">
                                                        <NavLink to={toppp.slug}><h3 className="title">{toppp.title}</h3></NavLink>
                                                    </div>
                                                </figure>
                                            </li>
                                            </>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-5 col-md-3">
                                    <Slide ld ={specialDatt} title={'Special'} limit="5"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="cbx-section cbx-newsbuzz">
                    <div className="cbx-section-inner">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12 col-sm-5 col-md-3">
                                    <Slide ld ={tvvData} title={'TV'} limit="5"/>
                                </div>
                                <div className="col-xs-12 col-sm-5 col-md-6 ianstv-power-play-video">
                                    <div className="btn5"><a href="#">RECOMMENDED VIDEOS</a></div>
                                    <div className ="" dangerouslySetInnerHTML={{ __html:  recomData && recomData.length > 0 && recomData[0].content ? recomData[0].content : '' }} />
                                    <h5>
                                    {recomData && recomData.length > 0 && recomData[0].title ? recomData[0].title : ''}
                                    </h5>
                                    <ul className="ianstv-power-play-video1">
                                        {recomData && recomData.length > 0 && recomData.slice(1,3).map((recc, r)=>{
                                            return(
                                                <>
                                        <li key={r}>
                                        
                                        <div className ="" dangerouslySetInnerHTML={{ __html:  recc.content }} />
                                       </li>                                                
                                                </>
                                            )
                                        })}

                                        <li>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-xs-12 col-sm-5 col-md-3">
                                    <Slide ld ={OtttData} title={'OTT'} limit="5"/>
                                </div>                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="cbx-section cbx-newsbuzz">
                    <div className="cbx-section-inner">
                        <div className="container">
                            <div className="row">
                                <New valid={false}/>
                                <div className="col-xs-12 col-sm-5 col-md-6">
                                    <div className="ianstv-power-play-video">
                                        <div className="btn2"><a href="#">TRAILERS</a></div>
                                        {trailerData && trailerData.length > 0 && trailerData.slice(0, 1).map((trr, tl)=>{
                                            return(
                                                <>
                                                <div className="slick" key={tl}>
                                                <div className ="" dangerouslySetInnerHTML={{ __html:  trr.content }} />
                                    <h5>
                                    {trr.title}
                                    </h5>							 
                                                </div>                                                
                                                </>
                                            )
                                        })}

                                    </div>
                                <PhotoGal imageDatat={imageDatat} />
                                </div>
                                <div className="col-xs-12 col-sm-5 col-md-3">
                                    <Slide ld ={regData} title={'REGIONAL'} limit="4"/>
                                    <Slide ld ={mussSData} title={'MUSIC'} limit="4"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> 
            <Footer />
            
        </>
    )
}

export default Home