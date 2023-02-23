import axios from 'axios'

export default {
   userLogin({ data,success,fail }){
    axios.post(`user/authUser`, data)
        .then((response) => {
            console.log('Inside userAuth')
            console.log(response.status == 200)
            if (response.status == 200) {
                success(response)
                console.log("success inside userauth")
           }
           else if (response.status >= 400 && response.status <= 499) {
            fail(response.message)
        }
        })
        .catch((error) => {
            console.log('fail inside userauth')
            fail(error)
            console.log(error);
        })
}

} 