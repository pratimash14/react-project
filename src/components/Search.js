import React,{useState, useEffect, useCallback} from 'react';
import axios from 'axios';
import Footer from './Footer'
import Header from './Header'
import New from './New'
import {NavLink} from 'react-router-dom';
import {useParams} from 'react-router-dom';
const Search = ()=>{

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
const [galleryData, setGalleryNews] = useState([]);
const [latestNewsData, setLatestNews] = useState([]);
const [advData, setAdvData] = useState({
        adv_1: '',
        adv_2: ''
});
const {search, categoryId} = useParams();
const [searchD , setSerchData] = useState('');
const [currentPage, setCurrentPage] = useState(1);
const [pageList, setPageList] = useState([1,2,3]);
const [lastPage, setLastPage] = useState(1);
const [lt, setLt] = useState(5);
const [requestFlag, setRequestFlag] = useState(true);
const [dat2a, setData] = useState([]);
const [catt, setCatData] = useState(search);
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
//alert(categoryId);
const fetchData = async (page) => {
    const getApii = `https://cms.iansnews.in/api/elastic/news/search/?language=english&tags=entertainment&query=${search}&page=${page}`;
      axios.get(getApii)
     .then(res => {


if(lastPage == 1){
setLastPage(res.data.totNews);

}
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
    if(localStorage.getItem('searchData')){
        setSerchData(localStorage.getItem('searchData'));
    }
    LatestData();
  fetchData(currentPage);

//  .catch(err => { console.log('Google api calendar error', err) })
}, [currentPage, search])

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
export default Search