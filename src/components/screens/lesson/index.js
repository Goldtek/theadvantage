import  React,{ useState, useEffect, Fragment } from 'react';
import { Link,useHistory } from 'react-router-dom';
import { Header, Footer } from '../../custom';
import { auth, firestore } from '../../custom/firebase';
import './lesson.css';

const text = "Lorem Ipsum Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat nunc nec nisi rutrum, sed interdum metus mattis. Vestibulum id felis vulputate, elementum lorem vitae, suscipit eros. Suspendisse vitae pulvinar dolor. Etiam tellus purus, luctus at porttitor nec, bibendum elementum mauris. Aenean ipsum lectus, suscipit nec auctor et, tincidunt vitae justo. Duis gravida velit et dolor eleifend, at pretium nulla cursus. Fusce bibendum, dui in vehicula euismod, odio nulla euismod nulla, sodales volutpat elit libero non odio. Maecenas urna metus, pulvinar ultricies velit a, hendrerit aliquam urna. Praesent molestie diam nec placerat ullamcorper. Mauris facilisis dapibus dolor ut lobortis.Curabitur egestas et libero eu lobortis. Aliquam non enim a magna tincidunt hendrerit quis dignissim lectus. Sed sit amet eleifend orci. Quisque efficitur convallis rutrum. Pellentesque eu elit ac tellus consequat convallis quis convallis risus. Donec mi enim, finibus eu vestibulum cursus, rhoncus eu erat. Suspendisse potenti. Praesent vitae lorem lacus. Quisque mauris ante, commodo blandit vehicula eu, accumsan in elit.Morbi rhoncus fringilla lectus, quis pharetra quam fringilla eu. In ante justo, facilisis ac quam non, tincidunt faucibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mattis non ex a gravida. Suspendisse ultricies mi felis, in posuere felis vehicula at. Mauris commodo vel risus non molestie. Sed a elit sollicitudin, convallis elit in, maximus lectus. Donec at nibh lacus. Nunc eu dignissim leo, ut gravida augue. Pellentesque egestas bibendum nisl luctus mollis. Donec hendrerit massa ac metus faucibus sodales. Vivamus interdum porttitor libero vel vestibulum. Cras ullamcorper sem nec leo consectetur consequat. Quisque leo nibh, rhoncus vitae urna eu, fermentum congue massa.";

function Lesson(){
    const [title,setTitle] = useState(' Discovery Package');
    const [currentUrl, setUrl] = useState('plQwuKzBQiU');
    const [videoDisplay,setVideoDisplay] = useState(true);
    const [content,setContent] = useState('');
    const [screenTitle, setscreenTitle] = useState('');
    const history =  useHistory();

    // useEffect(()=>{
    //     auth.onAuthStateChanged(async (user)=>{
    //         if(!user){
    //             history.push('/');
    //         }
    //     });
    // },[]);

    const handleClick = (urlContent,isVideo) => {
        if (isVideo) {
            setUrl(urlContent);
        } else {
            setContent(urlContent.body);
            setscreenTitle(urlContent.title);
        }
        setVideoDisplay(isVideo);
    }

        
    return(
        <Fragment>
            <Header/>
            <div className="dline1 mb-30"></div>
            <div class="container-fluid mt-30">
                <div class="row affix-row">
                
                    <div class="col-md-9">
                        <div class="vid">
                            {(videoDisplay) ?
                            <iframe width="560" height="315" src={`//www.youtube.com/embed/${currentUrl}`} allowfullscreen=""></iframe>
                                : 
                            <div className='col-md-12 whiteboard'>
                                <h3>{screenTitle}</h3>
                                {content}
                            </div>
                            }

                        </div> 
                        <div className='desc'>
                           <h3>{title}</h3> 
                        </div>  
                        <hr/> 
                        <div className="courses-details-image text-center col-md-5 col-sm-12 col-lg-3">
                        <div className='wrapper'> 
                            <div className='merc-image'><img src='images/author.png' className="rounded-circle round " alt="image"/> </div>
                            <div className='merc'>Yemi Akinwuntan </div>
                         </div>
                               
                                             
                        </div>

                        <div className="courses-details-desc mb-30">
                            <h3>Description</h3>

                            <p className="description-features-list">
                                The Discovery Package is tailored made exclusively for those seeking to discover, define and deploy their purpose.
                                Knowledge, activities and tasks in the Discovery Package will jumpstart your journey to discovery, confidence and beginning steps to fulfilment.
                            </p>  
                        </div>    
                    </div>
                    <div className='col-md-3 fixed'>
                        <div className='topLesson'>Discovery Package</div>
                            <div class="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">

                            <div class="card">

                                <div class="card-header" role="tab" id="headingOne1">
                                <a data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne1" aria-expanded="true"
                                    aria-controls="collapseOne1">
                                    <h5 class="mb-0">
                                    Week 1:	Purpose Discovery <i class="fas fa-angle-down rotate-icon"></i>
                                    </h5>
                                </a>
                                </div>

                                <div id="collapseOne1" class="collapse show" role="tabpanel" aria-labelledby="headingOne1"
                                data-parent="#accordionEx">
                                <div class="card-body">
                                    <ul className='list-group'>
                                        <li className='list-group-item'><button className='btn' onClick={()=>handleClick('plQwuKzBQiU',true)}>Welcome Video </button></li>
                                        <li className='list-group-item'><button className='btn' onClick={()=>handleClick({body:text,title: 'Purpose Discovery'},false)}> Purpose Discovery </button></li>
                                    </ul>
                                </div>
                                </div>

                            </div>
                   
                            <div class="card">

                                <div class="card-header" role="tab" id="headingTwo2">
                                <a class="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseTwo2"
                                    aria-expanded="false" aria-controls="collapseTwo2">
                                    <h5 class="mb-0">
                                    Week 2: Purpose Activation Program <i class="fas fa-angle-down rotate-icon"></i>
                                    </h5>
                                </a>
                                </div>

                                <div id="collapseTwo2" class="collapse" role="tabpanel" aria-labelledby="headingTwo2"
                                data-parent="#accordionEx">
                                    <div class="card-body">
                                        <ul className='list-group'>
                                            <li className='list-group-item'><button className='btn' onClick={()=>handleClick({body:text,title: 'Starter'},false)}>The Starter  </button></li>
                                            <li className='list-group-item'><button className='btn' onClick={()=>handleClick({body:text,title: "life's Test"},false)}> Life’s Test </button></li>
                                            <li className='list-group-item'><button className='btn' onClick={()=>handleClick({body:text,title: "Power of Self-Believe"},false)}> Power of Self-Believe </button></li>
                                            <li className='list-group-item'><button className='btn' onClick={()=>handleClick('4uWSe9G2cJQ',true)}> Power of Vision</button></li>
                                            <li className='list-group-item'><button className='btn' onClick={()=>handleClick('GNnFqdTrs4g',true)}> Launching Out </button></li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                     
                        </div>
                    </div>

                </div>
                
            </div>
                   
            <Footer/>
        </Fragment>
    );
    }


export default Lesson;  