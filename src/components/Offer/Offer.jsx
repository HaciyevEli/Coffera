import { offer } from '../../Data'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Pagination } from 'swiper/modules'

import './Offer.css'

function Offer() {
	return (
		<section className='offer section' id='offer'>
			<h2 className='section__title' data-title='Offer'>
				Special Offer For You
			</h2>

			<Swiper
				spaceBetween={30}
				pagination={{ clickable: true }}
				modules={[Pagination]}
				className='container'
			>
				{offer.map(({ img, title, discount, description, id }) => (
					<SwiperSlide className='offer__item' key={id}>
						<div className='offer__img-wrapper'>
							<img className='offer__img' src={img} alt={title} />
						</div>
						<div className='offer__content'>
							<h3 className='offer__title'>{title}</h3>
							<span className='offer__discount'>{discount}</span>
							<p className='offer__description'>{description}</p>
							<a href='/' className='btn'>
								Order Now
							</a>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	)
}

export default Offer
