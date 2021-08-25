import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Rightbar from './Rightbar';
import Feed from './Feed';
import { Users } from '../dummyData';
import { add_project } from './Add_project';

import './profile.css';

function Profile() {
    console.log(Users);
    return (
        <div className="profile">
            <Header />
            <div className="profile_add">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop"></div>
                    <div className="profileRightBottom">
                        <div className="profileWrapper">

                            <div className="profileCenter">
                                <img className="profileImg" src="https://media-exp3.licdn.com/dms/image/C5603AQFbFzARRH_JuA/profile-displayphoto-shrink_400_400/0/1608041902497?e=1632355200&v=beta&t=E4WSe6ueqwWgiFMZEJ9CeADFZTC6T5pVWu_lJouvBwM"></img>
                                <h2>{Users[0].username}</h2>
                                <p><strong>Description: Full Stack Developer</strong></p>
                                <p><span class="get-started-btn">Follow</span></p>



                            </div>


                        </div>
                        <Feed />
                        {/* <Rightbar /> */}
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Profile
