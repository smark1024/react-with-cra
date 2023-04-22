import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import MainScene from './components/MainScene';
import PostListScene from './components/PostListScene';
import PostDetailScene from './components/PostDetailScene';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Router>
			<Routes>
				<Route exact path='/' element={<MainScene />} />
				<Route exact path='/posts' element={<PostListScene />} />
				<Route path='/posts/:postId' element={<PostDetailScene />} />
				<Route path='*' element={
					<p>404 not found</p>
				}>
				</Route>
			</Routes>
		</Router>
	</React.StrictMode>
);

reportWebVitals();
