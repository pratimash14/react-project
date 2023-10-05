import React from 'react';
import Home from './Home';
import ReactDOM from "react-dom";
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
// import PhotoGalleryDetails from './PhotoGalleryDetails';
// import VideoListGallery from './VideoListGallery';
// import Video from './Video';
// import Contact from './Contact';
import Category from './Category';

import Search from './Search';
import Detail from './Detail';
// import Blog from './Blog';
// import Calulator from './Calulator';
import '../css/style.css';
import Testo from './Testo';
import Privacy from './Privacy';
import Terms from './Terms'

const App = () =>{
  return(
    <>
    <BrowserRouter>
    <Switch>
    <Route exact path="/" component={Home}/>
    {/* <Route exact path="/search" component={Search}/> */}
    <Route exact path="/search/:search" component={Search}/>
    <Route exact path="/privacy-policy" component={Privacy}/>
    <Route exact path="/terms-and-conditions" component={Terms}/>
    {/* <Route exact path="/cal" component={Calulator}/>
    <Route exact path="/photo" component={PhotoGalleryDetails}/>
    <Route exact path="/blog" component={Blog}/>
    <Route exact path="/contact" component={Contact}/>
    <Route exact path="/search/:search" component={Search}/>
    <Route exact path="/videos/:search" component={VideoListGallery}/>
    <Route exact path="/video/:search" component={Video}/>
    
    <Route exact path="/category/:categoryId/:subCat" component={Category}/>
    <Route exact path="/gallery/:galleryId" component={PhotoGalleryDetails}/> */}
    <Route exact path="/category/:categoryId" component={Category}/>
    {/* <Route exact path="/category/:categoryId/:offset" component={Category}/> */}
    {/* <Route exact path="/category/:categoryId/:subCat/:offset" component={Category}/> */}
    <Route exact path="/:newsId" component={Detail}/>
    <Redirect to="/" />
    </Switch>
    </BrowserRouter>
    </>
  )
}

export default App;
