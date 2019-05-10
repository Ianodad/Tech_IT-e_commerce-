import React from 'react';

const Input = ({ name, label, value, onChange, type }) => {
	return (
		<div className="form-group field">
			<div className={(name === 'username' ? 'lock' : 'user') + ' user ui left icon input'}>
				<i className="user icon" />
				<input value={value} onChange={onChange} id={name} type={type} name={name} placeholder={label} />
			</div>
		</div>
	);
};

export default Input;
