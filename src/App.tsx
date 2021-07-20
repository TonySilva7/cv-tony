import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import MyRoutes from './Routes';
import { GlobalStyle } from './styles/GlobalStyle';

function App() {
	return (
		<>
			<BrowserRouter>
				<GlobalStyle />
				<Header />
				<MyRoutes />
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
