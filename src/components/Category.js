import React,{useState, useEffect, useCallback} from 'react';
import axios from 'axios';
import Footer from './Footer'
import Header from './Header'
import Sidebar from './Sidebar'
import {NavLink} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import New from './New.js'
import {Helmet} from "react-helmet";

const Category = ()=>{

const [isLoading, setIsLoading] = useState(false);
const [totNews, setTotNews] = useState(null);
// const [totPages, setPages] = useState(null);
const [cateData, setCateData] = useState({
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
    byline: '',
    content: '',
    image: '',
    slug:'',
    image_caption: ''
}); 
const [galleryData, setGalleryNews] = useState([]);
const [latestNewsData, setLatestNews] = useState([]);
const [advData, setAdvData] = useState({
        adv_1: '',
        adv_2: ''
});
const {categoryId, subCat, offset} = useParams();
const [currentPage, setCurrentPage] = useState(1);
const [pageList, setPageList] = useState([1,2,3]);
const [lastPage, setLastPage] = useState(1);
const [lt, setLt] = useState(5);
const [requestFlag, setRequestFlag] = useState(true);
const [dat2a, setData] = useState([]);
const [catt, setCatData] = useState(categoryId);
const [subbCatt, setSubCatData] = useState(subCat);
const LatestData =()=>{
    axios
    .get(
    `https://cms.iansnews.in/api/elastic/news/list/?language=english&tags=entertainment`
    )
    .then((res) => {
    const latestStories =
        res.data.results &&
        res.data.results.length > 0 &&
        res.data.results.slice(0, 8).map((item) => {
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
    setLatestData(latestStories);
    });
}
//alert(categoryId);
const fetchData = async (page) => {
const getApii = `https://cms.iansnews.in/api/elastic/news/list/?language=english&tags=${categoryId}&page=${page}`;
   axios.get(getApii)
     .then(res => {

       const capitalizedCatText = categoryId ? categoryId.toUpperCase(): '';
       const capitalizedSubCatText = subCat ? ' / ' + subCat.charAt(0).toUpperCase() +  subCat.slice(1) : '';
//if(lastPage == 1){
setLastPage(res.data.numpages);

//}
const getCatData =
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
        setCateData(getCatData);
        setLt(res.data.numpages);

     // const paage = [];
     // let x ;
     // for(x = currentPage; x < 5; x++){
     //   paage.push(x);
     //
     //   paage.unshift(pageList[pageList.length-1] +1);
     //
     // }
     // console.log('kk', paage);
     // setPageList(paage);



     setRequestFlag(false);
   })
   .catch(err => {
     // console.log('Google api calendar error', err)
    })

}
useEffect(() => {
  fetchData(currentPage);
  LatestData();

//  .catch(err => { console.log('Google api calendar error', err) })
}, [currentPage, categoryId])

const handleNextPage = () => {
if(lastPage > currentPage){
  setCurrentPage(currentPage + 1);
  let newArry = pageList;
  let newAddArray = pageList[pageList.length-1]+1;
  // if(currentPage > 2){
    let newRemoveArray = pageList[0];
  //
  // }
  newArry.shift(newRemoveArray);
  newArry.push(newAddArray);
    setPageList(newArry);

   }

}

const handlePrevPage = () => {
if(currentPage > 1){

  setCurrentPage(currentPage - 1);
  // setCurrentPage(currentPage + 1);
  let newArry = pageList;

  let newAddArray = pageList[pageList.length-1];
  let newRemoveArray = pageList[0]-1;
    newArry.unshift(newRemoveArray);
  newArry.pop(newAddArray);
setPageList(newArry);
}
}
const handleLastPage = () => {
//if(requestFlag){
  setCurrentPage(lt);
  let lastArrtty = [lt-3, lt-2, lt-1]
  setPageList(lastArrtty);
//  }
}
const handleStartPage = () => {
// if(requestFlag){
  setCurrentPage(1);
  let lastArrtty = [1, 2, 3]
  setPageList(lastArrtty);
//  }
}
const handleSetPage = (page) => {
//  if(requestFlag){
  setCurrentPage(page);
//}
}

    return(
        <>
        <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <link rel="icon" href="icon-new.ico" type="image/x-icon" />
    <link rel="shortcut icon" href="/theme/bollywood/images/favicon.ico" type="image/x-icon" />
    <title>Bollywoodcountry.in -{categoryId ? categoryId.toUpperCase() : ''} NEWS</title>
    <meta name="keywords" content="Bollywood news, Bollywood updates, Bollywood celebrities, Hindi cinema, Indian film industry, Bollywood gossips, Bollywood rumors, Bollywood releases, Movie reviews, Celebrity interviews" />
    <meta name="description" content="Stay up-to-date with the latest Bollywood news and updates. Get the hottest gossips, rumors, movie reviews, and exclusive celebrity interviews from the captivating world of Hindi cinema. Your one-stop destination for everything Bollywood." />
        </Helmet>
      
     
         <div className="cbx-container">
            <Header />
            <section>
                <div className="cbx-section cbx-newsbuzz">
                    <div className="cbx-section-inner">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-9 no-padding">                      
                                    <div className="btn-cat">{categoryId ? categoryId.toUpperCase(): ''}</div>
                                        <ul className="list-cat-news">
                                            {cateData && cateData.length > 0 && cateData.map((cate, c)=>{
                                                return(
                                                    <li key={c}>
                                                    <figure>		 
                                                        <span className="img-cat-news">
                                                            <NavLink to={cate.slug}><img src={cate.image} title="" alt={cate.image_caption}/></NavLink>
                                                        </span>
                                                        <figcaption className="blog-news">
                                                            <NavLink to={cate.slug}><h3 className="title">{cate.title}</h3></NavLink>
                                                            <p>{cate.content}</p>
                                                        </figcaption>
                                                    </figure>
                                                </li>
                                                )
                                            })}
                                        </ul>
                                    <div className="pagination">
                                        <ul>
                                            {currentPage == 1  && <li onClick={handleStartPage} disabled={currentPage === 1}><NavLink className="prevnext disablelink" to="#">Previous</NavLink></li>}


                                            {currentPage != 1  &&<li onClick={handlePrevPage} ><a href="#">Previous</a></li>}
                                        {pageList.map((data, i)=>{

                                            return(
                                                                        <li key={i} onClick={()=>{
                                            setCurrentPage(data)}}><a href="#" className={currentPage == data ? 'active' : ''}>{data}</a></li>
                                                        )
                                                    })}

                                            <li onClick={handleNextPage}><a href="#" className="prevnext">next</a></li>
                                        </ul>                                            							
                                    </div>
                                </div>
                                <New valid={true} lat={latData} />
                                {/* <div className="col-xs-12 col-sm-12 col-md-3">
                                    <div className="cbx-list cbx-list2">
                                        <div className="right_sec_new">
                                        <h2><a href="#"> Follow @IANSNews for breaking news and top stories from around the globe</a></h2>
                                        <center><a href="https://www.facebook.com/iansnews.in/" target="_blank"><img className=" lazyloaded" src="https://www.bollywoodcountry.com/images/img-mobile.jpg"/></a></center>
                                        <div className="head_new"><a href="https://www.facebook.com/iansnews.in/" target="_blank">
                                        Facebook</a>
                                        </div>
                                        <h2><a href="#"> Follow @ians_india for breaking news and top stories from around the globe</a></h2>
                                        <a href="https://twitter.com/ians_india" target="_blank">
                                        <center>
                                        <img className=" lazyloaded" src="https://d3uzu3w6dhx4vx.cloudfront.net/updated-ians_files/Twitter-logo-Vector-Design-Icon.png"/>
                                        </center>
                                        </a>
                                        <div className="head_new"><a href="https://twitter.com/ians_india" target="_blank">
                                        Tweets</a>
                                        </div>
                                        <h2><a href="#"> Follow @BollywoodCountry for breaking news and top stories from around the globe</a></h2>
                                        <div className="head_new"><a href="https://www.youtube.com/user/BollywoodCountry" target="_blank"><img className=" lazyloaded" src="https://d3uzu3w6dhx4vx.cloudfront.net/updated-ians_files/right-utube-icon.jpg"/>
                                        Youtube</a></div>
                                        <h2><a href="#"> Follow @iansmultimedia for breaking news and top stories from around the globe</a></h2>
                                        <div className="head_new"><a href="https://www.instagram.com/iansnews.in/" target="_blank" ><img src="https://d3uzu3w6dhx4vx.cloudfront.net/updated-ians_files/instagram-icon-right.jpg"/>
                                        Instagram</a>
                                        </div>
                                        
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
         </div>
        </>
    )
}
export default Category