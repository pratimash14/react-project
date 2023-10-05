import {NavLink} from 'react-router-dom';

const New =(props)=>{
    return(
<>
        <div className="col-xs-12 col-sm-5 col-md-3">
            {
            props && props.valid &&
            <div className="side-br">
            <div className="btn5">
                <a aria-current="page" className="active" href="#">Latest News</a>
            </div>
            <ul className="list-latest-news">
                {props && props.lat && props.lat.length > 0 && props.lat.map((ltt, lt)=>{
                    return(
                        <>
                    <li key ={lt}>
                        <figure>
                            <figcaption className="tabtextarea-latest-news">
                                <NavLink to={ltt.slug}>
                                    <h3 className="title">{ltt.title}</h3>
                                </NavLink>
                            </figcaption>
                            <div className="img-area-latest-news">
                                <NavLink to={ltt.slug}>
                                    <img src={ltt.image} alt={ltt.image_caption} />
                                </NavLink>
                            </div>
                        </figure>
                    </li>                         
                        </>
                    )
                })}

                </ul>
            </div>

                }
            <div className="cbx-list cbx-list2">

                <div className="right_sec_new">
                    
                    <h2><a href="#"> Get the latest news on the go. <br />Download the IANS App for free and stay tuned to all breaking stories, in-depth news analyses and features.</a></h2>
                    <center>
                        <a href="https://www.facebook.com/iansnews.in/" target="_blank">
                            <img className=" lazyloaded" src="/assets/img/IANS-i-Phone.png" />
                        </a>
                    </center>
                </div>
            </div>
        </div>
        </>
    )
}
export default New