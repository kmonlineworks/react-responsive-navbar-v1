import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';

function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element="Home" />
					<Route path="/services" element="Services" />
					<Route path="/about" element="About" />
					<Route path="/contact" element="Contact" />
				</Routes>
			</Router>
		</>
	);
}

export default App;
