import React, { useCallback, useEffect } from 'react';
import { useState } from 'react';
import SkillCard, { ISkillCardProps } from './SkillCard';
import useEmblaCarousel from 'embla-carousel-react';
import { NextButton, PrevButton } from './CardCarouselButtons';

interface ICarouselProps {
	cardsCount: number[];
	skill: 'frontend' | 'backend' | 'architecture';
}

const SCALE_FACTOR = 3;

const numberWithinRange = (number: number, min: number, max: number) =>
	Math.min(Math.max(number, min), max);

const CardCarousel: React.FC<ICarouselProps> = ({
	cardsCount,
	skill,
}: ICarouselProps) => {
	const [emblaRef, embla] = useEmblaCarousel({
		loop: false,
		skipSnaps: false,
	});

	const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
	const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
	const [scaleValues, setScaleValues] = useState<number[]>([]);

	const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
	const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

	const onSelect = useCallback(() => {
		if (!embla) return;
		setPrevBtnEnabled(embla.canScrollPrev());
		setNextBtnEnabled(embla.canScrollNext());
	}, [embla]);

	const onScroll = useCallback(() => {
		if (!embla) return;

		const engine = embla.internalEngine();
		const scrollProgress = embla.scrollProgress();

		const styles = embla.scrollSnapList().map((scrollSnap, index) => {
			if (!embla.slidesInView().includes(index)) return 0;
			let diffToTarget: number = scrollSnap - scrollProgress;

			if (engine.options.loop) {
				engine.slideLooper.loopPoints.forEach(loopItem => {
					const target = loopItem.getTarget();
					if (index === loopItem.index && target !== 0) {
						const sign = Math.sign(target);
						if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
						if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
					}
				});
			}
			const scale = 1 - Math.abs(diffToTarget * SCALE_FACTOR);
			return numberWithinRange(scale, 0, 1);
		});
		setScaleValues(styles);
	}, [embla, setScaleValues]);

	useEffect(() => {
		if (!embla) return;
		onSelect();
		onScroll();
		embla.on('select', onSelect);
		embla.on('scroll', onScroll);
		embla.on('resize', onScroll);
	}, [embla, onSelect, onScroll]);

	return (
		<div className='flex flex-row align-center justify-center px-6'>
			<PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
			<div className='mx-5 overflow-hidden max-w-sm w-full' ref={emblaRef}>
				<div className='flex select-none'>
					{cardsCount.map(index => (
						<div className='min-w-full relative' key={index}>
							<div
								className='relative h-190 flex items-center justify-center overflow-hidden origin-center'
								style={{ transform: `scale(${scaleValues[index]})` }}
							>
								<SkillCard index={index} skillType={skill} />
							</div>
						</div>
					))}
				</div>
			</div>
			<NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
		</div>
	);
};

export default CardCarousel;
