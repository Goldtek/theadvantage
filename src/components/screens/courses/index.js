import  React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Header, CourseBanner, Footer, Book,Course } from '../../custom';

export default class Courses extends Component {
    render(){
        return(
            <div>
                <Header/>
                <CourseBanner/> 
                <div class="sec container-fluid my-5">
                    <div class="row">
                        <h5>Courses</h5>  
                        <div class="dline"/>
                        <div class="row mt-5">
                        <Course 
                                userImg="http://placehold.it/700x450" 
                                title="The Complete Communication Skills Master Class for Life"
                                name="Steve Brown"
                                bookImg="images/courses/6.jpg"
                                price="50"
                                numberOfLesson="13"
                                createdOn="6 Sept, 2020"
                            />
                            <Course 
                                userImg="http://placehold.it/700x450" 
                                title="The Complete Communication Skills Master Class for Life"
                                name="Steve Brown"
                                bookImg="images/courses/4.jpg"
                                price="100"
                                numberOfLesson="13"
                                createdOn="6 Sept, 2020"
                            />

                            <Course 
                                userImg="http://placehold.it/700x450" 
                                title="The Complete Communication Skills Master Class for Life"
                                name="Steve Brown"
                                bookImg="images/courses/3.jpg"
                                price="80"
                                numberOfLesson="13"
                                createdOn="6 Sept, 2020"
                            />

                            <Course 
                                userImg="http://placehold.it/700x450" 
                                title="The Complete Communication Skills Master Class for Life"
                                name="Steve Brown"
                                bookImg="images/courses/9.jpg"
                                price="76"
                                numberOfLesson="13"
                                createdOn="6 Sept, 2020"
                            />

                            <Course 
                                userImg="http://placehold.it/700x450" 
                                title="The Complete Communication Skills Master Class for Life"
                                name="Steve Brown"
                                bookImg="images/courses/2.jpg"
                                price="45"
                                numberOfLesson="13"
                                createdOn="6 Sept, 2020"
                            />

                            <Course 
                                userImg="http://placehold.it/700x450" 
                                title="The Complete Communication Skills Master Class for Life"
                                name="Steve Brown"
                                bookImg="images/courses/11.jpg"
                                price="80"
                                numberOfLesson="13"
                                createdOn="6 Sept, 2020"
                            />

                            <Course 
                                userImg="http://placehold.it/700x450" 
                                title="The Complete Communication Skills Master Class for Life"
                                name="Steve Brown"
                                bookImg="images/courses/5.jpg"
                                price="125"
                                numberOfLesson="13"
                                createdOn="16 August, 2020"
                            />

                            <Course 
                                userImg="http://placehold.it/700x450" 
                                title="The Complete Communication Skills Master Class for Life"
                                name="Steve Brown"
                                bookImg="images/courses/6.jpg"
                                price="250"
                                numberOfLesson="13"
                                createdOn="8 Sept, 2020"
                            />
                          
                        </div>
                    
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}