import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {login} from '../actions/users'
import LoginForm from './LoginForm'
import {Link} from 'react-router-dom'
import {Redirect} from 'react-router-dom'
import '../styles/LoginPage.css'


class LoginPage extends PureComponent {
  handleSubmit = (data) => {
    this.props.login(data.email, data.password)
  }

  render() {
    const { loginError } = this.props
    const errorColor = {
      color: 'red'
    }
    if (this.props.currentUser) return (
      <Redirect to='/' />
    )

    return (
      <div className='login-div'>
        <h1 className='greeting'>Welcome to Dog Tinder!</h1>

        <LoginForm onSubmit={this.handleSubmit} />

        { loginError && <p style={errorColor}>{loginError}</p>}

        <p>If you dont have an account, please <Link to='/signup'>sign up</Link>!</p>
      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    currentUser: state.currentUser,
    loginError: state.login.error
  }
}

export default connect(mapStateToProps, {login})(LoginPage)
