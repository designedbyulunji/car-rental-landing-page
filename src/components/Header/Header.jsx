import "./header.scss";
import "../../../universal-styles.scss";
import logo from "../../assets/images/react-redesigned.svg";

function Header() {
	return (
		<header className="app-header">
			<div className="logo__container">
				<img src={logo} alt="logo" />
			</div>
			<div className="login__container">
				<button className="btn login__btn">Login</button>
				<button className="btn signup__btn">Sign up</button>
			</div>
		</header>
	);
}

export default Header;
