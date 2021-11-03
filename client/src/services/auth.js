import axios from 'axios'

const baseURL = 'http://localhost:3003'

const fetchUser = async () => {
    let activeUser = await axios.get(`${baseURL}/api/users`)
    return  activeUser.data
}

const createUser  =  async userDetails => {
    const userData = await axios.post( `${ baseURL }/api/users`, userDetails)
    return userData.data
}

export { fetchUser, createUser}