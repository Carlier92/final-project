import React, {PureComponent} from 'react'
import '../styles/LoginForm.css'


export default class LoginForm extends PureComponent {
	state = {}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.onSubmit(this.state)
	}

	handleChange = (event) => {
    const {name, value} = event.target

    this.setState({
      [name]: value
    })
  }
	render() {
		return (
			<form className='form' onSubmit={this.handleSubmit}>
				<div className='email-div'>
					<label htmlFor="email">Email</label>
					<input type="email" name="email" className="email-login" value={
						this.state.email || ''
					} onChange={ this.handleChange } />
				</div>

				<div className='password-div'>
					<label htmlFor="password">Password</label>
					<input type="password" name="password" className="password-login" value={
						this.state.password || ''
					} onChange={ this.handleChange } />
				</div>

				<button className='submit-button' type="submit">Login</button>
			</form>
		)
	}
}
