import "./App.css";
import { Navbar, NavbarBrand } from "reactstrap";

function App() {
	return (
		<div className="App">
			<Navbar dark color="primary"></Navbar>
			<div className="container">
				<NavbarBrand href="/">Con Fusion</NavbarBrand>
			</div>
		</div>
	);
}

export default App;
