import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import SkillCard, { ISkillCardProps } from './SkillCard';
import { ArrowLeft, ArrowRight } from 'public/icons';
import useEmblaCarousel from 'embla-carousel-react';

interface ICarouselProps {
	data: ISkillCardProps[];
}

const CardCarousel: React.FC<ICarouselProps> = ({ data }: ICarouselProps) => {
	const [emblaRef] = useEmblaCarousel();

	return (
		<div className='flex flex-row align-center justify-center'>
			{/* <button className='shadow-md	bg-amber-100 rounded-md w-8 h-8 my-auto'>
				<Image src={ArrowLeft} alt='Left arrow icon' />
			</button> */}
			<div className='mx-5' ref={emblaRef}>
				{data.map((item, index) => (
					<SkillCard {...item} key={item.name} />
				))}
			</div>
			{/* <button className='shadow-lg	bg-amber-100 rounded-md w-8 h-8 my-auto'>
				<Image src={ArrowRight} alt='Right arrow icon' />
			</button> */}
		</div>
	);
};

export default CardCarousel;
