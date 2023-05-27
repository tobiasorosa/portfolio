import Image from 'next/image';
import MyPhoto from 'public/img/portrait.jpeg';

const Header = () => {
	return (
		<div id='home'>
			<div className='w-full flex flex-col items-center justify-center py-10'>
				<div className='w-36 h-36 rounded-full overflow-hidden'>
					<Image
						src={MyPhoto}
						alt={'Profile photo'}
						className='scale-175'
						style={{
							objectFit: 'cover',
							objectPosition: 'center',
						}}
					/>
				</div>
			</div>
			<div className='max-w-lg mx-auto mb-10'>
				<div className='container px-6 max-w-xl pb-4'>
					<p className='text-lg'>Hello! I am</p>
					<h1 className='text-5xl font-bold text-center py-2'>Tobias Rosa</h1>
					<h2 className='text-right text-xl italic'>a Frontend Engineer</h2>
				</div>
				<div>
					<p className='pt-8 sm:text-lg px-6 xs:text-sm'>
						With experience in most modern web frameworks and technologies, I
						can make fast websites with great accessbility and SEO focused.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Header;
