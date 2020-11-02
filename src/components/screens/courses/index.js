import  React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Header, CourseBanner, Footer, Book,Course } from '../../custom';

export default class Courses extends Component {
    render(){
        return(
            <div>
                <Header/>
                <CourseBanner
                title=" All Training to Success"
                subTitle=" we offer trainings in a number of other areas. Our main focus is always on developing and creating value for you and your workplace."
                /> 
                <div className="sec container-fluid my-5">
                    <div className="row">
                        <h5>Trainings</h5>  
                        <div className="dline"/>
                        <div className="row mt-5">
                        <Course 
                                userImg="http://placehold.it/700x450" 
                                title="To Kill a Mockingbird"
                                name="James Jackson"
                                bookImg="images/courses/19.jpg"
                                price={50}
                                numberOfLesson={13}
                                createdOn="6 Sept, 2020"
                                id='ajej3848gj'
                                numberOfLesson={10}
                                quantity={1}
                            />
                            <Course 
                                userImg="http://placehold.it/700x450" 
                                title="The Complete Communication Skills Master for Life"
                                name="Bridget Brown"
                                bookImg="images/courses/20.jpg"
                                price={100}
                                numberOfLesson={13}
                                createdOn="6 Sept, 2020"
                                id='gjt559tjgj2e'
                                numberOfLesson={13}
                                quantity={1}
                            />

                            <Course 
                                userImg="http://placehold.it/700x450" 
                                title="One Hundred Years of Solitude"
                                name="Steve Brown"
                                bookImg="images/courses/21.jpg"
                                price={80}
                                numberOfLesson={13}
                                createdOn="6 Sept, 2020"
                                id="9596"
                                numberOfLesson={16}
                                quantity={1}
                            />

                            <Course 
                                userImg="http://placehold.it/700x450" 
                                title="Things Fall Apart"
                                name="Daniel Theophilus"
                                bookImg="images/courses/22.png"
                                price={76}
                                numberOfLesson={13}
                                createdOn="6 Sept, 2020"
                                id='d456y'
                                numberOfLesson={15}
                                quantity={1}
                            />

                            {/* <Course 
                                userImg="http://placehold.it/700x450" 
                                title="The Great Gatsby"
                                name="Steve Brown"
                                bookImg="images/courses/2.jpg"
                                price={45}
                                numberOfLesson={13}
                                createdOn="6 Sept, 2020"
                                id="8ui9"
                                numberOfLesson={20}
                                quantity={1}
                            />

                            <Course 
                                userImg="http://placehold.it/700x450" 
                                title="The Color Purple"
                                name="Steve Brown"
                                bookImg="images/courses/11.jpg"
                                price={80}
                                numberOfLesson={13}
                                createdOn="6 Sept, 2020"
                                id="34gt67"
                                numberOfLesson={30}
                                quantity={1}
                            />

                            <Course 
                                userImg="http://placehold.it/700x450" 
                                title="Atlas Shrugged"
                                name="Steve Brown"
                                bookImg="images/courses/5.jpg"
                                price={125}
                                numberOfLesson={13}
                                createdOn="16 August, 2020"
                                id="ghiro459f9"
                                numberOfLesson={16}
                                quantity={1}
                            />

                            <Course 
                                userImg="http://placehold.it/700x450" 
                                title="The Lord of the Rings"
                                name="Steve Brown"
                                bookImg="images/courses/6.jpg"
                                price={250}
                                numberOfLesson={13}
                                createdOn="8 Sept, 2020"
                                id="fghjkkjh"
                                numberOfLesson={14}
                                quantity={1}
                            /> */}
                          
                        </div>
                    
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}