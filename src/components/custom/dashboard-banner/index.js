import React,{ useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';
import { useHistory, Redirect } from 'react-router-dom';
import { auth,firestore } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import './style.css';

const DashboardBanner = () => {
    const [Name, setName] = useState("");
    const history =  useHistory();
   // const [user] = useAuthState(auth);
   // console.log('userdashboard',auth.currentUser.emailVerified);
    useEffect(()=>{
        auth.onAuthStateChanged(async (user)=>{
            if(user){
               const query = await firestore.collection('users').where('email','==',user.email).get();
               if(!query.empty){
                const snapshot = query.docs[0];
                const data = snapshot.data();
                const { name } = data;
                setName(name);
               }
            }else{
                history.push('/');
            }
        });
    },[]);

return (
    <div className="dasbd mb-30">
    <div className="container-fluid">
        <div className="row">
            <div className="col-lg-6 mr-auto mll dashboard-text">
            <h4>
                   Hi, {Name}, Welcome
                </h4>
                Learn today and build your self and organisation.
                <p>
               
                  
                </p>
            </div>
        </div>
    </div>
</div>
);

}

export default DashboardBanner;