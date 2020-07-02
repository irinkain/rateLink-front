import apiService from './services'

const authApi = apiService('/auth/local')

export const signInUser = body => authApi.post('/', body)

export const registerUser = body => authApi.post('/register', body)
