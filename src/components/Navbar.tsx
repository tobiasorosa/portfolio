const Navbar = () => {
	return (
		<div className='w-full h-12 bg-gray-700'>
			<div className='mx-auto h-full flex items-center justify-center gap-4'>
				<a href='#about' className='h-fit'>
					About
				</a>
				<a href='#skills' className='h-fit'>
					Skills
				</a>
				<a href='#exp' className='h-fit'>
					Experience
				</a>
			</div>
		</div>
	);
};

export default Navbar;
