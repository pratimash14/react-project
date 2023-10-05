import Footer from './Footer'
import Header from './Header'
import React,{useState, useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import New from './New';
import {Helmet} from "react-helmet";

const Terms = () =>{
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
    <title>khabarfilmy.in -{'TERMS AND CONDITIONS'}</title>
    <meta name="keywords" content={'TERMS AND CONDITIONS'} />
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
                        <h1>{'TERMS AND CONDITIONS'}</h1>
                        
                        <div dangerouslySetInnerHTML={{ __html:  `
<h4>INTRODUCTION</h4>

<p>These Terms of Use govern your use of the website &quot;www.ians.in/&quot; (&quot;Website&quot;) and all such online services provided by INDO-ASIAN NEWS SERVICE PVT. LTD (&quot;IANS&quot;) through its website and unless other terms and conditions expressly govern, any other electronic/online services provided by IANS that may be available from time to time (hereinafter collectively referred to as &quot;Services&quot;). The term &ldquo;you&rdquo; or &ldquo;your&rdquo;, being used interchangeably, refers to the user or viewer of the Website / Services. These terms shall apply mutatis mutandis to the mobile versions or the versions of the Websites or Services provided by any IANS applications, including any upgrades, new versions, new features and new releases.</p>

<h4>AGREEMENT</h4>

<p>By using the Website or Services, you agree to comply and be bound by these Terms of Use as well as by the applicable laws and regulations, in force or as may be notified from time to time. In case you do not accept these Terms of Use, you are directed to discontinue with the use of the service. You are advised to check this page periodically for any changes or modifications to the Terms of Use. You agree that you are at least 18 years of age, or the age of majority in your jurisdiction, or if you are a minor, you are viewing the Website with the permission and under the supervision of your parent or local guardian, who assume responsibility for you.</p>

<p>These terms of use (Terms) constitute a legally binding agreement between you and the Company regarding your use of the web site(the Site) and any services offered by the company including but not limited to delivery of content via the Site, any mobile or internet connected device or otherwise (the &quot;the Service&quot;). By accessing the Site or Service and/or by clicking &quot;I agree&quot;, you agree to be bound by these Terms. IANS reserves the right to change, modify, add, or remove portions of the Terms of Use at any time. Your use of any of the Services, following any changes or modifications made by IANS, shall constitute your acceptance to such changes or modification.</p>

<p>You hereby represent and warrant to the Company that you are at least eighteen (18) years of age or above and are capable of entering, performing and adhering to these Terms and that you agree to be bound by the following terms and conditions. While individuals under the age of 18 may utilize the Service of the site, they shall do so only with the involvement &amp; guidance of their parents and / or legal guardians, under such Parent /Legal guardian&rsquo;s registered account . You agree to register prior to uploading any content and / or comment and any other use or services of this site and provide your details including but not limited to complete name, age, email address, contact number. If you are using the IANS application, you consent to IANS automatically upgrading and updating the data and software thereof.</p>

<p>Definition of &quot;User&quot; or &quot;You&quot;: means any person who accesses or avails this site of the Company for the purpose of hosting, publishing, sharing, transacting, displaying or uploading information or views and includes other persons jointly participating in using the site of the Company.</p>

<p>IANS may add to or change or update these Terms of Use, from time to time entirely at its own discretion. You are responsible for checking these Terms of Use periodically to remain in compliance with these terms. Your use of a Site after any amendment to the Terms of Use shall constitute your acceptance of these terms and you also agree to be bound by any such changes/revisions.</p>

<p>IANS may add to or change or update these Terms of Use, from time to time entirely at its own discretion. You are responsible for checking these Terms of Use periodically to remain in compliance with these terms. Your use of a Site after any amendment to the Terms of Use shall constitute your acceptance of these terms and you also agree to be bound by any such changes/revisions.</p>

<h4>OWNERSHIP OF CONTENT</h4>

<p>The content includes articles, other text, photographs, images, illustrations, graphics, video material, audio material, including musical compositions and sound recordings, logos, works of authorship, proprietary software, data, reports, information, images, sound, organization, graphics, design, compilation (meaning the collection, arrangement and assembly of all Content) and other matters related to the website or in relation to the Services and other material owned by IANS and/or its third party content providers (&quot;Third Party Content Providers&quot;), so applicable. Unless otherwise indicated, any new Content or Products and Services added to the Website will also be subject to the Terms of Use Agreement effective upon the date of any such addition.</p>

<h4>COPYRIGHTS AND TRADEMARKS</h4>

<p>The Website / Services may contain trademarks or service marks of IANS or that of their respective owners (the &quot;Marks&quot;). The domain name for the Website, including, without limitation, IANS IANS.IN, IANSHINDI.IN, INDO-ASIAN NEWS SERVICE PVT. LTD, are service marks, trademarks, logos, and/or trade dress of IANS. All other trademarks, service marks, trade dress, product names, company names or logos, whether registered or not, on the Website are the property of IANS or their respective owners.</p>

<p>The Website/ Service contains trademark and service marks of IANS. The Domain name for the Website, including, without limitation, IANS, IANS.IN, IANSHINDI.IN, INDO-ASIAN NEWS SERVICE PVT. LTD, are service marks, trademarks, logos, and/or trade dress of IANS. All other trademarks, service marks, trade dress, product names, company names or logos on the Website are the property of IANS in agreement with the respective owners.</p>

<p>The Content is protected by international copyright, trademark and other intellectual property laws. Unauthorized use of the Content shall amount to violation of the copyright, trademark, and other laws, which shall compel IANS to take legal recourse against such unauthorised use.</p>

<p>You do not acquire ownership rights to any content, document or other materials viewed through the Site. The posting of information or materials on the Site does not constitute a waiver of any right in such information and materials. Some of the Content on the site is the copyrighted work of third party content providers.</p>

<h4>FAIR USE AND WARRANTIES</h4>

<p>All content on the site is provided to the &ldquo; USER&rdquo; without warranty of any kind either express or implied including, but not limited to, the implied warranties of merchantability &amp; fitness for a particular purpose, title, non- infringement, security or accuracy. IANS does not endorse &amp; is not responsible for the accuracy or reliability of any opinion, advice or statement made through the site by any party other than IANS under applicable law.</p>

<p>Under no circumstance will the IANS be liable for any loss or damage caused by a user&rsquo;s reliance on information obtained through the site. It is the Responsibility of the User to evaluate the accuracy, completeness or usefulness of any opinion, advice or other content available on/through the site. Please seek the advice of professionals, as appropriate, regarding the evaluation of any specific opinion, advice or other content.</p>

<h4>THIRD PARTY CONTENT</h4>

<p>IANS does not knowingly or unknowingly accept unsolicited submissions including, without limitation, submissions of scripts, story lines, articles, fan fiction, characters, drawings, information, suggestions, ideas or concepts. IAN&#39;s policy is to simply delete any such submission, without reading it or even forwarding it to other staff. Therefore, any similarity between an unsolicited submission and any elements in any creative work, including, without limitation, a film, series, story, title or concept would be purely coincidental. Third party content may appear on the website or may be accessible via links from the website. IANS is not responsible for and assumes no liability for any mistakes, misstatements, defamation, omissions, falsehood, obscenity, or profanity in the statements, opinions, representations or any other form of Content on the Website. You understand that the information and opinions in third party content represent solely the thoughts of the author / third party content provider and are neither endorsed by, nor does it reflect the beliefs of IANS. Any dealings between you and a Third Party, be it an advertiser or another user, is purely at your own risk and IANS will accept no liability for the same.</p>

<h4>ERROR, CORRECTIONS and CHANGES</h4>

<p>IANS may make changes to the features, functionality or content of the Website at any time. We reserve the right in our sole discretion to edit or delete any documents, information or other content appearing on the website. IANS shall have the right to update information available on or through the website. The Information available with the latest update to be correct , accurate, timely and reliable. IANS does not represent or warrant that the Site will be free of viruses or other technical defects, which is subjected to correction with time.</p>

<p>You may use the Website or the Services only for your internal, personal and non-commercial purposes. Except as otherwise expressly stated herein, you shall not, for compensation of otherwise, alter, modify, copy, distribute, transmit, display, perform, reproduce, reuse, post, publish, license, frame, download, store for subsequent use, create derivative works from, transfer, or sell any information or Content obtained from the Website, in whole or in part, including any text, images, audio, and video in any manner, without the prior written authorization of IANS or any applicable third party suppliers. Your use of the Content, including any images, or use by anyone else authorized by you, is prohibited unless specifically permitted by IANS. Any unauthorized use of text or images shall amount to violation of copyright laws, trademark laws, the laws of privacy and publicity, and applicable regulations and statutes. The use of the Content on any other website or in a networked computer environment for any purpose is prohibited except as specified in these Terms of Use. Each Third Party Content Provider is a beneficiary hereunder to the extent necessary to enforce its proprietary rights in their Content. Requests for permission to reproduce or distribute materials found on this Site can be made by contacting IANS in writing at:</p>

<p>IANS India Pvt. Ltd.<br />
A-6, A Block<br />
Sector-16,<br />
Noida-201301 U.P.<br />
&nbsp;+91-120-4822400<br />
&nbsp;+91-9311830312 (Editorial) / +91-9999617238 (Reporting)<br />
&nbsp;<a href="mailto:info@ians.in">info@ians.in</a>,<a href="mailto:support@ians.in">&nbsp;support@ians.in</a>,&nbsp;<a href="mailto:feedback@ians.in">feedback@ians.in</a></p>

<h4>PROHIBITIONS ON USE</h4>

<p>Your access and use of the Website / Services and any content therein are subject to, inter alia, the following restrictions and prohibitions on use: You may not</p>

<p>(a) copy, print (except for the express limited purpose permitted by aforementioned clause), republish, display, distribute, transmit, sell, rent, lease, loan or otherwise make available in any form or by any means all or any portion of the website or any content and materials retrieved from it;</p>

<p>(b) use the Site or any materials obtained from the Website to develop, of as a component of, any information, storage and retrieval system, database, information base, or similar resource (in any media now existing or hereafter developed), that is offered for commercial distribution of any kind, including through sale, license, lease, rental, subscription, or any other commercial distribution mechanism;</p>

<p>(c) create compilations or derivative works of any Content and Materials from the website;</p>

<p>(d) use any Content from the Site in any manner that may infringe any copyright, intellectual property right, proprietary right, or property right of us or any third parties;</p>

<p>(e) remove, change or obscure any copyright notice or other proprietary notice or Terms of Use contained in the Website;</p>

<p>(f) make any portion of the Website available through any time sharing system, service bureau, the Internet or any other technology now existing or developed in the future;</p>

<p>(g) remove, decompile, disassemble or reverse engineer any software or use any network monitoring or discovery software to determine the website architecture;</p>

<p>(h) use any automatic or manual process to harvest information from the website; and</p>

<p>(i) use the Site in a manner that violates any law and Third-Party Services /Links to other Websites.</p>

<h4>ONLINE PAYMENT</h4>

<p>ONLINE PAYMENT BY USER/CUSTOMER IS SUBJECT TO THE ACCEPTANCE OF THE FOLLOWING TERMS AND CONDITIONS</p>

<p>This online payment system is provided by THG PUBLISHING PRIVATE LIMITED ( MERCHANT). The terms and conditions shall be amended, changed and/or modified from time to time by the MERCHANT and any such amendments/modifications/ changes shall be effective forthwith.</p>

<h4>TERMS &amp; CONDITIONS</h4>

<p>Please read these terms carefully before using the online payment facility for the Products and/or Services of MERCHANT. Using the online payment facility on this website indicates that you accept these terms and conditions. If you do not accept these terms do not use this facility.</p>

<p>All payments are subject to the following conditions:-</p>

<p>The Product and Services are as described in thehindu.com website, under various sections. Please read carefully the description of the product/service before proceeding with payment.</p>

<p>Payment shall be made in advance for the Products and Services.</p>

<p>All prices quoted are in Indian Rupees, unless explicitly stated otherwise. The MERCHANT reserves the right to change the prices at any time.</p>

<p>Your payment will normally reach the MERCHANT account to which you are making a payment within two working days.</p>

<p>The MERCHANT cannot accept liability for a payment not reaching the MERCHANT account due to you quoting an incorrect account number or incorrect personal details or for any other fault. The Merchant shall not accept liability if payment is refused or declined by the net banking system / credit/debit card supplier for any reason.</p>

<p>If the card supplier declines payment the MERCHANT is under no obligation to bring this fact to your notice. You should check with your bank/credit/debit card supplier that payment has been deducted from your account and reached the MERCHANT.</p>

<p>In no event , the MERCHANT shall be liable for any loss, damages, compensation whatsoever arising out of the use, inability to use, or the results of use of this site, any websites linked to this site, or the materials or information contained at any or all such sites, whether based on warranty, contract, tort or any other legal theory and whether or not advised of the possibility of such damages.</p>

<p><strong>Refunds</strong></p>

<p>Refunds, if applicable, at the discretion of the MERCHANT and shall be made only to the netbanking account/debit/credit card used for the original transaction. For the avoidance of doubt nothing in this Policy shall require the MERCHANT to refund the Fees (or part thereof) unless such Fees (or part thereof) have previously been credited to the MERCHANT account.</p>

<p><strong>Contact Details:</strong></p>

<p>Email:&nbsp;<a href="mailto:info@ians.in">info@ians.in</a>,<a href="mailto:support@ians.in">&nbsp;support@ians.in</a>,&nbsp;<a href="mailto:feedback@ians.in">feedback@ians.in</a></p>

<p>Any matter, dispute, resolution on the presents are subject to the exclusive jurisdiction of DELHI Court only.</p>

<h4>NEWSWIRE CONTENT</h4>

<p>IANS INDIA PRIVATE LIMITED is the sole and absolute owner of the Newswire Content</p>

<h4>TERMS &amp; CONDITIONS</h4>

<p><strong>SUBSCRIPTION</strong></p>

<p>1.1. Newswire Content provides a subscription that allows our subscribers to access content (&ldquo;Newswire Content&rdquo;) over the Internet to certain mobile phones, computers and other devices (&quot;Newswire Content ready devices&quot;). By subscribing to the Newswire Content, you deem to accept the Terms &amp; Conditions.</p>

<p>1.2. These Terms of Use govern your use of our service. As used in these Terms of Use, &quot;Newswire Content service&quot;, &quot;our service&quot; or &quot;the service&quot; means the service provided by Newswire Content for discovering and watching Newswire Content content, including all features and functionalities, as well as all content and software associated with our service.</p>

<p>1.3. Your Newswire Content subscription will continue by itself until terminated. To use the Newswire Content service you must have Internet access and a Newswire Content ready device, and provide a current, valid, accepted method of payment, which you may update from time to time (&quot;Payment Method&quot;). Unless you cancel your subscription before your billing date, you authorize us to charge your next month&#39;s subscription fee to your Payment Method (see &quot;Cancellation&quot; below).</p>

<p><strong>Free Trials</strong></p>

<p>2.1. Your Newswire Content subscription may start with a free trial. The free trial period of your subscription lasts for one month, or as otherwise specified during sign-up and is intended to allow new subscribers and certain former subscribers to try the service.</p>

<p>2.2. Free trial eligibility is determined by Newswire Content at its sole discretion and we may limit eligibility to prevent free trial abuse. We reserve the right to revoke the free trial and put your account on hold in the event that we determine that you are not eligible at our discretion without assigning any reason. We may use information such as device ID, method of payment or an account email address used with an existing or recent Newswire Content subscription to determine eligibility.</p>

<p>2.3. We will charge your Payment Method for your monthly subscription fee at the end of the free trial period unless you cancel your subscription prior to the end of the free trial period. To view the monthly subscription price and end date of your free trial period, visit our website and click the &quot;Billing details&quot; link on the &quot;Your Account&quot; page.</p>

<p><strong>Billing</strong></p>

<p>3.1. Billing Cycle. The subscription fee for the Newswire Content service and any other charges you may incur in connection with your use of the service, such as taxes and possible transaction fees, will be charged on a monthly basis to your Payment Method on the calendar day corresponding to the commencement of the paying portion of your subscription. In some cases your payment date may change, for example if your Payment Method has not successfully settled or if your paid subscription began on a day not contained in a given month.</p>

<p>3.2. Payment Methods. You cannot change your Payment Method during the tenure of your Subscription. If your selected Payment Method is no longer available or expires or your Payment Method fails for whatsoever reason, you will be responsible and liable for payment of any uncollected amounts and/or we reserves the right to terminate the Subscription offered. For some Payment Methods, the issuer may charge you certain fees, such as foreign transaction fees or other fees relating to the processing of your Payment Method. Local tax charges may vary depending on the Payment Method used. Check with your Payment Method service provider for details.</p>

<p>3.3. Cancellation. You can cancel your Newswire Content subscription at any time, and you will continue to have access to the Newswire Content service through the end of your monthly billing period. To the extent permitted by the applicable law, payments are non-refundable and we do not provide refunds or credits for any partial-month subscription periods or unwatched Newswire Content content. To cancel, go to the &quot;Cancel Subscription&quot; page and follow the instructions for cancellation. If you cancel your subscription, your account will automatically close at the end of your current billing period. If you signed up for Newswire Content using your account with a third party as a Payment Method and wish to cancel your Newswire Content subscription, you may need to do so through such third party, for example by visiting your account with the applicable third party and turning off auto-renew, or unsubscribing from the Newswire Content service through that third party. You may also find billing information about your Newswire Content subscription by visiting your account with the applicable third party.</p>

<p>3.4. Changes to the Price and Service Plans. We may change our service plans and the price of our service from time to time; however, any price changes or changes to our service plans will apply to you no earlier than 30 days following such change.</p>

<p><strong>Termination</strong></p>

<p>We reserve the right to discontinue the service at our discretion and convenience. By Using our platform or registration for our service, you agree to our terms and conditions at your sole risk and responsibility</p>

<p><strong>Third-Party Services / Links to other Web Sites</strong></p>

<p>The Website contains links to other sites. IANS is not responsible for the content, accuracy or opinions expressed on such sites, and such sites are not investigated, monitored or checked for accuracy or completeness or any compliance with law by IANS. Inclusion of any linked site on the IANS website does not imply approval or endorsement of the linked site by IANS. If you decide to leave the Website and access such third-party sites, you do so at your own risk.</p>

<h4>ADVERTISEMENTS BY THIRD PARTY SERVICE PROVIDERS</h4>

<p>The Website may contain advertisements and / or sponsorships. You understand that Advertisers and sponsors are solely responsible for ensuring that any content or material submitted for inclusion on the Website is accurate and complies with applicable laws. IANS is not responsible for the illegality or any error, inaccuracy or problem in the advertiser&#39;s or sponsor&#39;s materials. IANS may allow access to or advertise certain third-party product or service providers (&ldquo;Third Party Service Providers&rdquo;) to provide certain services (&ldquo;links&rdquo;) on the website. You understand that IANS does not operate or control the products or services offered by such service providers. These Third Party Service Providers / links are responsible for all aspects of order processing, fulfillment, billing and customer service. IANS is not a party to the transactions entered into between you and such Third Party Service Providers / links. You agree that use of or purchase from such Third Party Service Provider&rsquo;s / Links is at your sole risk and is without warranties of any kind by IANS, expressed, implied or otherwise including warranties of title, fitness for purpose, or non-infringement. Under no circumstances will IANS be held liable for any damages arising from the transactions between you and such Third Party Service Providers / links or for any information appearing on Third Party Service Providers&rsquo; websites or any other site linked to IANS&rsquo;s website. All rules, policies (including privacy policies) and operating procedures of such Third Party Service Providers will apply to you while accessing any such Links. IANS is not responsible for information provided by you to such Third Party Service Providers / Links. You understand that IANS and such Third Party Service Providers are independent contractors and neither party has authority to make any representations or commitments on behalf of the other.</p>

<p><strong>Indemnification</strong></p>

<p>You agree to indemnify, defend and hold IANS, its partners, agents, officers, directors, employees, subcontractors, successors, assigns, third party suppliers of information and documents, advertisers, product and service providers, and affiliates (collectively, &ldquo;Affiliated Parties&rdquo;) harmless from any liability, loss, claim and expense related to your violation/breach of this Agreement or use of the Website including reasonable attorneys&rsquo; fees, arising out of (i) the information or material you submit or comment, including, but not limited to, liability for violations of copyrights, trademark rights, trade secret rights, or any other intellectual property rights, or the privacy or publicity rights of others, or liability for information or material you provide that is obscene, defamatory, threatening, harassing, abusive, hateful or embarrassing to any other person or entity, or is fraudulent or deceptive, (ii) your use or unauthorized copying or use of the Services or any of their content, (iii) your sharing of any of the Content through any medium or (iv) your violation of the Terms of Use or any applicable laws or regulations.</p>

<p><strong>Limitation of Liability</strong></p>

<p>For information obtained from Third Party Content Providers, you are solely responsible for compliance with copyright, trademark and other proprietary rights and restrictions and are referred to publication data appearing in bibliographic citations, as well as to the copyright notices appearing in the original publications. Your use and browsing of the Website is at your own risk. If you are dissatisfied with any of the Materials contained in the Website, or with any of these Terms of Service, your sole and exclusive remedy is to discontinue accessing and using the Website. While IANS does its best to ensure the optimal performance of the Website, you agree that you use this Website and rely on material contained in this Website at your own risk.</p>

<p>IN NO EVENT SHALL IANS, ITS DIRECTORS, OFFICERS, SHAREHOLDERS, PARENTS, SUBSIDIARIES, AFFILIATES, AGENTS AND LICENSORS, OR CONTENT PROVIDERS BE LIABLE FOR ANY INDIRECT, SPECIAL, INCIDENTAL, PUNITIVE, OR CONSEQUENTIAL DAMAGES ARISING OUT OF OR RELATED TO THE USE, INABILITY TO USE, PERFORMANCE OR NONPERFORMANCE OF THE SERVICES, EVEN IF IANS WAS PREVIOUSLY ADVISED OF THE POSSIBILITY OF SUCH DAMAGES AND REGARDLESS OF WHETHER SUCH DAMAGES ARISE IN CONTRACT, TORT, UNDER STATUTE, IN EQUITY, AT LAW, OR OTHERWISE. IANS and any Affiliated Party shall not be liable for any loss, injury, claim, liability, or damage of any kind resulting in any way from (1) any errors in or omissions from the website or any services or products obtainable there from, (2) the unavailability or interruption of the website or any features thereof, (3) your use of the Site, (4) the content contained on the Site, or (5) any delay or failure in performance beyond the control of IANS or any Affiliated Party.</p>

<p><strong>Monitoring</strong></p>

<p>IANS shall have the right, but not the obligation, to monitor the content of IANS, to determine compliance with this Agreement and any operating rules established by IANS and to satisfy any law, regulation or authorized government request. IANS shall have the right in its sole discretion to edit, refuse to post or remove any material submitted to or posted on IANS. Without limiting the foregoing, IANS shall have the right to remove any material that IANS, in its sole discretion, finds to be in violation of the provisions hereof or otherwise objectionable.</p>

<p><strong>Copyrights</strong></p>

<p>IANS respects the rights of all copyright holders and in this regard, IANS has adopted and implemented a policy that provides for the termination, in appropriate circumstances, of subscribers and account holders who infringe the rights of copyright holders. If you believe that your work has been copied in a way that constitutes copyright infringement, please provide IANS with the following information:</p>

<p>1) A physical or electronic signature of a person authorized to act on behalf of the owner of an exclusive right that is allegedly infringed;</p>

<p>2) Identification of the copyright work claimed to have been infringed, or, if multiple copyrighted works at a single online website are covered by a single notification, a representative list of such works at that site;</p>

<p>3) Identification of the material that is claimed to be infringing or to be the subject of infringing activity and that is to be removed or access to which is to be disabled, and information reasonably sufficient to permit us to locate the material</p>

<p>4) Information reasonably sufficient to permit us to contact the complaining party;</p>

<p>5) A statement that the complaining party has a good-faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law; and</p>

<p>6) A statement that the information in the notification is accurate, and under penalty of law, that the complaining party is authorized to act on behalf of the owner of an exclusive right that is allegedly infringed. IAN&#39;s Agent for notice of claims of Copyright or other Intellectual Property infringement can be reached as follows:-</p>

<p>IANS India Pvt. Ltd.<br />
A-6, A Block<br />
Sector-16,<br />
Noida-201301 U.P.<br />
&nbsp;+91-120-4822400<br />
&nbsp;+91-9311830312 (Editorial) / +91-9999617238 (Reporting)<br />
&nbsp;<a href="mailto:info@ians.in">info@ians.in</a>,<a href="mailto:support@ians.in">&nbsp;support@ians.in</a>,&nbsp;<a href="mailto:feedback@ians.in">feedback@ians.in</a></p>

<p><strong>Termination</strong></p>

<p>You agree that IANS, in its sole discretion, may terminate your access to the Website / Services, and remove and discard any content that you have posted on the website, for any reason, including, without limitation, for lack of use or if IANS, in its sole opinion, believes that you have violated or acted inconsistently with the Terms of Use of this Agreement or that you are a repeat infringer of intellectual property rights. You agree that any termination of your access to the Website under any provision of this Agreement may be effected without prior notice, and acknowledge and agree that IANS may immediately bar any further access to the website. Further, you agree that IANS shall not be liable to you or any third-party for any termination of your access to the Website.</p>

<p><strong>Governing Law</strong></p>

<p>The Terms of Use are governed by the laws of India and the Courts at Delhi shall have the exclusive jurisdiction over any dispute arising out of the Terms of use, without giving recourse to any principles of conflicts of laws.</p>

<p>Additional Terms of use for IANS Digital Subscription</p>

<p>By accessing the website at www.IANS.in (&quot;the Site&quot;) or by otherwise accessing any content found on the website of IANS India Private Limited, you are entering into an agreement with IANS and agree to the terms that follow (the &quot;Terms&quot;). Please review our Privacy Policy to learn more about how we use any information you provide about yourself.</p>

<p><strong>Registration, Passwords and Responsibilities</strong></p>

<ul>
<li>Your email address and password are personal to you and may not be used by anyone else to access &ldquo;ians.in/&rdquo; IANS India Private Limited assumes that by signing up you are of a minimum of 18 years of age or above and if you are not, you have signed up with the guidance and permission of your guardian. If not, the responsibility will be borne by the guardian of the minor or the minor, as the case may be.</li>
<li>You will not do anything which would assist anyone who is not a registered user to gain unauthorised access to registration or subscription.</li>
<li>You do not maliciously create additional registration accounts for the purpose of abusing the functionality of the site, or other users; nor do you seek to pass yourself off as another user.</li>
<li>You comply with these terms and conditions. If, for any reason, IANS India Limited believes that you have not complied with these requirements, IANS may at our discretion, cancel your access to the registration areas of ians.in/ and without giving you any advance notice.</li>
</ul>

<p><strong>You are responsible for keeping your information and passwords up to date and confidential.</strong></p>

<p>Certain features of the Site may be open to registered users or subscribers only. By signing up on the Site and subscribing, you become a &ldquo;Registered User&rdquo;. Even if you are not subscribing, you still will become a &ldquo;Registered User&rdquo;. Being a Registered User shall entitle you to (i) Push Notifications (ii) Newsletters (iii) One-time Free Trial with full access to all premium features (iv) Any other Content which IANS India Private Limited determines shall be part of the benefits of being a Registered User from time to time. IANS India Private Limited reserves the right to amend or vary IANS India Limited Content available to Registered Users from time to time.</p>

<p>You are solely responsible for the confidentiality and use of and access to Content and the Site using your user name and/or password. You agree to immediately notify IANS India Limited if you become aware of the loss, theft or unauthorised use of any password, user ID or e-mail address or of any Content. You will provide IANS India Private Limited with accurate, complete registration information and inform IANS India Private Limited of any changes to such information. For the purpose of confirming your compliance with these Terms, IANS India Private Limited reserves the right to monitor and record activity on the Site, including access to Content. Each registration and subscription is for the personal use of the Registered User or subscriber only. You may not share your log-in details or password with any other person. You may not share or transfer your subscription with any one. IANS India Private Limited does not allow multiple users (networked or otherwise) to access the Site through a single name and password and may cancel or suspend your access to the Site if you do this, or breach any of these Terms without further obligation to you.</p>

<p><strong>Subscription and Cancellation</strong></p>

<p>IANS India Private Limited reserves the right to vary the amount of content and types of service that it makes available to different categories of users at any time, including without limitation to Registered Users.</p>

<p>&bull; IANS provides a subscription that allows our subscribers to access content (&ldquo;IANS Content&rdquo;) over the Internet to certain mobile phones, computers and other devices. By subscribing to the IANS, you deem to accept the Terms &amp; Conditions.</p>

<p><strong>Free Trials:</strong></p>

<ul>
<li>Our IANS subscription may start with a free trial. The free trial period of your subscription specified during sign-up is intended to allow subscribers to try the service.</li>
<li>Free trial eligibility is determined by IANS at its sole discretion and we may limit eligibility to prevent free trial abuse. We reserve the right to revoke the free trial and put your account on hold in the event that we determine that you are not eligible at our discretion without assigning any reason. We may use information such as device ID, method of payment or an account email address used with an existing or recent IANS subscription to determine eligibility.</li>
</ul>

<p><strong>Renewal</strong></p>

<p>Unless specifically stated in any Subscription offer or promotion when you place your Subscription order with IANS India Private Limited. IANS India Private Limited will contact you at the end of the initial subscription period with an offer to renew your subscription at the then prevailing renewal rate, which may be changed from time to time.</p>

<p><strong>Cancellation</strong></p>

<p>To cancel your subscription, please write to info@ians.in. No refund is applicable after 7 days from the day of purchasing the product.</p>

<p><strong>Contract and Disputes</strong></p>

<p>IANS India Private Limited shall provide your Subscription in accordance with these Terms (and the terms of any offer or promotion that may apply to your Subscription). As further detailed above you have legal rights with regards to your subscription including the right to cancel. Should you have any queries please contact us at info@ians.in</p>

<p><strong>Fees and Payments</strong></p>

<p>You are responsible for any fees that are payable including any processing or other fees charged by the issuing bank/payment provider.</p>

<p>The price to be paid for your Subscription will be made clear to you on the Subscription order pages or otherwise during the order process and may vary from time to time. You agree to pay the fees at the rates notified to you at the time you purchase your Subscription together with any processing or other associated fees charged by the issuing bank/payment provider. Eligibility for any discounts if applicable is ascertained at the time you subscribe and cannot be changed during the term of your Subscription. All payments from outside India (including any applicable taxes) must be made in US Dollars. If we find out that you are from outside India and are transacting in INR, your account will be suspended. You are responsible for the payment of all charges associated with the use, by you or someone else, of the Site using your ID. When you purchase a Subscription or access to any other Content owned by IANS, you must provide IANS India Private Limited with complete and accurate payment information. By submitting payment details you confirm that you are entitled to use those payment details for this purpose. If IANS India Private Limited does not receive payment authorisation or any authorisation is subsequently cancelled, IANS India Private Limited may immediately terminate or suspend your access to your Subscription or The Hindu Content and in suspicious circumstances we may contact the issuing bank/payment provider and/or law enforcement authorities.</p>

<p><strong>Liability and Indemnity</strong></p>

<p>All The Content and services are provided &#39;as is&#39;. You indemnify us for breaches of these Terms.</p>

<p>Although we endeavour to ensure the high quality and accuracy of the Site and IANS India Private Limited makes no warranty, express or implied concerning The Content, the Site or any software that are made available through the Site (the &quot; Services&quot;), which are provided &quot;as is&quot;. IANS India Private Limited expressly disclaims all warranties, including but not limited to warranties of fitness for a particular purpose and warranties of merchantability. In no event will IANS India Private Limited, its affiliates, agents, suppliers or licensors be liable for indirect, special, incidental, and/or consequential damages (including, without limitation, damages for loss of business profits, business interruption, loss of business information or other pecuniary loss) that may arise directly or indirectly from the use of (or failure to use) or reliance on the Services, even if IANS India Private Limited has been advised of the possibility that such damages may arise. IANS India Private Limited does not guarantee the accuracy, content, or timeliness of the Services or that they are free from viruses or other contaminating or destructive properties. In no event will any liability of IANS India Private Limited or its affiliates, agents, suppliers and licensors to you that may arise out of any kind of legal claim (whether in contract, tort, or otherwise) in any way connected with the Services or in breach of these Terms by IANS India Private Limited exceed the amount, if any, paid by you to IANS India Private Limited for the particular Service to which the claim relates. Upon IANS India Private Limited&#39;s request, you agree to defend, indemnify and hold harmless IANS India Private Limited, its affiliates, agents, suppliers and licensors from any claims and expenses, including reasonable legal fees, related to any breach of these Terms by you or your use of any Services.</p>

<p><strong>Force Majeure</strong></p>

<p><strong>IANS India Private Limited will not be held responsible for circumstances beyond its control.</strong></p>

<p>IANS India Private Limited, its affiliates and its information providers will not be liable or deemed to be in default for any delay or failure in performance or interruption of the delivery of IANS India Private Limited Content that may result directly or indirectly from any cause or circumstance beyond its or their reasonable control, including but not limited to failure of electronic or mechanical equipment or communication lines, telephone or other interconnect problems, computer viruses, unauthorised access, theft, operator errors, severe weather, earthquakes or natural disasters, strikes or other labour problems, wars, or governmental restrictions.</p>

<p><strong>Miscellaneous</strong></p>

<p><strong>Additional Terms apply to your use of Content.</strong></p>

<p><strong>Changes to these Terms.&nbsp;</strong>IANS India Private Limited may, in its discretion, change these Terms (including those that relate to your use of the Site. Whenever the Terms are changed, IANS India Private Limited will notify you by e-mail or by publishing the revised terms on the website. If you use the Site after IANS India Private Limited has published or notified you of the changes, you are agreeing to be bound by those changes. If you do not agree to be bound by those changes, you should not use the Site anymore after they are published. Access to certain IANS India Private Limited Content may be subject to additional terms and conditions.</p>

<p><strong>Assignment of Agreement.</strong>&nbsp;This agreement is personal to you and your rights and obligations under these Terms may not be assigned, sub-licensed or otherwise transferred. This agreement may be assigned to a third party by IANS India Private Limited.</p>

<p><strong>Non-Waiver.</strong>&nbsp;No delay or omission on the part of either party in requiring performance by the other party of its obligations will operate as a waiver of any right.</p>

<p><strong>Notices.</strong>Notices to IANS India Private Limited must be given in writing, by letter, and sent to IANS India Pvt. Ltd. A-6, A Block, Sector-16, Noida-201301 U.P. India.</p>

<p><strong>Severability/Survival/Statute of Limitations.</strong>&nbsp;If any provision of these Terms is invalid or unenforceable, such will not render all the Terms unenforceable or invalid. Rather, the Terms will then be read and construed as if the invalid or unenforceable provision(s) are not contained therein. If you are outside of India, any cause of action of yours with respect to these Terms must be filed in a court of competent jurisdiction.</p>                        
                        ` }} />
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

export default Terms