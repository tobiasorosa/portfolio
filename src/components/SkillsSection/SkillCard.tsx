import React from 'react';
import Image from 'next/image';
import {
	getOtherSkillsByIndex,
	getBackendSkillsByIndex,
	getFrontendSkillsByIndex,
} from './getSkills';

export interface ISkillCardProps {
	index: number;
	skillType: 'frontend' | 'backend' | 'other';
}

const SkillCard: React.FC<ISkillCardProps> = ({
	index,
	skillType,
}: ISkillCardProps) => {
	const skill =
		skillType === 'frontend'
			? getFrontendSkillsByIndex(index)
			: skillType === 'backend'
			? getBackendSkillsByIndex(index)
			: getOtherSkillsByIndex(index);

	return (
		<div className='max-w-xs'>
			<div className='flex justify-center'>
				<Image
					src={skill.image}
					alt={skill.name}
					objectFit='contain'
					width={55}
					height={55}
				/>
			</div>
			<p className='font-bold text-center mt-4'>{skill.name}</p>
			<p className='text-sm text-justify mt-2'>{skill.description}</p>
		</div>
	);
};

export default SkillCard;
