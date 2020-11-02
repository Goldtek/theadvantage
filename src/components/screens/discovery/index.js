import  React from 'react';
import { Link } from 'react-router-dom';
import { Header, Footer, Package } from '../../custom';


function Discovery(){
    const thingsTolearn = ['What is Purpose','How to Write A Purpose Statement',
    'How to Create a Purpose Checklist','Discovering the Power of Self-Believe','How to use the Power of Vision'];
   const sections={};
        return(
            <div>
                <Header/>
                    <Package
                    price={250}
                    description='The Discovery Package is tailored made exclusively for those seeking to discover, define and deploy their purpose.
                    Knowledge, activities and tasks in the Discovery Package will jumpstart your journey to discovery, confidence and beginning steps to fulfilment.
                      '
                    level='Introductory'
                    numOfVideo='3'
                    duration='2'
                    toLearn={thingsTolearn}
                    packageName='Discovery Package'
                    videos={sections}
                    numOfLessons='10'
                    Image='/images/discovery.jpg'
                    />
                <Footer/>
            </div>
        );
    }


export default Discovery;  