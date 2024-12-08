import logo from '../../assets/logo.png'
import {
	FaRegEnvelope,
	FaCaretRight,
	FaFacebookF,
	FaTwitter,
	FaLinkedinIn,
	FaYoutube,
} from 'react-icons/fa6'

import { AiOutlinePhone } from 'react-icons/ai'
import { MdOutlineLocationOn } from 'react-icons/md'

import './Footer.css'

function Footer() {
	return (
		<footer className='footer'>
			<div className='footer__grid grid container'>
				<div className='footer__content'>
					<a href='/' className='footer__logo'>
						<img src={logo} alt='Coffera' />
					</a>
					<p className='footer__desc'>
						We are many variations of passages available but the majority have
						suffered alteration in some form by injected humour words which
						dont`t look even slightly believable.
					</p>

					<ul className='footer__contact-list'>
						<li className='footer__contact-item'>
							<a className='footer__contact-link' href='tel:+944708108151'>
								<AiOutlinePhone className='icon' /> +944 70 810 81 51
							</a>
						</li>
						<li className='footer__contact-item'>
							<MdOutlineLocationOn className='icon' /> Masazir kendi ev 13
						</li>
						<li className='footer__contact-item'>
							<a
								className='footer__contact-link'
								href='tel:heli25851@gmail.com'
							>
								<FaRegEnvelope className='icon' /> heli25851@gmail.com
							</a>
						</li>
					</ul>
				</div>

				<div className='footer__content'>
					<h3 className='footer__title'>Quick Links</h3>

					<ul className='footer__links'>
						<li>
							<a href='#about' className='footer__link'>
								<FaCaretRight className='icon' /> About Us
							</a>
						</li>
						<li>
							<a href='#menu' className='footer__link'>
								<FaCaretRight className='icon' /> Menu
							</a>
						</li>
						<li>
							<a href='#features' className='footer__link'>
								<FaCaretRight className='icon' /> Features
							</a>
						</li>
						<li>
							<a href='#gallery' className='footer__link'>
								<FaCaretRight className='icon' /> Gallery
							</a>
						</li>
						<li>
							<a href='#team' className='footer__link'>
								<FaCaretRight className='icon' /> Team
							</a>
						</li>
						<li>
							<a href='#reservation' className='footer__link'>
								<FaCaretRight className='icon' /> Reservation
							</a>
						</li>
					</ul>
				</div>

				<div className='footer__content'>
					<h3 className='footer__title'>Opening Hours</h3>
					<div className='footer__opening-hour'>
						<ul className='footer__hour-list'>
							<li className='footer__hour-item'>
								<span>Saturday:</span>
								<span>09AM - 06PM</span>
							</li>
							<li className='footer__hour-item'>
								<span>Monday:</span>
								<span>09AM - 06PM</span>
							</li>
							<li className='footer__hour-item'>
								<span>Tuesday:</span>
								<span>09AM - 06PM</span>
							</li>
							<li className='footer__hour-item'>
								<span>Wednesday:</span>
								<span>09AM - 06PM</span>
							</li>

							<li className='footer__hour-item'>
								<span>Thursday:</span>
								<span>09AM - 06PM</span>
							</li>
							<li className='footer__hour-item'>
								<span>Friday:</span>
								<span>09AM - 06PM</span>
							</li>
							<li className='footer__hour-item'>
								<span>Sunday:</span>
								<span>Closed</span>
							</li>
						</ul>
					</div>
				</div>

				<div className='footer__content'>
					<h3 className='footer__title'>NewLetter</h3>
					<p className='footer__desc'>
						Subscribe Our Newsletter To Get Latest Update And News
					</p>
					<form action='' className='subscribe__form'>
						<input
							type='text'
							placeholder='Your Email'
							className='form__input subscribe__input'
						/>
						<button className='btn btn--flex subscribe__btn'>
							<FaRegEnvelope /> Subscribe Now
						</button>
					</form>
					<div className='footer__socials'>
						<h3 className='footer__social-follow'>Follow Us:</h3>
						<div className='footer__social-links'>
							<a href='/' className='footer__social-link'>
								<FaFacebookF />
							</a>
							<a href='/' className='footer__social-link'>
								<FaTwitter />
							</a>
							<a href='/' className='footer__social-link'>
								<FaLinkedinIn />
							</a>
							<a href='/' className='footer__social-link'>
								<FaYoutube />
							</a>
						</div>
					</div>
				</div>
			</div>

			<p className='copyright__text'>
				&copy; Copyright 2024 <strong>Coffero</strong> All Rights Reserved.
			</p>
		</footer>
	)
}

export default Footer
