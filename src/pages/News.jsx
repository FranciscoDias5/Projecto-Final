import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import styles from '../style';

const News = () => {
	const [posts, setPosts] = useState([]);
	const [error, setError] = useState(null);
	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const response = await fetch('http://localhost:5000/posts');
				if (!response.ok) {
					throw new Error('Network response foi nos piriquitos :(');
				}
				const data = await response.json();
				const sortedData = data.sort((a, b) => b.id - a.id);
				setPosts(sortedData);
			} catch (error) {
				setError(error);
			}
		};
		fetchPosts();
	}, []);

	return (
		<section id='blog' className={styles.news}>
			<Hero />
			<div className={styles.newsContainer}>
				<div className={styles.newsWrapper}>
					<div className={styles.newsHeader}>
						<h2 className={styles.newsTitle}>
							novas notícias ao{' '}
							<Link to={`/create`} className={styles.newsPostings}>
								minuto...
							</Link>
						</h2>
					</div>
					<div className={styles.newsPosts}>
						{error && <h4>{error.message}</h4>}
						{posts.map(post => (
							<article className={styles.newsPost} key={post.id}>
								<h3 className={styles.newsH3}>
									{post.id} - {post.title}
								</h3>
								<p className={styles.newsP}>
									<span className={styles.newsBlackText}>{post.body}</span>
								</p>
								<Link to={`/update/${post.id}`} className={styles.newsBtn}>
									Update
								</Link>
								<Link to={`/delete/${post.id}`} className={styles.newsBtn}>
									Delete
								</Link>
							</article>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default News;
