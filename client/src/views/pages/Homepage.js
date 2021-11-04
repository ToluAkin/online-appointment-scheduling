import { useEffect, useState } from "react";
import {Avatar,  Header, Notification, Message, toaster} from 'rsuite'
import { fetchUser } from "../../services/auth";

const Homepage =  () => {

    const[ existingUsers, setExistingUsers] = useState([]);
    
    useEffect(() => {
        (async () => {
            try{
                const userList = await fetchUser()
                const sharedUser = userList.filter(obj => obj.shared === 1)
                setExistingUsers(sharedUser)
            } catch (e) {
                toaster.push(
                    <Notification>
                        <Message showIcon type="error" header=''>An error occurred while fetching Shared Users details. Please wait or try again</Message>
                    </Notification>
                );
            }
        })();
    }, [])

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
                            <li key={index} className='col-md-4  col-lg-3' >
                                <div className=' user-details text-center'> 
                                    <Avatar className='user-avatar'>
                                        <i className="bi bi-person user-icon"></i>
                                    </Avatar>
                                    <h3 className='mt-3 mb-0'>{user.username}</h3>
                                    <h3 className='mt-3 mb-0'>{user.fullName}</h3>
                                    <h3 className='mt-3 mb-0 text-break'>{user.email}</h3>
                                   
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