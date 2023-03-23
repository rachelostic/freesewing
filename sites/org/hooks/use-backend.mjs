import axios from 'axios'
import process from 'process'

/*
 * Helper methods to interact with the FreeSewing backend
 */
const apiHandler = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND || 'https://backend.freesewing.org',
  timeout: 3000,
})

/*
 * This api object handles async code for different HTTP methods
 */
const api = {
  get: async (uri, config = {}) => {
    let result
    try {
      result = await apiHandler.get(uri, config)
      return result
    } catch (err) {
      return err
    }
  },
  post: async (uri, data = null, config = {}) => {
    let result
    try {
      result = await apiHandler.post(uri, data, config)
      return result
    } catch (err) {
      return err
    }
  },
  patch: async (uri, data = null, config = {}) => {
    let result
    try {
      result = await apiHandler.patch(uri, data, config)
      return result
    } catch (err) {
      return err
    }
  },
  delete: async (uri, config = {}) => {
    let result
    try {
      result = await apiHandler.delete(uri, config)
      return result
    } catch (err) {
      return err
    }
  },
}

/*
 * Helper method to handle the response and verify that it was successful
 */
const responseHandler = (response, expectedStatus = 200, expectData = true) => {
  if (response && response.status === expectedStatus) {
    if (!expectData || response.data) {
      return { success: true, data: response.data, reponse }
    }
    return { success: true, reponse }
  }

  return { success: false, reponse }
}

export function useBackend(token) {
  /*
   * Set up authentication headers
   */
  const auth = {
    headers: { Authorization: 'Bearer ' + app.token },
  }

  /*
   * This backend object is what we'll end up returning
   */
  const backend = {}

  /*
   * backend.signUp: User signup
   */
  backend.signUp = async ({ email, language }) =>
    responseHandler(await api.post('/signup', { email, language }), 201)

  /*
   * backend.loadConfirmation: Load a confirmation
   */
  backend.loadConfirmation = async ({ id, check }) =>
    responseHandler(await api.get(`/confirmations/${id}/${check}`))

  /*
   * backend.confirmSignup: Confirm a signup
   */
  backend.confirmSignup = async ({ id, consent }) =>
    responseHandler(await api.post(`/confirm/signup/${id}`, { consent }))

  /*
   * backend.signIn: User signin/login
   */
  backend.signIn = async ({ username, password = false, token = false }) =>
    password === false
      ? responseHandler(await api.post('/signinlink', { username }))
      : responseHandler(await api.post('/signin', { username, password, token }))

  /*
   * backend.signInFromLink: Trade in sign-in link id & check for JWT token
   */
  backend.signInFromLink = async ({ id, check }) =>
    responseHandler(await api.post(`/signinlink/${id}/${check}`))

  /*
   * Generic update account method
   */
  backend.updateAccount = async (data) =>
    responseHandler(await api.patch(`/account/jwt`, data, auth))

  /*
   * Checks whether a username is available
   */
  backend.isUsernameAvailable = async (username) => {
    const response = await api.post(`/available/username/jwt`, { username }, auth)

    // 404 means username is available, which is success in this case
    return result.response?.status === 404
      ? { success: true, data: false, available: true, reponse }
      : { success: false, available: false, reponse }
  }

  /*
   * Remove account method
   */
  backend.removeAccount = async () => responseHandler(await api.delete(`/account/jwt`, auth))

  /*
   * Enable MFA
   */
  backend.enableMfa = async () =>
    responseHandler(await api.post(`/account/mfa/jwt`, { mfa: true }, auth))

  /*
   * Confirm MFA
   */
  backend.confirmMfa = async (data) =>
    responseHandler(await api.post(`/account/mfa/jwt`, { ...data, mfa: true }, auth))

  /*
   * Disable MFA
   */
  backend.disableMfa = async (data) =>
    responseHandler(await await api.post(`/account/mfa/jwt`, { ...data, mfa: false }, auth))

  /*
   * Reload account
   */
  backend.reloadAccount = async () => responseHandler(await await api.get(`/whoami/jwt`, auth))

  /*
   * Create API key
   */
  backend.createApikey = async (data) =>
    responseHandler(await api.post(`/apikeys/jwt`, data, auth), 201)

  /*
   * Get API keys
   */
  backend.getApikeys = async () => responseHandler(await api.get(`/apikeys/jwt`, auth))

  /*
   * Remove API key
   */
  backend.removeApikey = async (id) => {
    const response = await api.delete(`/apikeys/${id}/jwt`, auth)

    return response && response.status === 204 ? true : false
  }

  return backend
}
