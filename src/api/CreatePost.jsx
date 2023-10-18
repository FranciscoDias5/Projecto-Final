import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePosts } from '../hooks/usePosts';
import PostNews from '../components/PostNews';

const CreatePost = () => {
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const navigate = useNavigate();
	const { dispatch } = usePosts();

	const handleSubmit = async e => {
		e.preventDefault();
		try {
			const response = await fetch('http://localhost:5000/posts', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ title, body }),
			});

			const data = await response.json();
			console.log(data);

			dispatch({ type: 'CREATE_POST', payload: data });

			alert('novo post criado');
			navigate('/');
		} catch (error) {
			console.error('Erro ao criar post:', error);
		}
	};

	return (
		<>
			<PostNews action='create' id={null} title={title} body={body} onTitleChange={setTitle} onBodyChange={setBody} onSubmit={handleSubmit} />
		</>
	);
};

export default CreatePost;
