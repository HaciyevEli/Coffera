import { FaRegBookmark } from "react-icons/fa"
import shapeTwo from '../../assets/shape-2.png'
import shapeTHree from '../../assets/shape-3.png'
import './Reservation.css'

function Reservation() {
	return (
		<section className='reservation container' id='reservation'>
			<h2 className='section__title' data-title='Reservation'>
				Book A Table
			</h2>
			<form className='reservation__form grid'>
				<div className='form__input-div'>
					<input className='form__input' placeholder='Your Name' type='text' />
				</div>
				<div className='form__input-div'>
					<input
						className='form__input'
						placeholder='Your Email Address'
						type='email'
					/>
				</div>

				<div className='form__input-div'>
					<input className='form__input' placeholder='Your Phone' type='text' />
				</div>

				<div className='form__input-div'>
					<input
						className='form__input'
						placeholder='Date Ex: DD/MM/YY'
						type='text'
					/>
				</div>
				<div className='form__input-div'>
					<input
						className='form__input'
						placeholder='Time Ex: 01:25PM'
						type='text'
					/>
				</div>
				<div className='form__input-div'>
					<input
						className='form__input'
						placeholder='Number of People'
						type='text'
					/>
				</div>
				<div className='form__input-div form__input-textarea'>
					<textarea
						className='form__input'
						placeholder='Your Message'
					></textarea>
				</div>
				<button className='btn btn--flex reservation__btn'>
					<FaRegBookmark /> Book A Table
				</button>
			</form>
			<img src={shapeTwo} alt='' className='shape__two' />
			<img src={shapeTHree} alt='' className='shape__three' />
		</section>
	)
}

export default Reservation
