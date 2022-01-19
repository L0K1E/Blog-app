import React from "react";
import PropTypes from "prop-types";
import { Button, NavBar } from ".";

const SideBar = ({ open, onClose, onLoginClick, onSignupClick, onLogoutClick, user }) => {
	return (
		<div className={`${open && "sidebar-container"}`}>
			<div className={`sidebar sidebar-${open ? "open" : "close"}`}>
				<div className="sidebar-header">
					<h1 className="brand">Blog App</h1>
					<span className="close" onClick={onClose}>
						+
					</span>
				</div>
				<div className="sidebar-body">
					<NavBar />
				</div>

				<div className="sidebar-footer">
					<Button label="Log-in" color="dark" size="sm" btnStyle="outline" />
					<br />
					<Button label="Sign-up" color="dark" size="sm" btnStyle="contained" />
				</div>
			</div>
		</div>
	);
};

SideBar.propTypes = {
	open: PropTypes.bool,
	onClose: PropTypes.func,
	onLoginClick: PropTypes.func,
	onSignupClick: PropTypes.func,
	onLogoutClick: PropTypes.func,
	user: PropTypes.object,
};

export default SideBar;
