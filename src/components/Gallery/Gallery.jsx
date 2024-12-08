import { gallery } from "../../Data"
import { BsPlusLg } from "react-icons/bs"
import './Gallery.css'

function Gallery() {
	return (
		<section className='gallery' id='gallery'>
			<h2 className='section__title' data-title='Gallery'>
				Our Photo Gallery
			</h2>
			<div className='container gallery__grid grid'>
        {gallery.map(({img, title, id}) =>(
          <div className="gallery__item" key={id}>
            <img src={img} alt="" className="gallery__img" />
            <a href="/" className="gallery__icon">
              <BsPlusLg/>
            </a>
            <h3 className="gallery__title">{title}</h3>
          </div>
        ))}
      </div>
		</section>
	)
}

export default Gallery
