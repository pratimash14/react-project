import Footer from './Footer'
import Header from './Header'
import React,{useState, useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import New from './New';
import {Helmet} from "react-helmet";

const Detail = () =>{
const {newsId} = useParams();
const [isLoading, setIsLoading] = useState(false);
const [paramValue, setParamValue] = useState(null);
const [collectionData, setCollectionData] = useState([]);
const [latData, setLatestData] = useState({
   id: null,
   title: '',
   byline: '',
   content: '',
   image: '',
   slug:'',
   image_caption: ''
});
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
const getData = async() =>{
  const apiD= `https://cms.iansnews.in/api/news/portals/${newsId}`
  axios.get(apiD)
.then(res =>
 {

  let main_content_string = res.data.results[0].content;
  let iansIndex = main_content_string.indexOf("--IANS") ? main_content_string.indexOf("--IANS") : main_content_string;
  let new_main_content_string = main_content_string.substring(0, iansIndex);
  
  setCollectionData({
  byline: res.data.results[0].byline,
  short_desc: res.data.results[0].short_desc,
  content: new_main_content_string,
  id: res.data.results[0].id,
  image: res.data.results[0].thumbnail,
  title: res.data.results[0].title,
  keywords: res.data.results[0].keywords,
  slug:'/'+res.data.results[0].slug,
  image_caption: res.data.results[0].image_caption
})
})
.catch(err => { console.log('Google api calendar error', err) })
}
 useEffect(() => {
   setParamValue(newsId)
   LatestData();
   getData();
}, [newsId])
    return(
        <>
        <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <link rel="icon" href="icon-new.ico" type="image/x-icon" />
    <link rel="shortcut icon" href="/theme/bollywood/images/favicon.ico" type="image/x-icon" />
    <title>Bollywoodcountry.in -{collectionData.title ? collectionData.title.toUpperCase() : ''}</title>
    <meta name="keywords" content={collectionData.keywords ? collectionData.keywords.toUpperCase() : ''} />
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
                      <div className="Fullstory">
                        <div className="col-md-12 no-padding">
                          <img src={collectionData.image} className="img-fluid boxShadow" alt={collectionData.image_caption} />
                        </div>
                        <h1>{collectionData.title}</h1>
                        <p>{collectionData.short_desc}</p>
                        <div dangerouslySetInnerHTML={{ __html:  collectionData.content }} />
                      </div>	
                    </div>
                    <New valid={true} lat={latData}/>
                  </div>
                </div>
              </div>
            </div>
          </section>
        <Footer/>
        </div>
        </>
    )
}

export default Detail