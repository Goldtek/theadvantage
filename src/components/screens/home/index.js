import  React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Header, Banner, Footer, Book } from '../../custom';

export default class Home extends Component {
    render(){
        return(
            <div>
                <Header/>
                <Banner/> 
                <div className="sec container-fluid my-5">
                    <div className="row">
                        <h5>Courses <Link to="/courses" className="lik">View All</Link></h5>  
                        <div className="dline"/>
                        <div className="row mt-5">
                            <Book source="images/courses/11.jpg" title="Leadership: Practical Leadership Skills" />
                            <Book source="images/courses/9.jpg" title="Straight Business: for business managers & Leaders" />
                            <Book source="images/courses/10.jpg" title="The Complete Communication Skills Master className for Life" />
                            <Book source="images/courses/7.jpg" title="The Complete Management Skills Certification Course" />
                        </div>
                    
                 
                        <h5>Books <a href="course-all.html" className="lik">View All</a></h5>  
                        <div className="dline"/>
                        <div className="row mt-5">
                            <Book source="images/courses/lap.jpg" title="Straight Business: for business managers & Leaders" />
                            <Book source="images/courses/9.jpg" title="The Complete Communication Skills Master className for Life" />
                            <Book source="images/courses/book.jpeg" title="The Complete Management Skills Certification Course" />
                            <Book source="images/courses/16.jpg" title="Leadership: Practical Leadership Skills" />
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}