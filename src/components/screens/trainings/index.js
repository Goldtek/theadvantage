import  React,{ useState, useEffect, Fragment } from 'react';
import { Link,useHistory } from 'react-router-dom';
import { Header, Footer, CourseBanner, Pagination, Training } from '../../custom';
import { useDispatch } from 'react-redux';


function Trainings(){
    const [trainings, setTrainings] = useState([]);
    const [currPage, setCurrPage] = useState(1);
    const [booksPerPage] = useState(2);

    
  //GET CURRENT POST
  const indexOfLastEvent = currPage * booksPerPage;
  const indexOfFirstEvent = indexOfLastEvent - booksPerPage;
  const currBooks = trainings.slice(indexOfFirstEvent, indexOfLastEvent);
  //GET CURRENT POST

  //CHANGE PAGE
  const paginate = pageNumber => setCurrPage(pageNumber);
  //CHANGE PAGE

  const dispatch = useDispatch();
  const history = useHistory();

 

  
        return(
            <div>
                <Header/> 
                <CourseBanner title="Trainings" image="images/ban1.jpg" /> 
                <section id="courses-part" class="pt-120 pb-120 gray-bg">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="courses-top-search">
                                    <ul class="nav float-left" id="myTab" role="tablist">
                                        <li class="nav-item">
                                            <Link class="active" id="courses-grid-tab" data-toggle="tab" href="#courses-grid" role="tab" aria-controls="courses-grid" aria-selected="true"><i class="fa fa-th-large"></i></Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link id="courses-list-tab" data-toggle="tab" href="#courses-list" role="tab" aria-controls="courses-list" aria-selected="false"><i class="fa fa-th-list"></i></Link>
                                        </li>
                                        <li class="nav-item">Showing 4 0f 24 Results</li>
                                    </ul> 
                                    
                                    <div class="courses-search float-right">
                                        <form action="#">
                                            <input type="text" placeholder="Search"/>
                                            <button type="button"><i class="fa fa-search"></i></button>
                                        </form>
                                    </div> 
                                </div>
                            </div>
                        </div> 
                        <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="courses-grid" role="tabpanel" aria-labelledby="courses-grid-tab">
                            <div class="row">
        
                            <Training bookImg="images/t1.jpg" userImg="images/usr.jpg" author="Yemi Akinwuntan"  title="Leadership: Practical Leadership Skills" count={31} quantity={1} numberOfLesson="20" price={25} id="asjwetrn" numOfVideo="50" quizz="10" students="20" />
                            
                            <Training bookImg="images/t2.jpg" userImg="images/usr.jpg" author="Yemi Akinwuntan"  title="Learn Basic Javascript" count={0} quantity={1} numberOfLesson="10" price={19} id="bdhyotrn" numOfVideo="20" quizz="5" students="2"/>
                            
                            <Training bookImg="images/t3.jpg" userImg="images/usr.jpg" author="Yemi Akinwuntan"  title="New Managerial Skills" count={23} quantity={1} numberOfLesson="40" price={20} id="aghetrn" numOfVideo="30" quizz="15" students="14"/>

                            <Training bookImg="images/t4.jpg" userImg="images/usr.jpg" author="Yemi Akinwuntan"  title="Discovery your purpose" count={10} quantity={1} numberOfLesson="15" price={25} id="anahwetrn" numOfVideo="45" quizz="12" students="34"/>
                        
                            </div>
                        </div>
                            
                        </div>
                        <div class="row">
                            <div class="col-lg-12">
                                <nav class="courses-pagination mt-50">
                                    <ul class="pagination justify-content-center">
                                        <li class="page-item">
                                            <Link to="#" aria-label="Previous">
                                                <i class="fa fa-angle-left"></i>
                                            </Link>
                                        </li>
                                        <li class="page-item"><Link class="active" href="#">1</Link></li>
                                        <li class="page-item"><Link to="#">2</Link></li>
                                        <li class="page-item"><Link to="#">3</Link></li>
                                        <li class="page-item">
                                            <Link to="#" aria-label="Next">
                                                <i class="fa fa-angle-right"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>  
                            </div>
                        </div> 
                    </div> 
                </section>

                     {/* <Pagination
                            PerPage={booksPerPage}
                            total={books.length}
                            paginate={paginate}
                        /> */}
                    
                <Footer/>
            </div>
        );
    }


export default Trainings;  