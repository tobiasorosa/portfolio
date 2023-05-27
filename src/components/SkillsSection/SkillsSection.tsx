import React from 'react';
import CardCarousel from './CardCarousel';
import { allSkills } from '/src/data/skills';

const SkillsSection: React.FC = () => {
	const skillsCount = Array.from(Array(allSkills.length).keys());
	console.log(skillsCount);

	return (
		<div className='flex flex-col' id='skills'>
			<div>
				<CardCarousel cardsCount={skillsCount} skill='all' />
			</div>
		</div>
	);
};

export default SkillsSection;
