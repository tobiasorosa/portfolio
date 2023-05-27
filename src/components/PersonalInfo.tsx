import Image from 'next/image';
import React from 'react';
import MyPhoto from 'public/img/profile_portrait.jpeg';
import Link from 'next/link';

const PersonalInfo = () => {
	return (
		<div className='flex flex-col pt-12'>
			<div className='flex flex-col w-full justify-between'>
				<div className='max-w-md w-full relative pb-5'>
					<Image
						src={MyPhoto}
						alt={'Profile photo'}
						style={{
							maxHeight: '400px',
							objectFit: 'cover',
							objectPosition: 'center',
						}}
					/>
				</div>

				<div className='px-5 text-justify pb-5'>
					<h2 className='pb-2'>
						My name is <strong>Tobias Rosa</strong>, but you can call me Tobbs,{' '}
						<span className='italic'>Tobaias</span> or any way you might want
						to.
					</h2>
					<p>
						I am a fullstack developer from Brazil who likes to make beautiful
						and, most importantly, with great performance.
					</p>
					<p>
						Currently working as a developer for{' '}
						<Link
							href='https://threeoitcompany.com.br/'
							target='_blank'
							rel='noopener'
						>
							Threeo IT
						</Link>
						, I started my Web Development career in late <strong>2021</strong>{' '}
						at{' '}
						<Link
							href='https://www.idinheiro.com.br/'
							target='_blank'
							rel='noopener'
						>
							iDinheiro
						</Link>
						, where I learned most of my knowledge with SEO and how speed and
						performance is for a website. Since then I&apos;ve been learning and
						reading the most I can, in order to make even better pages for
						users.
					</p>
				</div>
			</div>
		</div>
	);
};

export default PersonalInfo;
