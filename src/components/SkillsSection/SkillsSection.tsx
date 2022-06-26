import React from 'react';
import CardCarousel from './CardCarousel';
import { frontendSkills } from '/src/data/skills';

const SkillsSection: React.FC = () => {
	const frontEndSkillsCount = Array.from(Array(frontendSkills.length).keys())

	return (
		<div className='flex flex-col'>
			<div>
				<CardCarousel cardsCount={frontEndSkillsCount} />
				{/* <p className='text-center'>SASS</p>
				<p className='text-center'>SEO</p> */}
			</div>
			<div>
				{/* <CardCarousel cards={frontendSkills} /> */}
				{/* <p className='text-center'>SASS</p>
				<p className='text-center'>SEO</p> */}
			</div>
			<div>
				{/* <CardCarousel cards={frontendSkills} /> */}
				{/* <p className='text-center'>SASS</p>
				<p className='text-center'>SEO</p> */}
			</div>
			{/* <div>
				<p className='text-center'>Typescript</p>
				<p className='text-center'>GraphQL</p>
				<p className='text-center'>API&apos;s</p>
				<p className='text-center'>Jest</p>
			</div>
			<div>
				<p className='text-center'>AWS</p>
				<p className='text-center'>Docker</p>
				<p className='text-center'>Webpack</p>
			</div> */}
		</div>
	);
};

export default SkillsSection;
