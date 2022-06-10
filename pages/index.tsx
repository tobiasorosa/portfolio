import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

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
			<div className='container m-auto'>Teste</div>
		</>
	);
};

export default Home;
