import axios from 'axios'

export const fetcher = (url:string)=>(
    axios.get(url, {withCredentials: true}).then((res)=>{
        return res.data
    })
)