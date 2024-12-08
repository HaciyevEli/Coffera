import chooseImg from '../../assets/choose.jpg'
import coffeeMug from '../../assets/coffee-mug.svg'
import coffeeBeans2 from '../../assets/coffee-beans-2.svg'
import coffeeBeans3 from '../../assets/coffee-beans-3.svg'
import './Choose.css'

function Choose() {
	return (
		<section className='choose section'>
			<div className='container choose__grid grid'>
				<div className='choose__content'>
					<h2 className='section__title title-left' data-title='Why Choose Us'>
						Coffero Most Out Of Your & Tasty Coffee House
					</h2>
					<p className='choose__description'>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat
						voluptate a, recusandae voluptatum placeat distinctio cupiditate
						culpa corporis sapiente dolorum, veniam doloribus praesentium.
						Nesciunt, quo!
					</p>

					<div className='choose__details grid'>
						<div className='choose__details-item'>
							<div className='choose__details-img-wrapper'>
								<img className='choose__details-img' src={coffeeMug} alt='' />
							</div>

							<div>
								<h3 className='choose__details-title'>Awesome Aroma</h3>
								<p className='choose__details-description'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
									eaque incidunt, distinctio rem modi labore.
								</p>
							</div>
						</div>
					</div>

					<div className='choose__details grid'>
						<div className='choose__details-item'>
							<div className='choose__details-img-wrapper'>
								<img
									className='choose__details-img'
									src={coffeeBeans2}
									alt=''
								/>
							</div>

							<div>
								<h3 className='choose__details-title'>Pure Grandes</h3>
								<p className='choose__details-description'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
									eaque incidunt, distinctio rem modi labore.
								</p>
							</div>
						</div>
					</div>

					<div className='choose__details grid'>
						<div className='choose__details-item'>
							<div className='choose__details-img-wrapper'>
								<img
									className='choose__details-img'
									src={coffeeBeans3}
									alt=''
								/>
							</div>

							<div>
								<h3 className='choose__details-title'>Healthy Coffee</h3>
								<p className='choose__details-description'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
									eaque incidunt, distinctio rem modi labore.
								</p>
							</div>
						</div>
					</div>
				</div>

				<img
					className='choose__img'
					src={chooseImg}
					alt='A cup of black coffee'
				/>
			</div>
		</section>
	)
}

export default Choose
