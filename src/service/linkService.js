import apiService from './services'

const api = apiService('/links')

export const getAllLink = () => api.get('/', {})
export const createLink = body => api.post('/', body)
export const updateLink = body => api.put(`/${body.id}`, body)
