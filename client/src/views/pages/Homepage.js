import { useEffect, useState } from "react";
import {Avatar,  Header} from 'rsuite'
import axios from 'axios'
import { baseURL } from "./SignUp";

const Homepage =  () => {

    const[ existingUsers, setExistingUsers] = useState([]);

    useEffect(() => {
        const fetchUser = async () => {
            const activeUser = await axios.get(`${baseURL}/api/users`)
            setExistingUsers(activeUser.data)
            console.log(existingUsers)
        }
        fetchUser()
    }, [setExistingUsers])
    console.log(existingUsers)

    return (
        <section className='homepage'>
            <Header className='text-center homepage-intro'>
                <h1>Online Appointment Scheduling</h1>
                <h3 className='mt-3'>You can schedule appointments with any our users</h3>
            </Header>

            <div className='User-wrapper container '>
                <ul className='row gy-5 gx-5 mt-5'>
                    {existingUsers.map((user, index) => {
                        return (
                            <li key={index} className='col-md-3 ' >
                                <div className=' user-details text-center'> 
                                    <Avatar className='user-avatar'>
                                        <i className="bi bi-person user-icon"></i>
                                    </Avatar>
                                    <h3 className='mt-3 mb-0'>{user.username}</h3>
                                    <h3 className='mt-3 mb-0'>{user.fullName}</h3>
                                    <h3 className='mt-3 mb-0'>{user.email}</h3>
                                   
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}

export default Homepage