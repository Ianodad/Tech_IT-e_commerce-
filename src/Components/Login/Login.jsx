import React from 'react';

function Login() {
	return (
		<div className="container">
			<div className="ui middle aligned center aligned grid w-50 mx-auto">
				<div className="column">
					<h2 className="ui image header">
						<div className="content">Log-in to your account</div>
					</h2>
					<form
						action="https://s.codepen.io/voltron2112/debug/PqrEPM?"
						method="get"
						className="ui large form"
					>
						<div className="ui stacked secondary  segment">
							<div className="field">
								<div className="ui left icon input">
									<i className="user icon" />
									<input type="text" name="email" placeholder="E-mail address" />
								</div>
							</div>
							<div className="field">
								<div className="ui left icon input">
									<i className="lock icon" />
									<input type="password" name="password" placeholder="Password" />
								</div>
							</div>
							<div className="ui fluid large teal submit button">Login</div>
						</div>
						<div className="ui error message" />
					</form>
					<div className="ui message">
						New to us? <a href="https://s.codepen.io/voltron2112/debug/PqrEPM?">Register</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;
