import styles from '../style';
import { benficalogo5 } from '../assets';

const Hero = () => (
	<section id='home' className={styles.heroSection}>
		<div className={styles.heroDiv}>
			<div className={styles.heroDivH1}>
				<h1 className={styles.heroH1}>
					Lorem <br className={styles.heroBr} />
					<span className={styles.heroSpan}>Benfica</span>
					<br className={styles.heroBr} />
					Lorem, ipsum.
				</h1>
			</div>
			<p className={styles.heroP}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero perferendis nam, fugiat soluta aperiam, totam eligendi facere cum ullam quidem aspernatur iusto.</p>
		</div>
		<div className={styles.heroDivImg}>
			<img src={benficalogo5} alt='billing' className={styles.heroImg} />
			<div className={styles.heroGradient1} />
			<div className={styles.heroGradient2} />
			<div className={styles.heroGradient3} />
		</div>
	</section>
);

export default Hero;
