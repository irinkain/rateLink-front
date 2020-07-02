import apiService from './services'

const api = apiService('/categories')

export const getAllCategory = () => api.get('/', {})
