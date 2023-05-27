import React from 'react';
import type { NextPage } from 'next';

import Head from 'next/head';
import SkillsSection from 'src/components/SkillsSection/SkillsSection';
import PersonalInfo from '../components/PersonalInfo';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import SkillCarousel from '../components/SkillsSection/SkillCarousel';

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
			<Navbar />
			<div className='container mx-auto mt-20'>
				<Header />
				<SkillCarousel />
				{/* <SkillsSection /> */}
				<PersonalInfo />
			</div>
		</>
	);
};

export default Home;
