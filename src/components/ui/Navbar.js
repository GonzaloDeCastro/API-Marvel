import { NavLink } from 'react-router-dom';

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
			<div className="navbar-collapse">
				<div className="navbar-nav">
					<NavLink className="nav-item nav-link" to="/API-Marvel/caracters">
						Characters
					</NavLink>

					<NavLink className="nav-item nav-link" to="/API-Marvel/comics">
						Comics
					</NavLink>
				</div>
			</div>
		</nav>
	);
};
