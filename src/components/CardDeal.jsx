import { benficacartao1 } from '../assets';
import styles, { layout } from '../style';
import Button from './Button';

const CardDeal = () => (
	<section className={layout.section}>
		<div className={layout.sectionInfo}>
			<h2 className={styles.cardH2}>
				Lorem ipsum dolor sit <br className={styles.cardBr} /> consectetur elit. Veniam!
			</h2>
			<p className={styles.cardP}>lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum similique reprehenderit odit ut, totam aperiam voluptatum possimus debitis. Quisquam, in.</p>
			<Button />
		</div>

		<div className={layout.sectionImg}>
			<img src={benficacartao1} alt='card' className={styles.cardImg} />
			<div className={styles.cardGradient1} />
			<div className={styles.cardGradient2} />
			<div className={styles.cardGradient3} />
		</div>
	</section>
);

export default CardDeal;
