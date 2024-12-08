import { FiCheck } from 'react-icons/fi'
import aboutImg from '../../assets/about-img.jpg'
import './About.css'
function About() {
	return (
		<section className='about section' id='about'>
			<div className='container about__grid grid'>
				<div className='about__img-wrapper'>
					<img src={aboutImg} alt='Our professionals' className='about__img' />
				</div>

				<div className='about__content'>
					<h2 className='section__title title-left' data-title='About Us'>
						Fresh Qualily And Organic Tasly Coffee House For You
					</h2>

					<p className='about__description'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
						ducimus, enim quo aliquid magni reprehenderit fugit nobis maxime
						exercitationem architecto dolor nostrum quia sunt sit praesentium
						nemo velit libero consectetur provident. Necessitatibus impedit
					</p>

					<div className='about__details grid'>
						<p className='about__details-description'>
							<FiCheck />
							At vero eos et accusamus et iusto odio.
						</p>
						<p className='about__details-description'>
							<FiCheck />
							Established fact that a reader will be distracted
						</p>
						<p className='about__details-description'>
							<FiCheck />
							Sed ut perspiciatis unde omnis iste natus sit
						</p>
					</div>

					<a href='#team' className='btn'>
						Our Experts
					</a>
				</div>
			</div>
		</section>
	)
}

export default About
