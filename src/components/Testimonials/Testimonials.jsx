// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Pagination } from 'swiper/modules'

import { FaStar } from 'react-icons/fa'
import { VscTriangleDown } from 'react-icons/vsc'

import { testimonials } from '../../Data'
import './Test.css'

function Testimonials() {
	return (
		<section className='testimonials container section' id='testimonials'>
			<h2 className='section__title' data-title='Testimonials'>
				What Client Say`s
			</h2>
			<Swiper
				spaceBetween={30}
				pagination={{ clickable: true }}
				breakpoints={{
					768: {
						slidesPerView: 2,
						spaceBetween: 30,
					},
					1024: {
						slidesPerView: 3,
						spaceBetween: 30,
					},
				}}
				modules={[Pagination]}
			>
				{testimonials.map(({ img, title, service, id, description }) => (
					<SwiperSlide className='test__item' key={id}>
						<div className='test__qoute'>
							<p className='test__desc'>{description}</p>
							<VscTriangleDown className='test__icon' />
						</div>

						<div className='test__content'>
							<div className='test__img-wrapper'>
								<img src={img} alt='' className='test__img' />
							</div>
							<div>
								<h3 className='test__title'>{title}</h3>
								<p className='test__service'>{service}</p>
								<div className='test__rating'>
									<FaStar />
									<FaStar />
									<FaStar />
									<FaStar />
									<FaStar />
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	)
}

export default Testimonials
