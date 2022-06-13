import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Tobias Rosa | Frontend Developer</title>
				<meta
					name='description'
					content='A portfolio as a frontend developer focused on performance, SEO and UX.'
				/>
			</Head>
			<div className='container mx-auto'>
				<span>Tobias Rosa</span>
				<a href='#'>teste</a>
			</div>
		</>
	);
};

export default Home;
