import { Link } from "react-router-dom"

const National =(props)=>{
return (
    <>
            <section className="whats-new-style-1 section-padding transNone">
               <div className="container transNone" >
                  <div className="row gutter-30 sticky-coloum-wrap transNone">
                     <div className="col-xl-9 sticky-coloum-item stickyians3">
                     <div className="theiaStickySidebar stickyians1" ><div className="featured-area-style-1 overflow-hidden">
                           <div className="wrap mb--60">
                              <div className="featured-tab-title">
                                 <h2 className="rt-section-heading">
                                    <span className="rt-section-text">National</span>
                                    <span className="rt-section-dot"></span>
                                    <span className="rt-section-line"></span>
                                 </h2>
                              </div>
                              <div className="tab-content" id="myTabContent">
                                 <div className="tab-pane tab-item animated fadeInUp show active" id="menu-1" role="tabpanel" aria-labelledby="menu-1-tab">
                                    <div className="row gutter-24">
                                       <div className="col-lg-7">
                                          <div className="rt-post-overlay rt-post-overlay-lg">
                                             <div className="post-img">
                                                <Link to={props && props.listData[0] && props.listData[0].slug ? props.listData[0].slug : ''} className="img-link">
                                                   <img src={props && props.listData[0] && props.listData[0].image ? props.listData[0].image : ''} alt={props && props.listData[0] && props.listData[0].image_caption ? props.listData[0].image_caption : ''} width="900" height="600" />
                                                </Link>
                                             </div>
                                             <div className="post-content">
                                                <h3 className="post-title bold-underline">
                                                   <Link to={props && props.listData[0] && props.listData[0].slug ? props.listData[0].slug : ''}>
                                                     {props && props.listData[0] && props.listData[0].title ? props.listData[0].title : ''}
                                                   </Link>
                                                </h3>
                                                <p>{props && props.listData[0] && props.listData[0].content ? props.listData[0].content : ''}</p>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="col-lg-5">
                                          <div className="row gutter-24">
                                                {props && props.listData && props.listData.length > 0 && props.listData.slice(1,5).map((data, x)=>{
                                                return(
                                                   <div className="col-12" key={x}>
                                                   <div className="rt-post post-sm style-2">
                                                      <div className="post-content">
                                                         <h4 className="post-title">
                                                            <Link to={data.slug}>
                                                            {data.title}

                                                            </Link>
                                                         </h4>
                                                      {/* <p>{data.content} </p> */}
                                                         
                                                      </div>
                                                      <div className="post-img">
                                                      <Link to={data.slug}>
                                                            <img src={data.image} alt={data.image_caption} width="143" height="110" />
                                                         </Link>
                                                      </div>
                                                   </div>
                                                </div>
                                                )
                                                })}
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div> 
                           </div>
                           <div className="wrap mb--60">
                              <div className="featured-tab-title">
                                 <h2 className="rt-section-heading">
                                    <span className="rt-section-text">Entertainment</span>
                                    <span className="rt-section-dot"></span>
                                    <span className="rt-section-line"></span>
                                 </h2>
                              </div>
                              <div className="tab-content" id="myTabContent">
                                 <div className="tab-pane tab-item animated fadeInUp show active" id="menu-1" role="tabpanel" aria-labelledby="menu-1-tab">
                                    <div className="row gutter-24">
                                       <div className="col-lg-7">
                                          <div className="rt-post-overlay rt-post-overlay-lg">
                                             <div className="post-img">
                                                <Link to={props && props.enter[0] && props.enter[0].slug ? props.enter[0].slug : ''} className="img-link">
                                                   <img src={props && props.enter[0] && props.enter[0].image ? props.enter[0].image : ''} alt={props && props.enter[0] && props.enter[0].image_caption ? props.enter[0].image_caption : ''} width="900" height="600" />
                                                </Link>
                                             </div>
                                             <div className="post-content">
                                                <h3 className="post-title bold-underline">
                                                   <Link to={props && props.enter[0] && props.enter[0].slug ? props.enter[0].slug : ''}>
                                                     {props && props.enter[0] && props.enter[0].title ? props.enter[0].title : ''}
                                                   </Link>
                                                </h3>
                                                <p>{props && props.enter[0] && props.enter[0].content ? props.enter[0].content : ''}</p>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="col-lg-5">
                                          <div className="row gutter-24">
                                          {props.enter && props.enter.length > 0 && props.enter.slice(1,5).map((en, e)=>{
                                                return(
                                                   <div className="col-12" key={e}>
                                                   <div className="rt-post post-sm style-2">
                                                      <div className="post-content">
                                                         <h4 className="post-title">
                                                            <Link to={en.slug}>
                                                            {en.title}
                                                            </Link>
                                                         </h4>
                                                      {/* <p>{data.content} </p> */}
                                                      </div>
                                                      <div className="post-img">
                                                      <Link to={en.slug}>
                                                            <img src={en.image} alt={en.image_caption} width="143" height="110" />
                                                         </Link>
                                                      </div>
                                                   </div>
                                                </div>
                                                )})}
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div> 
                           </div>
                        </div>
                        </div>
                        </div>
                     <div className="col-xl-3 col-lg-8 mx-auto sticky-coloum-item stickyians14">
                     <div className="theiaStickySidebar stickyians2" ><div className="rt-sidebar sticky-wrap">
                           <div className="sidebar-wrap mb--40">
                              <div className="ad">
	                               <a href="https://in.jooble.org/" target="_blank"><img className=" lazyloaded" src="assets/Images/Jooble_logo.png" /></a>
	                           </div>
                           </div>
                           <div className="sidebar-wrap mb--40">
                              <h2 className="rt-section-heading style-2 mb--30">
                                 <span className="rt-section-text">Business</span>
                                 <span className="rt-section-dot"></span>
                                 <span className="rt-section-line"></span>
                              </h2>
                              <div className="post-list">
  
                                 {props && props.data && props.data.length > 0 && props.data.map((bus, b)=>{
                                    return(
                                       <div className="item" key={b}>
                                       <div className="rt-post post-sm style-1">
                                          <div className="post-img">
                                             <Link to={bus.slug}>
                                                <img src={bus.image} alt={bus.image_caption} width="100" height="100" />
                                             </Link>
                                          </div>
                                          <div className="ms-4 post-content">
                                             
                                             <h4 className="post-title">
                                                <Link to={bus.slug}>
                                                {bus.title}
                                                </Link>
                                             </h4>
                                                {/* <p> {bus.content}</p> */}
                                          </div>
                                       </div>
                                    </div>
                                    )})}
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>    
    </>
)
}
export default National;