import { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import { postReducer } from './Reducer';

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
	const [state, dispatch] = useReducer(postReducer, []);

	return <PostContext.Provider value={{ posts: state, dispatch }}>{children}</PostContext.Provider>;
};

PostProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
