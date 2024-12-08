import chef1 from '../../assets/team-1.jpg'
import chef2 from '../../assets/team-2.jpg'
import chef3 from '../../assets/team-3.jpg'
import chef4 from '../../assets/team-4.jpg'

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import './Team.css'

function Team() {
	return (
		<section className='team section' id='team'>
			<h2 className='section__title' data-title='Chefs'>
				Meet Our Experts
			</h2>

			<div className='container team__grid grid'>
				<div className='team__item'>
					<img className='team__img' src={chef1} alt='' />

					<div className='team__data'>
						<h3 className='team__title'>Malissa Fie</h3>
						<p className='team__job'>Senior Chef</p>
					</div>
					<div className='team__socials'>
						<a className='team__social-link' href='/'>
							<FaFacebookF />
						</a>
						<a className='team__social-link' href='/'>
							<FaTwitter />
						</a>
						<a className='team__social-link' href='/'>
							<FaYoutube />
						</a>
						<a className='team__social-link' href='/'>
							<FaLinkedinIn />
						</a>
					</div>
				</div>
				<div className='team__item'>
					<img className='team__img' src={chef2} alt='' />

					<div className='team__data'>
						<h3 className='team__title'>Chad Smith</h3>
						<p className='team__job'>Senior Chef</p>
					</div>
					<div className='team__socials'>
						<a className='team__social-link' href='/'>
							<FaFacebookF />
						</a>
						<a className='team__social-link' href='/'>
							<FaTwitter />
						</a>
						<a className='team__social-link' href='/'>
							<FaYoutube />
						</a>
						<a className='team__social-link' href='/'>
							<FaLinkedinIn />
						</a>
					</div>
				</div>
				<div className='team__item'>
					<img className='team__img' src={chef3} alt='' />

					<div className='team__data'>
						<h3 className='team__title'>Arron Rodri</h3>
						<p className='team__job'>Senior Chef</p>
					</div>
					<div className='team__socials'>
						<a className='team__social-link' href='/'>
							<FaFacebookF />
						</a>
						<a className='team__social-link' href='/'>
							<FaTwitter />
						</a>
						<a className='team__social-link' href='/'>
							<FaYoutube />
						</a>
						<a className='team__social-link' href='/'>
							<FaLinkedinIn />
						</a>
					</div>
				</div>
				<div className='team__item'>
					<img className='team__img' src={chef4} alt='' />

					<div className='team__data'>
						<h3 className='team__title'>Teny Pinto</h3>
						<p className='team__job'>Senior Chef</p>
					</div>
					<div className='team__socials'>
						<a className='team__social-link' href='/'>
							<FaFacebookF />
						</a>
						<a className='team__social-link' href='/'>
							<FaTwitter />
						</a>
						<a className='team__social-link' href='/'>
							<FaYoutube />
						</a>
						<a className='team__social-link' href='/'>
							<FaLinkedinIn />
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Team
