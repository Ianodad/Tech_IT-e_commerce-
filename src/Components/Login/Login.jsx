import React, { Component } from 'react';
import Input from './Input';
import Joi from 'joi-browser';

class Login extends Component {
	state = {
		account: { username: '', password: '' },
		errors: {}
	};

	schema = {
		username: Joi.string().required().label('Username'),
		password: Joi.string().required().label('Password')
	};

	validate = () => {
		// joi takes in some paremters
		// the state account
		// the schema used to map to the account
		// abortEarly to false so when error are found before all fields are checked is false
		const options = { abortEarly: false };
		const { error } = Joi.validate(this.state.account, this.schema, options);

		if (!error) return null;

		const errors = {};
		for (let item of error.details) errors[item.path[0]] = item.message;
		return errors;
		// return keys values for the error object conditionally
		return Object.keys(errors).length === 0 ? null : errors;
	};
	handleSubmit = (e) => {
		e.preventDefault();

		const errors = this.validate();
		console.log(errors);
		this.setState({ errors: errors || {} });
		if (errors) return;

		console.log('Submitted');
	};
	validateProperty = ({ name, value }) => {
		const obj = { [name]: value };
		const schema = { [name]: this.schema[name] };
		const { error } = Joi.validate(obj, schema);
		return error ? error.details[0].message : null;
	};

	handleChange = ({ currentTarget: input }) => {
		const errors = { ...this.state.errors };
		const errorMessage = this.validateProperty(input);
		//  checks conditions of  errorMessage change the errors object according to condition
		if (errorMessage) errors[input.name] = errorMessage;
		else delete errors[input.name];

		const account = { ...this.state.account };
		account[input.name] = input.value;
		this.setState({ account });
	};
	render() {
		const { account, errors } = this.state;
		return (
			<div className="container">
				<div className="ui middle aligned center aligned grid w-50 mx-auto">
					<div className="column">
						<h2 className="ui image header">
							<div className="content">Log-in to your account</div>
						</h2>
						<form onSubmit={this.handleSubmit} className="ui large form">
							<div className="ui stacked secondary  segment">
								<Input
									name="username"
									value={account.username}
									label="Username"
									onChange={this.handleChange}
									type="text"
									error={errors.username}
								/>
								<Input
									name="password"
									value={account.password}
									label="Password"
									onChange={this.handleChange}
									type="password"
									error={errors.password}
								/>

								<button className="ui fluid large teal submit button">Login</button>
							</div>
						</form>

						{errors.username && <div className="ui error message">{errors.username}</div>}
						{errors.password && <div className="ui error message">{errors.password}</div>}

						<div className="ui message">
							New to us? <a href="#">Register</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Login;
