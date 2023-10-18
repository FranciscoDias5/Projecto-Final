import styles, { layout } from '../style';
import { emiratesimg, sagresimg, cocacolaimg, estadionoite } from '../assets';
import Hero from '../components/Hero';
import { partners } from '../constants';

const Partners = () => {
	return (
		<div>
			<Hero />
			<div className={styles.line}></div>
			<div className={styles.partnerCenter}>
				<div className={styles.partnerTitle}>Patrocinadores Benfica</div>
			</div>
			<section className={styles.partnerSection}>
				<div className={styles.partnerDivText}>
					<div className={styles.partnerDiv1}>
						{partners.slice(0, 4).map(partner => (
							<div key={partner.id} className={styles.partnerKey1}>
								<img src={partner.logo} alt='client' className={styles.partnerKeyImg1} />
							</div>
						))}
					</div>
				</div>
			</section>
			<section className={styles.partnerSection}>
				<div className={styles.partnerDiv2}>
					{partners.slice(4).map(partner => (
						<div key={partner.id} className={styles.partnerKey2}>
							<img src={partner.logo} alt='client' className={styles.partnerKeyImg2} />
						</div>
					))}
				</div>
			</section>
			<div className={styles.line}>
				<section id='product' className={layout.sectionReverse}>
					<div className={layout.sectionImgReverse}>
						<img src={emiratesimg} alt='billing' className={styles.partnerImg} />
					</div>
					<div className={styles.partnerDivText}>
						<div className={layout.sectionInfo}>
							<h2 className={styles.partnerH2}>
								Lorem, ipsum dolor. <br className={styles.partnerBr} /> Lorem, ipsum dolor.
							</h2>
							<p className={styles.partnerP}>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum similique reprehenderit odit ut, totam aperiam voluptatum possimus debitis. Quisquam, in.
							</p>
						</div>
					</div>
				</section>
			</div>
			<div className={styles.line}>
				<section className={layout.section}>
					<div className={layout.sectionInfo}>
						<h2 className={styles.partnerH2}>
							Lorem ipsum dolor sit <br className={styles.partnerBr} /> consectetur elit. Veniam!
						</h2>
						<p className={styles.partnerP}>lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum similique reprehenderit odit ut, totam aperiam voluptatum possimus debitis. Quisquam, in.</p>
					</div>
					<div className={layout.sectionImg}>
						<img src={sagresimg} alt='card' className={styles.partnerImg2} />
					</div>
				</section>
			</div>
			<div className={styles.line}>
				<section id='product' className={layout.sectionReverse}>
					<div className={layout.sectionImgReverse}>
						<img src={cocacolaimg} alt='billing' className={styles.partnerImg} />
					</div>
					<div className={styles.partnerDivText}>
						<div className={layout.sectionInfo}>
							<h2 className={styles.partnerH2}>
								Lorem, ipsum dolor.
								<br className={styles.partnerBr} /> Lorem, ipsum dolor.
							</h2>
							<p className={styles.partnerP}>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum similique reprehenderit odit ut, totam aperiam voluptatum possimus debitis. Quisquam, in.
							</p>
						</div>
					</div>
				</section>
			</div>
			<div className={styles.line}>
				<section className={layout.section}>
					<div className={layout.sectionInfo}>
						<h2 className={styles.partnerH2}>
							Find a better card deal <br className={styles.partnerBr} /> consectetur elit. Veniam!
						</h2>
						<p className={styles.partnerP}>lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum similique reprehenderit odit ut, totam aperiam voluptatum possimus debitis. Quisquam, in.</p>
					</div>
					<div className={layout.sectionImg}>
						<img src={estadionoite} alt='card' className={styles.partnerImg2} />
					</div>
				</section>
			</div>
		</div>
	);
};

export default Partners;
