import { features } from '../../Data'
import shape from '../../assets/shape.png'

import './Features.css'

function Features() {
	return (
		<section className='features section' id='features'>
			<h2 className='section__title' data-title='Features'>
				Our Best Features
			</h2>
			<div className='container features__grid grid'>
				{features.map(({ id, img, title, description }) => (
					<div className='features__item' key={id || title}>
						<img src={img} alt={title} className='features__img' />
						<h3 className='features__title'>{title}</h3>
						<p className='features__description'>{description}</p>

						<img src={shape} alt="" className="features__shape" />
					</div>
				))}
			</div>
		</section>
	)
}

export default Features
