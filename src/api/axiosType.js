import axios from '@/libs/api.request'

export const getAxiosData = (url, query) => { // axios get类型
    return axios.request({
        url,
        method: 'get',
        params: { ...query }
    })
}

export const poatAxiosData = (url, query) => { // axios post类型
    return axios.request({
        url,
        method: 'post',
        data: query
    })
}

export const deleteDataId = (url, query) => { // axios delete类型
    return axios.request({
        url,
        method: 'delete',
        data: { ...query }
    })
}

export const putAxiosData = (url, query) => { // axios put类型
    return axios.request({
        url,
        method: 'put',
        data: query
    })
}