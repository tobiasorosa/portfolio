const Navbar = () => {
	return (
		<nav className='w-full h-12 bg-gray-700 fixed top-0 left-0 shadow-md z-50'>
			<div className='mx-auto h-full flex items-center justify-center gap-4'>
				<a href='#home' className='h-fit'>
					Home
				</a>
				<a href='#skills' className='h-fit'>
					Skills
				</a>
				<a href='#experience' className='h-fit'>
					Experience
				</a>
				<a href='#about' className='h-fit'>
					About
				</a>
			</div>
		</nav>
	);
};

export default Navbar;
