import React from 'react';
import CardCarousel from './CardCarousel';
import { otherSkills, backendSkills, frontendSkills } from '/src/data/skills';

const SkillsSection: React.FC = () => {
	const otherSkillsCount = Array.from(Array(otherSkills.length).keys());
	const backEndSkillsCount = Array.from(Array(backendSkills.length).keys());
	const frontEndSkillsCount = Array.from(Array(frontendSkills.length).keys());

	return (
		<div className='flex flex-col'>
			<div>
				<CardCarousel cardsCount={frontEndSkillsCount} skill='frontend' />
			</div>
			<div>
				<CardCarousel cardsCount={backEndSkillsCount} skill='backend' />
			</div>
			<div>
				<CardCarousel cardsCount={otherSkillsCount} skill='other' />
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
