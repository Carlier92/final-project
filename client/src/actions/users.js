import * as request from 'superagent'

const baseUrl = 'http://localhost:4001'

export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
export const USER_LOGIN_FAILED = 'USER_LOGIN_FAILED'
export const USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS'
export const USER_SIGNUP_FAILED = 'USER_SIGNUP_FAILED'

export const login = (email, password) => (dispatch) => {
  request
    .post(`${baseUrl}/login`)
    .send({ email, password })
    .then(result => {
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: result.body
      })
    })
    .catch(err => {
      if (err.status === 400) {
        dispatch({
          type: USER_LOGIN_FAILED,
          payload: err.response.body.message || 'Unknown error'
        })
      }
      else {
        console.log(err)
      }
    })
}

export const signup = (email, password) => (dispatch) => {
  // console.log(email, 'EMAIL')
  	request
  		.post(`${baseUrl}/users`)
  		.send({ email, password })
  		.then(result => {
      // console.log('SENT')
  			dispatch({
  				type: USER_SIGNUP_SUCCESS
  			})
  		})
  		.catch(err => {
  			if (err.status === 400) {
  				dispatch({
  					type: USER_SIGNUP_FAILED,
  					payload: err.response.body.message || 'Unknown error'
  				})
  			}
  			else {
  				console.error(err)
  			}
  		})
}