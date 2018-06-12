import React, {PureComponent} from 'react'
import '../styles/SignUpForm.css'


export default class SignUpForm extends PureComponent {
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
	 		<form classname='form-signup' onSubmit={this.handleSubmit}>
	 			<div className='email-div'>
	 				<label htmlFor="email">Email</label>
	 				<input type="email" name="email" className="email" value={
	 					this.state.email || ''
	 				} onChange={ this.handleChange } />
	 			</div>

	 			<div className='password-div'>
	 				<label htmlFor="password">Password</label>
	 				<input type="password" name="password" className="password" value={
	 					this.state.password || ''
	 				} onChange={ this.handleChange } />
	 			</div>

	 			<div className='password-div'>
	 				<label htmlFor="confirmPassword">Confirm password</label>
	 				<input type="password" name="confirmPassword" className="confirmPassword" value={
	 					this.state.confirmPassword || ''
	 				} onChange={ this.handleChange } />
	 			</div>

	 			{
	 				this.state.password &&
					this.state.confirmPassword &&
					this.state.password !== this.state.confirmPassword &&
					<p style={{color:'red'}}>The passwords do not match!</p>
	 			}

	 			<button className='submit-button' type="submit">Sign up</button>
	 		</form>
	 	)
 	}
}
