import Image from 'next/image';
import { GithubIcon, InstagramIcon, LinkedinIcon } from '/public/icons';
import Link from 'next/link';

const Footer = () => {
	return (
		<div className='h-36 bg-[#141726] shadow-md'>
			<ul className='flex items-center h-full justify-center gap-10'>
				<li>
					<Link
						href='https://linkedin.com/in/tobias-oliveira-rosa'
						target='blank'
					>
						<Image
							src={LinkedinIcon}
							alt='Linkedin link'
							height={70}
							className='hover:scale-125 transition-all'
						/>
					</Link>
				</li>
				<li>
					<Link href='https://www.instagram.com/tubia_rosa/' target='blank'>
						<Image
							src={InstagramIcon}
							alt='Linkedin link'
							height={70}
							className='hover:scale-125 transition-all'
						/>
					</Link>
				</li>
				<li>
					<Link href='https://github.com/tobiasorosa' target='blank'>
						<Image
							src={GithubIcon}
							alt='Linkedin link'
							height={70}
							className='hover:scale-125 transition-all'
						/>
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Footer;
