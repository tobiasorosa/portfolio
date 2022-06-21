import React from 'react';
import Image from 'next/image';

export interface ISkillCardProps {
	name: string;
	image: typeof import('*.png');
	description: string;
}

const SkillCard: React.FC<ISkillCardProps> = ({
	name,
	image,
	description,
}: ISkillCardProps) => {
	return (
		<div className='max-w-xs'>
			<div className='flex justify-center'>
				<Image
					src={image}
					alt={name}
					objectFit='contain'
					width={55}
					height={55}
				/>
			</div>
			<p className='font-bold text-center mt-4'>{name}</p>
			<p className='text-sm text-justify mt-2'>{description}</p>
		</div>
	);
};

export default SkillCard;
