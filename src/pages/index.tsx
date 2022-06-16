import type { NextPage } from 'next';
import Head from 'next/head';
import SkillsSection from 'src/components/SkillsSection/SkillsSection';

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
				<div className='max-w-lg mx-auto'>
					<div className='container px-6 pt-8 max-w-xl pb-4'>
						<p className='text-lg'>Hello! I am</p>
						<h1 className='text-5xl font-bold text-center py-2'>Tobias Rosa</h1>
						<h2 className='text-right text-xl italic'>a Frontend Engineer</h2>
					</div>
					<div>
						<p className='pt-8 sm:text-lg px-6 xs:text-sm'>
							With experience in Next.js, I can make fast websites with great
							SEO rankings.
						</p>
					</div>
				</div>
				<SkillsSection />
			</div>
		</>
	);
};

export default Home;
