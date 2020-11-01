import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 0eae07e66f0419a8f9697bd9ea59d5efbcfbe896348e9af0c76d5beda949bd68'
    }
});