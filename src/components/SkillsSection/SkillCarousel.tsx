import Image from 'next/image';
import { allSkills } from '/src/data/skills';
import 'react-indiana-drag-scroll/dist/style.css';
import { useScrollContainer } from 'react-indiana-drag-scroll';

const SkillCarousel = () => {
	const scrollContainer = useScrollContainer();

	return (
		<div
			className='flex overflow-x-scroll lg:overflow-x-hidden p-6 w-full rounded-lg gap-3 h-42'
			ref={scrollContainer.ref}
			id='skills'
		>
			{allSkills.map(skill => (
				<div
					key={skill.name}
					className='flex-[0_0_100%] p-6 rounded-lg h-[22rem] flex flex-col items-center justify-between bg-[rgba(33,_33,_33,_0.50)] max-w-[330px]'
					style={{ scrollSnapAlign: 'start' }}
				>
					<div className='flex flex-col items-center justify-between h-32  min-h-[8rem]'>
						<div className='flex-1 flex items-center justify-center'>
							<Image
								src={skill.image}
								alt={skill.name}
								style={{ height: 'auto', width: '96px', margin: 'auto' }}
							/>
						</div>
						<h5 className='font-bold pt-3 text-center'>{skill.name}</h5>
					</div>
					<div className='h-full pt-5'>
						<p className='text-sm'>{skill.description}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default SkillCarousel;
