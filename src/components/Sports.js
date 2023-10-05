import { Link } from "react-router-dom";

const Sports = (props)=>{
    return (
        <>
        <div className="col-xl-3 col-lg-8 mx-auto sticky-coloum-item">
            <div className="rt-sidebar">
                <div className="sidebar-wrap ">
                    <h2 className="rt-section-heading style-2 mb--30">
                    <span className="rt-section-text">Sports</span>
                    <span className="rt-section-dot"></span>
                    <span className="rt-section-line"></span>
                    </h2>
                    <div className="row gutter-24">
                        {props && props.datap && props.datap.length > 0 && props.datap.slice(0, 4).map((spt, s)=>{
                            return(
                                <div className="col-12" key={s}>
                                <div className="rt-post post-sm style-2">
                                    <div className="post-content">
                                        <h4 className="post-title">
                                        <Link to={spt.slug}>
                                            {spt.title}

                                        </Link>
                                        </h4>
                                    {/* <p>{spt.content}</p> */}
                                        
                                    </div>
                                    <div className="post-img">
                                        <Link to={spt.slug}>
                                        <img src={spt.image} alt={spt.image_caption} width="143" height="110" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            )
                        })}

                    </div>
                </div>
                <div className="sidebar-wrap mb--40">
                    <div className="subscribe-box-style-1" data-bg-image="media/elements/element_5.png">
                    
                        <br/>
                        <div className="twitter-timeline twitter-timeline-rendered" ><iframe id="twitter-widget-0" scrolling="no" frameborder="0" allowtransparency="true" allowFullScreen="true" className=""  title="Twitter Timeline" src="https://syndication.twitter.com/srv/timeline-profile/screen-name/ians_india?dnt=false&amp;embedId=twitter-widget-0&amp;features=eyJ0ZndfdGltZWxpbmVfbGlzdCI6eyJidWNrZXQiOlsibGlua3RyLmVlIiwidHIuZWUiLCJ0ZXJyYS5jb20uYnIiLCJ3d3cubGlua3RyLmVlIiwid3d3LnRyLmVlIiwid3d3LnRlcnJhLmNvbS5iciJdLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2hvcml6b25fdGltZWxpbmVfMTIwMzQiOnsiYnVja2V0IjoidHJlYXRtZW50IiwidmVyc2lvbiI6bnVsbH0sInRmd190d2VldF9lZGl0X2JhY2tlbmQiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3JlZnNyY19zZXNzaW9uIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19zaG93X2J1c2luZXNzX3ZlcmlmaWVkX2JhZGdlIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19jaGluX3BpbGxzXzE0NzQxIjp7ImJ1Y2tldCI6ImNvbG9yX2ljb25zIiwidmVyc2lvbiI6bnVsbH0sInRmd190d2VldF9yZXN1bHRfbWlncmF0aW9uXzEzOTc5Ijp7ImJ1Y2tldCI6InR3ZWV0X3Jlc3VsdCIsInZlcnNpb24iOm51bGx9LCJ0ZndfbWl4ZWRfbWVkaWFfMTU4OTciOnsiYnVja2V0IjoidHJlYXRtZW50IiwidmVyc2lvbiI6bnVsbH0sInRmd19zZW5zaXRpdmVfbWVkaWFfaW50ZXJzdGl0aWFsXzEzOTYzIjp7ImJ1Y2tldCI6ImludGVyc3RpdGlhbCIsInZlcnNpb24iOm51bGx9LCJ0ZndfZXhwZXJpbWVudHNfY29va2llX2V4cGlyYXRpb24iOnsiYnVja2V0IjoxMjA5NjAwLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2R1cGxpY2F0ZV9zY3JpYmVzX3RvX3NldHRpbmdzIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd192aWRlb19obHNfZHluYW1pY19tYW5pZmVzdHNfMTUwODIiOnsiYnVja2V0IjoidHJ1ZV9iaXRyYXRlIiwidmVyc2lvbiI6bnVsbH0sInRmd19zaG93X2JsdWVfdmVyaWZpZWRfYmFkZ2UiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3Nob3dfZ292X3ZlcmlmaWVkX2JhZGdlIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19zaG93X2J1c2luZXNzX2FmZmlsaWF0ZV9iYWRnZSI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9mcm9udGVuZCI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9fQ%3D%3D&amp;frame=false&amp;hideBorder=false&amp;hideFooter=false&amp;hideHeader=false&amp;hideScrollBar=false&amp;lang=en&amp;maxHeight=1450px&amp;origin=https%3A%2F%2Fianslive.in%2F&amp;sessionId=c775a606ba040ae8410ddd723d0240c241906800&amp;showHeader=true&amp;showReplies=false&amp;transparent=false&amp;widgetsVersion=a3525f077c700%3A1667415560940"></iframe></div>
                    </div>
                    
                </div>
            </div>
        </div>        
        </>
    )
}

export default Sports;