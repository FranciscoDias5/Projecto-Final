import { stats } from '../constants';
import styles from '../style';

const Stats = () => (
	<section className={styles.statSection}>
		{stats.map(stat => (
			<div key={stat.id} className={styles.statKey}>
				<h4 className={styles.statH4}>{stat.value}</h4>
				<p className={styles.statP}>{stat.title}</p>
			</div>
		))}
	</section>
);

export default Stats;
