import React from 'react';

function SearchBar() {
	return (
		<div className="col-md-6 col-sm-6">
			<form action="#">
				<div className="input-group w-100">
					<select className="custom-select" name="category_name">
						<option value>All type</option>
						<option value="codex">Special</option>
						<option value="comments">Only best</option>
						<option value="content">Latest</option>
					</select>
					<input type="text" className="form-control" style={{ width: '60%' }} placeholder="Search" />
					<div className="input-group-append">
						<button className="btn btn-primary" type="submit">
							<i className="fa fa-search" />
						</button>
					</div>
				</div>
			</form>
		</div>
	);
}

export default SearchBar;
