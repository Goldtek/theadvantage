import  React from 'react';
import { Link } from 'react-router-dom';
import { Header, Footer, ExecutivePackage } from '../../custom';


function Executive(){
    const thingsTolearn = ['make the best of your potentials','Cut through the complexities and distractions',
    'Achieve maximum impact in life and career'];
   const sections={};
        return(
            <div>
                <Header/>
                    <ExecutivePackage
                    price={250}
                    description='The Executive Package is a coaching platform that gives you the edge you need in life,
                     business and career. This is not an online package.'
                    level='Introductory'
                    numOfVideo='3'
                    duration='2'
                    toLearn={thingsTolearn}
                    packageName='Executive Package'
                    videos={sections}
                    numOfLessons='10'
                    Image='/images/executive.jpg'
                    />
                <Footer/>
            </div>
        );
    }


export default Executive;  