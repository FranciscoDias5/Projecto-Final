import { quotes } from '../assets';
import PropTypes from 'prop-types';
import styles from '../style';

const FeedbackCard = ({ content, name, title, img }) => (
	<div className={styles.feedbackDiv}>
		<img src={quotes} alt='double_quotes' className={styles.feedbackImg1} />
		<p className={styles.feedbackP}>{content}</p>
		<div className={styles.feedbackDiv2}>
			<img src={img} alt={name} className={styles.feedbackImg2} />
			<div className={styles.feedbackDivText}>
				<h4 className={styles.feedbackH4}>{name}</h4>
				<p className={styles.feedbackP2}>{title}</p>
			</div>
		</div>
	</div>
);

FeedbackCard.propTypes = {
	content: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	img: PropTypes.string.isRequired,
};

export default FeedbackCard;
