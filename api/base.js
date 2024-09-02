import Axios from 'axios'

export const http = Axios.create({
    baseURL: "http://ec2-3-76-224-30.eu-central-1.compute.amazonaws.com:3000/api",
})