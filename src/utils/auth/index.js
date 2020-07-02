export const getAuthToken = () => localStorage.getItem('access_token')
export const setAuthToken = access_token =>
  localStorage.setItem('access_token', access_token)

export const removeToken = () => localStorage.removeItem('access_token')
