import React, { Component } from 'react';

class Login extends Component {
	state = {
		account: { username: '', password: '' }
	};

	handleSubmit = (e) => {
		e.preventDefault();

		console.log('Submitted');
		console.log(this.state.account);
	};

	handleChange = (currentTarget: input) => {
		const account = { ...this.state.account };
		account[input.name] = input.value;
		this.setState({ account });
	};
	render() {
		const { account } = this.state;
		return (
			<div className="container">
				<div className="ui middle aligned center aligned grid w-50 mx-auto">
					<div className="column">
						<h2 className="ui image header">
							<div className="content">Log-in to your account</div>
						</h2>
						<form onSubmit={this.handleSubmit} className="ui large form">
							<div className="ui stacked secondary  segment">
								<div className="form-group field">
									<div className="ui left icon input">
										<i className="user icon" />
										<input
											value={account.username}
											onChange={this.handleChange}
											id="username"
											type="text"
											name="username"
											placeholder="Username"
										/>
									</div>
								</div>
								<div className="form-group field">
									<div className="ui left icon input">
										<i className="lock icon" />
										<input
											value={account.password}
											onChange={this.handleChange}
											id="password"
											type="password"
											name="password"
											placeholder="Password"
										/>
									</div>
								</div>
								<button className="ui fluid large teal submit button">Login</button>
							</div>
							<div className="ui error message" />
						</form>
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
