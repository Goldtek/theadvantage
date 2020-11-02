import  React from 'react';
import { Link } from 'react-router-dom';
import { Header, Footer, VantagePackage } from '../../custom';


function Vantage(){
    const thingsTolearn = ['How to write a purpose statement','How to Write A Purpose Statement',
    'How to Create a Purpose Checklist','Discovering the Power of Self-Believe','How to use the Power of Vision',
    'Understand your success Traits', 'Learn to Speak with Power','How to align your emotional intelligence for success'];
   const sections={};
        return(
            <div>
                <Header/>
                    <VantagePackage
                    price={1250}
                    description='Vantage Package is for those who may have had some degree of certainty in their discovery of purpose will quickly embrace the Vantage Package. 
                    This package helps to achieve better clarity in the deployment of purpose, while further equipping you with relevant skills to achieve more in your pursuit.'
                    level='Advanced'
                    numOfVideo='8'
                    duration='10'
                    toLearn={thingsTolearn}
                    packageName='Vantage Package'
                    videos={sections}
                    numOfLessons='30'
                    Image='/images/vantage.png'
                    />
                <Footer/>
            </div>
        );
    }


export default Vantage;  