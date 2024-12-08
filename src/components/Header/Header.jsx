import { FaStream } from 'react-icons/fa'
import Logo from '../../assets/logo.png'
import { links } from '../../Data'
import { Link } from 'react-scroll'
import { animateScroll } from 'react-scroll'
import './Header.css'
import { useEffect, useState } from 'react'

function Header() {
	const [scrollHeader, setScrollHeader] = useState(false)
	const [showMenu, setShowMenu] = useState(false)

	function changeHeader() {
		if (window.scrollY >= 80) {
			setScrollHeader(true)
		} else {
			setScrollHeader(false)
		}
	}

	function scrollTop() {
		animateScroll.scrollToTop()
	}

	useEffect(() => {
		window.addEventListener('scroll', changeHeader)
	}, [])

	return (
		<header className={`${scrollHeader ? 'scroll-header' : ''} header`}>
			<nav className='nav container'>
				<Link to='/' onClick={scrollTop} className='nav__logo'>
					<img src={Logo} alt='Coffera' className='nav__logo-img' />
				</Link>
				<div className={`${showMenu ? 'show-menu' : ''} nav__menu`}>
					<ul className='nav__list'>
						{links.length > 0 ? (
							links.map(({ name, path }) => (
								<li className='nav__item' key={path}>
									<Link
										spy={true}
										smooth={true}
										offset={-60}
										hashSpy={true}
										duration={500}
										to={path}
										className='nav__link'
										onClick={() => setShowMenu(!showMenu)}
									>
										{name}
									</Link>
								</li>
							))
						) : (
							<li className='nav__item'>
								<span className='nav__link'>No links available</span>
							</li>
						)}
					</ul>
				</div>
				<div className='nav__toggle' onClick={() => setShowMenu(!showMenu)}>
					<FaStream />
				</div>
			</nav>
		</header>
	)
}

export default Header
