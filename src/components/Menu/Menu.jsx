import {menu} from '../../Data'
import './Menu.css'

function Menu() {
	return (
		<section className='menu' id='menu'>
			<h2 className='section__title' data-title='Our Menu'>
				Let`s Check Our Menu
			</h2>

			<div className='menu__grid container grid'>
				{menu.map(({ img, id, title, price, description }) => (
					<div className='menu__item grid' key={id}>
						<div className='menu__img-wrapper'>
							<img className='menu__img' src={img} alt={title} />
						</div>

						<div className='menu__data'>
							<div>
								<h3 className='menu__title'>{title}</h3>
								<p className="menu__description">{description}</p>
							</div>

              <span className="menu__price">${price}</span>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}

export default Menu
