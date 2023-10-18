import { features } from '../constants';
import styles, { layout } from '../style';
import Button from './Button';
import PropTypes from 'prop-types';

const FeatureCard = ({ icon, title, content, index }) => (
	<div className={`${styles.featureContainer} ${index !== features.length - 1 ? 'mb-6' : 'mb-0'}`}>
		<div className={styles.featureDivImg}>
			<img src={icon} alt='icon' className={styles.featureImg} />
		</div>
		<div className={styles.featureDivText}>
			<h4 className={styles.featureH4}>{title}</h4>
			<p className={styles.featureP}>{content}</p>
		</div>
	</div>
);

FeatureCard.propTypes = {
	icon: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
	index: PropTypes.number.isRequired,
};

const Business = () => {
	return (
		<section id='features' className={layout.section}>
			<div className={layout.sectionInfo}>
				<h2 className={styles.businessH2}>
					Lorem ipsum dolor sit, <br className={styles.businessBr} />
					Lorem dolor sit amet.
				</h2>
				<p className={styles.businessP}>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui aspernatur consectetur dignissimos, in error architecto, deleniti soluta sunt ipsa reiciendis blanditiis nisi exercitati
					onemodit quaerat?
				</p>
				<Button />
			</div>
			<div className={`${layout.sectionImg} ${styles.businessDivMap}`}>
				{features.map((feature, index) => (
					<FeatureCard key={feature.id} {...feature} index={index} />
				))}
			</div>
		</section>
	);
};

export default Business;
