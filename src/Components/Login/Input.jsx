import React from 'react';

const Input = ({ name, label, value, onChange, type, error }) => {
	return (
		<div className="form-group field">
			<div className={(name === 'username' ? 'user' : 'lock') + ' user ui left icon input'}>
				<i className={(name === 'username' ? 'user' : 'lock') + ' icon'} />
				<input value={value} onChange={onChange} id={name} type={type} name={name} placeholder={label} />
			</div>
            {error && <div className="alert alert-danger">{error}</div>}                
		</div>
	);
};

export default Input;
