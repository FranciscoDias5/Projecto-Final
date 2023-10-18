import { apple, camisolab2, google } from '../assets';
import styles, { layout } from '../style';

const Billing = () => (
	<section id='product' className={layout.sectionReverse}>
		<div className={layout.sectionImgReverse}>
			<img src={camisolab2} alt='billing' className={styles.billingImg} />
			<div className={styles.billingGradient1} />
			<div className={styles.billingGradient2} />
			<div className={styles.billingGradient3} />
		</div>
		<div className={styles.flexCenter}>
			<div className={layout.sectionInfo}>
				<h2 className={styles.billingH2}>
					Lorem, ipsum dolor. <br className={styles.billingBr} /> Lorem, ipsum dolor.
				</h2>
				<p className={styles.billingP}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum similique reprehenderit odit ut, totam aperiam voluptatum possimus debitis. Quisquam, in.</p>
				<div className={styles.billingDiv}>
					<img src={apple} alt='apple_store' className={styles.billingApple} />
					<img src={google} alt='google_play' className={styles.billingGoogle} />
				</div>
			</div>
		</div>
	</section>
);

export default Billing;
