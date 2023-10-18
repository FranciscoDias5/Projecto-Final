import styles, { layout } from '../style';
import { simbolobenfica, eusebio, conquistasimportantes, velhoestadio, entradaJ, benficacampeao } from '../assets';
import Hero from '../components/Hero';

const History = () => {
	return (
		<div>
			<Hero />
			<div className={styles.line}>
				<section id='product' className={layout.sectionReverse}>
					<div className={layout.sectionImgReverse}>
						<img src={simbolobenfica} alt='billing' className={styles.historyImg} />
					</div>
					<div className={styles.historyDivText}>
						<div className={layout.sectionInfo}>
							<h2 className={styles.historyH2}>
								Lorem, ipsum dolor.
								<br className={styles.historyBr} /> billing & invoicing
							</h2>
							<p className={styles.historyP}>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum similique reprehenderit odit ut, totam aperiam voluptatum possimus debitis. Quisquam, in.
							</p>
						</div>
					</div>
				</section>
			</div>
			<div className={styles.line}>
				<section className={layout.section}>
					<div className={layout.sectionInfo}>
						<h2 className={styles.historyH2}>
							Lorem ipsum dolor sit <br className={styles.historyBr} /> consectetur elit. Veniam!
						</h2>
						<p className={styles.historyP}>lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum similique reprehenderit odit ut, totam aperiam voluptatum possimus debitis. Quisquam, in.</p>
					</div>
					<div className={layout.sectionImg}>
						<img src={eusebio} alt='card' className={styles.historyImgEusebio} />
					</div>
				</section>
			</div>
			<div className={styles.line}>
				<section id='product' className={layout.sectionReverse}>
					<div className={layout.sectionImgReverse}>
						<img src={conquistasimportantes} alt='billing' className={styles.historyImg} />
					</div>
					<div className={styles.historyDivText}>
						<div className={layout.sectionInfo}>
							<h2 className={styles.historyH2}>
								Lorem, ipsum dolor.
								<br className={styles.historyBr} /> Lorem, ipsum dolor.
							</h2>
							<p className={styles.historyP}>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum similique reprehenderit odit ut, totam aperiam voluptatum possimus debitis. Quisquam, in.
							</p>
						</div>
					</div>
				</section>
			</div>
			<div className={styles.line}>
				<section className={layout.section}>
					<div className={layout.sectionInfo}>
						<h2 className={styles.historyH2}>
							Lorem ipsum dolor sit <br className={styles.historyBr} /> consectetur elit. Veniam!
						</h2>
						<p className={styles.historyP}>lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum similique reprehenderit odit ut, totam aperiam voluptatum possimus debitis. Quisquam, in.</p>
					</div>
					<div className={layout.sectionImg}>
						<img src={velhoestadio} alt='card' className={styles.historyImg2} />
					</div>
				</section>
			</div>
			<div className={styles.line}>
				<section id='product' className={layout.sectionReverse}>
					<div className={layout.sectionImgReverse}>
						<img src={entradaJ} alt='billing' className={styles.historyImg} />
					</div>
					<div className={styles.historyDivText}>
						<div className={layout.sectionInfo}>
							<h2 className={styles.historyH2}>
								Lorem, ipsum dolor. <br className={styles.historyBr} /> Lorem, ipsum dolor.
							</h2>
							<p className={styles.historyP}>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum similique reprehenderit odit ut, totam aperiam voluptatum possimus debitis. Quisquam, in.
							</p>
						</div>
					</div>
				</section>
			</div>
			<div className={styles.line}>
				<section className={layout.section}>
					<div className={layout.sectionInfo}>
						<h2 className={styles.historyH2}>
							Lorem ipsum dolor sit <br className={styles.historyBr} /> consectetur elit. Veniam!
						</h2>
						<p className={styles.historyP}>lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum similique reprehenderit odit ut, totam aperiam voluptatum possimus debitis. Quisquam, in.</p>
					</div>
					<div className={layout.sectionImg}>
						<img src={benficacampeao} alt='card' className={styles.historyImg2} />
					</div>
				</section>
			</div>
		</div>
	);
};

export default History;
