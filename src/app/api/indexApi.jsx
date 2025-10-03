

import axios from "axios"

const PublicApi=axios.create({
    baseURL:`${import.meta.env.VITE_DATABASE_API_URL}/api/nutrify`,
    withCredentials:true,
    
})


export default PublicApi