import { useState } from 'react';
import { Link } from 'react-router-dom';
import { close, btvlogo, menu } from '../assets';
import { navLinks } from '../constants';
import styles from '../style';

const Navbar = () => {
	const [toggle, setToggle] = useState(false);

	return (
		<nav className={styles.navbarNav}>
			<Link to='/'>
				{' '}
				<img src={btvlogo} alt='hoobank' className={styles.navbarLogo} />
			</Link>

			<ul className={styles.navbarUl}>
				{navLinks.map((nav, index) => (
					<li key={nav.id} className={`${styles.navbarLi} ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}>
						<Link to={`/${nav.id}`}>{nav.title}</Link>
					</li>
				))}
			</ul>

			<div className={styles.navbarHamburger}>
				<img src={toggle ? close : menu} alt='menu' className={styles.navbarHamburgerImg} onClick={() => setToggle(prev => !prev)} />

				<div className={`${toggle ? 'flex' : 'hidden'} ${styles.navbarDiv}`}>
					<ul className={styles.navbarDivUl}>
						{navLinks.map((nav, index) => (
							<li key={nav.id} className={`${styles.navbarDivLi} ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'}`}>
								<Link to={`/${nav.id}`}>{nav.title}</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
