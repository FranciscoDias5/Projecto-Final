import { useState } from 'react';
import styles from '../style';
import { goalkepper, defender, midfielder, striker } from '../constants';
import Hero from '../components/Hero';

const Squad = () => {
	const [imgZoomStates, setImgZoomStates] = useState(Array(goalkepper.length + defender.length + midfielder.length + striker.length).fill(false));
	const handleImgClick = index => {
		const newImgZoomStates = imgZoomStates.map((state, i) => (i === index ? !state : false));
		setImgZoomStates(newImgZoomStates);
	};
	const renderPlayers = (players, category) => (
		<div className={styles.squadRenderContainer}>
			{players.map((player, index) => (
				<div key={player.id} className={styles.squadKey} style={{ marginBottom: imgZoomStates[category + index] ? '64px' : '0' }}>
					<img
						src={player.img}
						alt={player.name}
						className={`${styles.title} ${styles.input} ${styles.squadImgOriginal} ${imgZoomStates[category + index] ? styles.squadImgZoom : ''}`}
						onClick={() => handleImgClick(category + index)}
						style={{ cursor: 'pointer' }}
					/>
					<p className={styles.squadPlayerName}>
						{player.name} <span className={styles.squadGradient}>{player.number}</span>
					</p>
				</div>
			))}
		</div>
	);

	return (
		<div>
			<Hero />
			<div className={styles.squadContainer}>
				<h2 className={styles.squadTitle}>Guarda-Redes</h2>
				{renderPlayers(goalkepper, 0)}
				<h2 className={styles.squadTitle}>Defesas</h2>
				{renderPlayers(defender, goalkepper.length)}
				<h2 className={styles.squadTitle}>Médio-Campistas</h2>
				{renderPlayers(midfielder, goalkepper.length + defender.length)}
				<h2 className={styles.squadTitle}>Avançados</h2>
				{renderPlayers(striker, goalkepper.length + defender.length + midfielder.length)}
			</div>
		</div>
	);
};

export default Squad;
