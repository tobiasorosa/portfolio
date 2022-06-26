import React from 'react';
import { ArrowLeft, ArrowRight } from 'public/icons';
import Image from 'next/image';

interface IButtonProps {
	enabled: boolean;
	onClick: () => void | undefined;
}

export const PrevButton = ({ enabled, onClick }: IButtonProps) => (
	<button
		className='shadow-md	bg-amber-100 rounded-md w-8 h-8 my-auto'
		onClick={onClick}
		disabled={!enabled}
	>
		<Image src={ArrowLeft} alt='Left arrow icon' />
	</button>
);

export const NextButton = ({ enabled, onClick }: IButtonProps) => (
	<button
		className='shadow-lg	bg-amber-100 rounded-md w-8 h-8 my-auto'
		onClick={onClick}
		disabled={!enabled}
	>
		<Image src={ArrowRight} alt='Right arrow icon' />
	</button>
);
