import Image from 'next/image';
import { backendSkills, frontendSkills, otherSkills } from '/src/data/skills';
import { createRef, useState } from 'react';

const SkillCarousel = () => {
	const [clientX, setClientX] = useState(0);
	const [scrollX, setScrollX] = useState(0);
	const [isScrolling, setIsScrolling] = useState(false);
	
	const ref = createRef<HTMLDivElement>();

	const onMouseDown = (e: MouseEvent) => {
		setIsScrolling(true);
		setClientX(e.clientX);
	};

	const onMouseUp = () => {
		setIsScrolling(false);
	};

	const onMouseMove = (e: MouseEvent) => {
		if (isScrolling && ref.current !== null) {
			ref.current.scrollLeft = scrollX + e.clientX - clientX;
			setScrollX(scrollX + e.clientX - clientX);
			setClientX(e.clientX);
		}
	};

	const skillList = backendSkills.concat(frontendSkills).concat(otherSkills);

	return (
		<div
			className='flex overflow-x-scroll p-6 w-80 rounded-lg gap-3'
			style={{ scrollSnapType: 'x mandatory', scrollPadding: '1.5rem' }}
			ref={ref}
		>
			{skillList.map(skill => (
				<div
					key={skill.name}
					className='flex-[0_0_100%] p-6 rounded-lg'
					style={{ scrollSnapAlign: 'start' }}
				>
					<Image src={skill.image} alt={skill.name} />
				</div>
			))}
		</div>
	);
};

export default SkillCarousel;
