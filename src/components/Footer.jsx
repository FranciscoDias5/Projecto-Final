import styles from '../style';
import { btvlogo } from '../assets';
import { footerLinks, socialMedia } from '../constants';

const Footer = () => (
	<section className={styles.footerSection}>
		<div className={styles.footerDiv1}>
			<div className={styles.footerDiv2}>
				<img src={btvlogo} alt='benfica' className={styles.footerLogo} />
				<p className={styles.footerP}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus!</p>
			</div>
			<div className={styles.footerDivMap}>
				{footerLinks.map((footerLink, index) => (
					<div key={index} className={styles.footerKey}>
						<h4 className={styles.footerH4}>{footerLink.title}</h4>
						<ul className={styles.footerUl}>
							{footerLink.links.map((link, index) => (
								<li key={index} className={`${styles.footerLi} ${index !== footerLink.links.length - 1 ? 'mb-4' : 'mb-0'}`}>
									{link.name}
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</div>
		<div className={styles.line}>
			<p className={styles.footerP2}>2023 Benfica FD. All Rights Reserved.</p>
			<div className={styles.footerDivSM}>
				{socialMedia.map((social, index) => (
					<img key={social.id} src={social.icon} alt={social.id} className={`${styles.footerKeySM} ${index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'}`} />
				))}
			</div>
		</div>
	</section>
);

export default Footer;
