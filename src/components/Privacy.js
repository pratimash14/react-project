import Footer from './Footer'
import Header from './Header'
import React,{useState, useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import New from './New';
import {Helmet} from "react-helmet";

const Privacy = () =>{
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
  let iansIndex = main_content_string.indexOf("--आईएएनएस") ? main_content_string.indexOf("--आईएएनएस") : main_content_string;
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
    <title>khabarfilmy.in -{'PRIVACY POLICY'}</title>
    <meta name="keywords" content={'PRIVACY POLICY'} />
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
                        <h1>{'PRIVACY POLICY'}</h1>
                        
                        <div dangerouslySetInnerHTML={{ __html:  `<p>This policy was last updated in January 2012.</p>

<p>As a general rule, this website does not collect Personal Information about you when you visit the site. You can generally visit the site without revealing Personal Information, unless you choose to provide such information.</p>

<p><strong>Site Visit Data:</strong></p>

<p>This website records your visit and logs the following information for statistical purposes your server&#39;s address; the name of the top-level domain from which you access the Internet (for example, IANS.in, IANSHINDI.in etc.); the type of browser you use; the date and time you access the site; the pages you have accessed and the documents downloaded and the previous Internet address from which you linked directly to the site. We will not identify users or their browsing activities, except when a law enforcement agency may exercise a warrant to inspect the service provider&#39;s logs.</p>

<p><strong>Cookies</strong></p>

<p>A cookie is a piece of software code that an internet web site sends to your browser when you access information at that site. This site does not use cookies.</p>

<p><strong>Email Management:</strong></p>

<p>Your email address will only be recorded if you choose to send a message. It will only be used for the purpose for which you have provided it and will not be added to a mailing list. Your email address will not be used for any other purpose, and will not be disclosed, without your consent.</p>

<p><strong>Collection of Personal Information:</strong></p>

<p>If you are asked for any other Personal Information you will be informed how it will be used if you choose to give it. If at any time you believe the principles referred to in this privacy statement have not been followed, or have any other comments on these principles, please notify the webmaster through the contact us page.</p>

<p><strong>Note:</strong></p>

<p>The use of the term &quot;Personal Information&quot; in this privacy statement refers to any information from which your identity is apparent or can be reasonably ascertained.</p>

<p><strong>Copyright Policy</strong></p>

<p>The contents of this website may not be reproduced partially or fully, without due permission from IANS India. If referred to as a part of another publication, the source must be appropriately acknowledged. The contents of this website can not be used in any misleading or objectionable context.</p>

<p><strong>Hyperlink Policy</strong></p>

<p>Links To External Websites/Portals</p>

<p>At many places in this website, you shall find links to other websites/portals. These links have been placed for your convenience.All India Council for Technical Education is not responsible for the contents and reliability of the linked websites and does not necessarily endorse the views expressed in them. Mere presence of the link or its listing on this website should not be assumed as endorsement of any kind. We cannot guarantee that these links will work all the time and we have no control over availability of linked pages.</p>

<p><strong>This policy sets out:</strong></p>

<ul>
<li>what kind of information we collect;</li>
<li>how we collect it;</li>
<li>why we collect it;</li>
<li>how we use it;</li>
<li>how we disclose it;</li>
<li>opting in and out;</li>
<li>how to seek access to and update your personal information; and</li>
<li>how to contact us.</li>
</ul>

<p>We may, from time to time, review and update this policy, including taking account of new or amended laws, new technology and/or changes to our operations. All personal information held by us will be governed by the most recently updated policy.</p>

<p><strong>What information we collect</strong></p>

<p>In general, the personal information we collect about you includes (but is not limited to) your name, contact details including phone numbers and addresses.</p>

<p>We also collect information about you that is not personal information. For example, we may collect data relating to your activity on our websites (including IP addresses) via tracking technologies such as cookies, or we may collect information from you in response to a survey. We generally use this information to report statistics, analyse trends, administer our services, diagnose problems and target and improve the quality of our products and services. To the extent this information does not constitute personal information, the National Privacy Principles do not apply and we may use this information for any purpose and by any means whatsoever.</p>

<p>We generally advise that you do not publish or communicate personal information, or at least limit the personal information that you publish or communicate, to the public via our services, such as in our classifieds, forums or blogs (Non-Confidential Information). You acknowledge that we cannot control any third party collection or use of your Non-Confidential Information. You agree that we may use and disclose Non-Confidential Information for any purpose and by any means whatsoever.</p>

<p><strong>How we collect it</strong></p>

<p>We may collect your personal information from a variety of sources, including from you, advertisers, mailing lists, recruitment agencies, contractors and business partners. We may collect your personal information when you request or acquire a product or service from us, register with us as a member, provide a product or service to us, complete a survey or questionnaire, enter a competition or event, contribute in a fundraising event, participate in our services (including our blogs and forums) or when you communicate with us by email, telephone or in writing (for example if you contact us to make a complaint or provide feedback).</p>

<p>If, at any time, you provide personal or other information about someone other than yourself, you warrant that you have that person&rsquo;s consent to provide such information for the purpose specified.</p>

<p><strong>Why we collect it</strong></p>

<p>The primary purpose for which we collect information about you is to provide you with products and services you have requested. We also collect information about you for the purposes outlined below.</p>

<p>We may state a more specific purpose at the point we collect your information.</p>

<p>If you do not provide us with the information that we request, we may not be able to provide you with our products or services. For example, if you do not register as a member of a website, you will not be able to access features or services that are reserved for members only.</p>

<p><strong>How we use it</strong></p>

<p>In addition to the primary purpose outlined above, we may use the personal information we collect, and you consent to us using your personal information:</p>

<p>to provide you with news and information about our products and services;</p>

<p>to send marketing and promotional material that we believe you may be interested in. This material may relate to any of our businesses or a third party business which we believe may be of interest to you;</p>

<p>to personalise and customise your experiences;</p>

<p>to manage and enhance our products and services;</p>

<p>to communicate with you, including by email, mail or telephone;</p>

<p>to conduct competitions or promotions on behalf of us and selected third parties;</p>

<p>to verify your identity;</p>

<p>to investigate any complaints about or made by you, or if we have reason to suspect that you are in breach of any of our terms and conditions or that you are or have been otherwise engaged in any unlawful activity; and/or</p>

<p>as required or permitted by any law (including the Privacy Act).</p>

<p><strong>How we disclose it</strong></p>

<p>We may disclose personal information, and you consent to us disclosing your personal information, to other members of the our group (in which case, your personal information will be collected, used, disclosed, managed and stored in accordance with this policy).</p>

<p>We may also disclose personal information, and you consent to us disclosing your personal information, to third parties:</p>

<p>engaged by us to perform functions or provide products and services on our behalf, such as newsagents, mailouts, marketing, research and advertising;</p>

<p>that are our agents, business partners or joint venture entities or partners;</p>

<p>that sponsor or promote any competition that we conduct or promote via our services;</p>

<p>authorised by you to receive information held by us;</p>

<p>as part of any investigation into you or your activity, for example, if we have reason to suspect that you have committed a breach of any of our terms and conditions, or have otherwise been engaged in any unlawful activity, and we reasonably believe that disclosure is necessary to the Police, any relevant authority or enforcement body, or your Internet Service Provider or network administrator;</p>

<p>as required or permitted by any law (including the Privacy Act).</p>

<p><strong>Opting in or out</strong></p>

<p>At the point we collect information from you, you may be asked to &ldquo;opt in&rdquo; to consent to us using or disclosing your personal information other than in accordance with this policy or any applicable law. For example, you may be asked to opt-in to receive further information or communications from our advertisers and supporters which do not fall into one of the categories described above.</p>

<p>You will generally be given the opportunity to &ldquo;opt out&rdquo; from receiving communications from us or from third parties that send communications to you in accordance with this policy. For example, you will be given the option to unsubscribe from e-newsletters and other marketing or promotional material sent by us. You may &ldquo;opt out&rdquo; from receiving these communications by clicking on an unsubscribe link.</p>

<p>If you receive communications purporting to be connected with us or our services that you believe have been sent to you other than in accordance with this policy, or in breach of any law, please write to us using this form.</p>

<p><strong>Management and security</strong></p>

<p>Other than in relation to Non-Confidential Information, we will take all reasonable steps to protect the personal information that we hold from misuse, loss, or unauthorised access, including by means of firewalls, and password access.</p>

<p>However, you acknowledge that the security of online transactions and the security of communications sent by electronic means or by post cannot be guaranteed. You provide information to us via the internet or by post at your own risk. We cannot accept responsibility for misuse or loss of, or unauthorised access to, your personal information where the security of information is not within our control.</p>

<p>You acknowledge that we are not responsible for the privacy or security practices of any third party (including third parties that we are permitted to disclose your personal information to in accordance with this policy or any applicable laws). The collection and use of your information by such third party/parties may be subject to separate privacy and security policies.</p>

<p>If you suspect any misuse or loss of, or unauthorised access to, your personal information, please let us know immediately.</p>

<p><strong>Accessing and updating your information and how to contact us</strong></p>

<p>Subject to some exceptions in the Privacy Act, you have the right to seek access to and update the personal information we hold about you. If you make an access request, we will ask you to verify your identity. We may charge a fee to cover the costs of meeting your request.</p>

<p>Members of our websites will generally be able to access and update their membership details online.</p>

<p>We request that you keep your information as current as possible so that we may continue to improve our service to you.</p>

<p>If you would like to seek access to personal information we hold about you, or if you have any questions or complaints about how we collect, use, disclose, manage or store your personal information, you can contact the department that collected your personal information in the first instance, or write to: Website Privacy Officer</p>

<p><strong>IANS India Pvt Ltd</strong><br />` }} />
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

export default Privacy