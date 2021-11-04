import axios from 'axios'
import { baseUrl } from '../helper/variables'

const fetchUser = async () => {
    let activeUser = await axios.get(`${baseUrl}/api/users`)
    return  activeUser.data
}

const createUser  =  async userDetails => {
    const userData = await axios.post( `${ baseUrl }/api/users`, userDetails)
    return userData.data
}

export { fetchUser, createUser}