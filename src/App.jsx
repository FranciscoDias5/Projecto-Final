// Importa o componente Routes
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';

import styles from './style';
import History from './pages/History';
import Squad from './pages/Squad';
import Partners from './pages/Partners';
import Contact from './pages/Contact';
import News from './pages/News';

import WeatherApp from './components/WeatherApp/WeatherApp';

import CreatePost from './api/CreatePost';
import UpdatePost from './api/UpdatePost';
import DeletePost from './api/DeletePost';

function App() {
	return (
		<BrowserRouter>
			<div className='bg-primary w-full overflow-hidden'>
				<div className={`${styles.paddingX} ${styles.flexCenter}`}>
					<div className={`${styles.boxWidth}`}>
						<Navbar />
						<main>
							<Routes>
								<Route path='/' element={<Home />} />
								<Route path='/history' element={<History />} />
								<Route path='/squad' element={<Squad />} />
								<Route path='/partners' element={<Partners />} />
								<Route path='/contact' element={<Contact />} />
								<Route path='/news' element={<News />} />
								<Route path='/create' element={<CreatePost />} />
								<Route path='/update/:id' element={<UpdatePost />} />
								<Route path='/delete/:id' element={<DeletePost />} />
								<Route path='/weather' element={<WeatherApp />} />
							</Routes>
						</main>
						<Footer />
					</div>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
