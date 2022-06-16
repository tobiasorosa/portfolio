import CardCarousel from './CardCarousel';
import { frontendSkills } from '/src/data/skills';

const SkillsSection = () => {
	return (
		<div className='columns-3 mt-32'>
			<div>
				<CardCarousel data={frontendSkills} />
				{/* <p className='text-center'>SASS</p>
				<p className='text-center'>SEO</p> */}
			</div>
			<div>
				<CardCarousel data={frontendSkills} />
				{/* <p className='text-center'>SASS</p>
				<p className='text-center'>SEO</p> */}
			</div>
			<div>
				<CardCarousel data={frontendSkills} />
				{/* <p className='text-center'>SASS</p>
				<p className='text-center'>SEO</p> */}
			</div>
			{/* <div>
				<p className='text-center'>Typescript</p>
				<p className='text-center'>GraphQL</p>
				<p className='text-center'>API&apos;s</p>
				<p className='text-center'>Jest</p>
			</div>
			<div>
				<p className='text-center'>AWS</p>
				<p className='text-center'>Docker</p>
				<p className='text-center'>Webpack</p>
			</div> */}
		</div>
	);
};

export default SkillsSection;
