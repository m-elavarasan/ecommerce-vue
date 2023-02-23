import axios from 'axios'

const userLogin = ({ success, fail, data }) => {
    axios.post(`user/authUser`, data)
        .then((res) => {
            console.log('Inside userAuth')
            console.log(res.status == 200)
            if (res.status == 200) {
                success(res)
                console.log("success inside userauth")
        }
        })
        .catch((err) => {
            console.log('fail inside userauth')
                fail(err.response.data) 
        })
    }
export default {userLogin}

