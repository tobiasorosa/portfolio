import Image from 'next/image';

export interface ISkillCardProps {
	name: string;
	image: typeof import('*.png');
	description: string;
}

const SkillCard = ({ name, image, description }: ISkillCardProps) => {
	return (
		<div className='max-w-sm'>
			<Image src={image} alt={name} width={64} height={64} />
			<p className='font-bold text-center'>{name}</p>
			<p className='text-sm text-justify'>{description}</p>
		</div>
	);
};

export default SkillCard;
