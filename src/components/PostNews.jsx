import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from '../style';

const PostNews = ({ action, id, title, body, onTitleChange, onBodyChange, onSubmit }) => {
	const navigate = useNavigate();
	const handleSubmit = async e => {
		e.preventDefault();
		if (action === 'delete') {
			onSubmit();
			return;
		}
		let url = 'http://localhost:5000/posts';
		let method = action === 'update' ? 'PUT' : 'POST';
		if (action === 'update') {
			url += `/${id}`;
		}
		try {
			const response = await fetch(url, {
				method: method,
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ title, body }),
			});
			if (response.ok) {
				navigate('/');
			} else {
				console.error(`Failed to ${action} post. Status: ${response.status}`);
			}
		} catch (error) {
			console.error('An error occurred:', error);
		}
	};
	return (
		<section className={styles.postNews}>
			<div className={styles.postContainer}>
				<form onSubmit={handleSubmit} className={styles.postForm}>
					<h3 className={styles.postTitle}> {action === 'update' ? 'Update Post' : action === 'delete' ? 'Delete Post' : 'Create Post'}</h3>
					<div className={styles.postDiv}>
						<label className={styles.postLabel}>Título</label>
						<input className={styles.postInput} type='text' value={title} onChange={e => onTitleChange(e.target.value)} required />
					</div>
					<div className={styles.postDiv}>
						<label className={styles.postLabel}>Texto</label>
						<textarea className={styles.postTextArea} value={body} onChange={e => onBodyChange(e.target.value)} required />
					</div>
					<div className={styles.postDivCenter}>
						{action === 'delete' ? (
							<>
								<button className={styles.postBtns} type='button' onClick={onSubmit}>
									Delete
								</button>
								<button className={styles.postBtns} type='button' onClick={() => navigate('/')}>
									Cancel
								</button>
							</>
						) : (
							<>
								<button className={styles.postBtns} type='submit'>
									{action === 'update' ? 'Update' : 'Submit'}
								</button>
								<button className={styles.postBtns} type='button' onClick={() => navigate('/')}>
									Cancel
								</button>
							</>
						)}
					</div>
				</form>
			</div>
		</section>
	);
};

PostNews.propTypes = {
	action: PropTypes.oneOf(['create', 'update', 'delete']).isRequired,
	id: PropTypes.number,
	title: PropTypes.string.isRequired,
	body: PropTypes.string.isRequired,
	onTitleChange: PropTypes.func.isRequired,
	onBodyChange: PropTypes.func.isRequired,
	onSubmit: PropTypes.func.isRequired,
};

export default PostNews;
