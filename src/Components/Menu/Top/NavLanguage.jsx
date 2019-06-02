import React from 'react'

function NavLanguage() {
    return (
        <div>
            <li className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">
                    Language
								</a>
                <ul className="dropdown-menu small">
                    <li>
                        <a className="dropdown-item" href="#">
                            English
										</a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#">
                            Arabic
										</a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#">
                            Russian
										</a>
                    </li>
                </ul>
            </li>
        </div>
    )
}

export default NavLanguage
