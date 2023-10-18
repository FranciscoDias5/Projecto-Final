import { feedback } from '../constants';
import styles from '../style';
import FeedbackCard from './FeedbackCard';

const Testimonials = () => (
	<section id='clients' className={styles.testimonialSection}>
		<div className={styles.testimonialDiv1} />
		<div className={styles.testimonialDiv2}>
			<div className={styles.testimonialDiv3}>
				<h1 className={styles.testimonialH1}>
					What People are <br className={styles.testimonialBr} /> saying about us
				</h1>
				<div className={styles.testimonialDiv4}>
					<p className={styles.testimonialP}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda adipisci voluptas. Placeat.</p>
				</div>
			</div>
		</div>
		<div className={styles.testimonialDiv5}>
			<div className={styles.testimonialDiv6}>
				{feedback.map(card => (
					<FeedbackCard key={card.id} {...card} />
				))}
			</div>
		</div>
	</section>
);

export default Testimonials;
