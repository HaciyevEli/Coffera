import coffeShop from '../../assets/coffee-shop.svg'
import experience from '../../assets/experience.svg'
import coffeCup from '../../assets/coffee-cup.svg'
import chef from '../../assets/chef.svg'
import './Stats.css'

function Stats() {
  return (
		<section className='stats section'>
			<div className='container stats__grid grid'>
				<div className='stats__item'>
					<div className='stats__img-wrapper'>
						<img
							className='stats__img'
							src={coffeShop}
							alt='coffe shop icons'
						/>
					</div>

					<div>
						<p className='stats__no'>1500</p>
						<h3 className='stats__title'>Total Branches</h3>
					</div>
				</div>
				<div className='stats__item'>
					<div className='stats__img-wrapper'>
						<img
							className='stats__img'
							src={coffeCup}
							alt='coffe shop icons'
						/>
					</div>

					<div>
						<p className='stats__no'>250</p>
						<h3 className='stats__title'>Happy Customers</h3>
					</div>
				</div>
				<div className='stats__item'>
					<div className='stats__img-wrapper'>
						<img
							className='stats__img'
							src={chef}
							alt='coffe shop icons'
						/>
					</div>

					<div>
						<p className='stats__no'>120</p>
						<h3 className='stats__title'>Professional Chefs</h3>
					</div>
				</div>
				<div className='stats__item'>
					<div className='stats__img-wrapper'>
						<img
							className='stats__img'
							src={experience}
							alt='coffe shop icons'
						/>
					</div>

					<div>
						<p className='stats__no'>90</p>
						<h3 className='stats__title'>Years Of Esperience</h3>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Stats
