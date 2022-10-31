import { useState, useEffect  } from 'react'
import ONG from '../../assets/image1.png'
import PortfolioListItem from '../PortfolioList/PortfolioListItem'

import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from '../../data'

import './Portfolio.scss'

const Portfolio = () => {
  const [selected, setSelected] = useState('featured')
  const [data, setData] = useState([])

  useEffect(() => {
    switch(selected) {
        case 'featured':
            setData(featuredPortfolio)
            break
        case 'web':
            setData(webPortfolio)
            break
        // case 'mobile':
        //     setData(mobilePortfolio)
        //     break
        case 'design':
            setData(designPortfolio)
            break
//         case 'content':
//             setData(  contentPortfolio,
// )
//             break
        default:
            setData(featuredPortfolio)    
    }
     
  },[selected])

  const list = [
    {
      id: 'featured',
      title: 'Featured',
    },
    {
      id: 'web',
      title: 'Web App',
    },
    // {
    //   id: 'mobile',
    //   title: 'Mobile App',
    // },
    {
      id: 'design',
      title: 'Design',
    },
    // {
    //   id: 'content',
    //   title: 'Content',
    // },
  ]
  return (
    <section className='portfolio container' id='portfolio'>
      <h5>my recent work</h5>
      <h2>Portfolio</h2>
      <ul className='portfolio__list'>
        {list.map((item) => (
          <PortfolioListItem
            key={item.id}
            title={item.title}
            id={item.id}
            active={selected === item.id}
            setSelected={setSelected}
          />
        ))}
      </ul>
      <div className='portfolio__wrapper'>
        {data.map( d => (
        <article className='portfolio__item' key={d.id}>
          <div className="portfolio__img">
            <img src={d.img} alt={d.title} />
          </div>
          <h3 className='portfolio__item__title'>{d.title}</h3>
          <div className="portfolio__item__cta">
            <a href={d.github} className='btn' target='_blank'>Github</a>
            <a href={d.demo} className='btn btn-primary ' target='_blank'>Live Demo</a>
            <a href=""></a>
          </div>
        </article>
        ))}
        {/* <div className='portfolio__item'>
          <img src={ONG} alt='ONG app' className='portfolio__img' />
          <h3 className='portfolio__item-title'>ONG App</h3>
        </div>
        <div className='portfolio__item'>
          <img src={ONG} alt='ONG app' className='portfolio__img' />
          <h3 className='portfolio__item-title'>ONG App</h3>
        </div>
        <div className='portfolio__item'>
          <img src={ONG} alt='ONG app' className='portfolio__img' />
          <h3 className='portfolio__item-title'>ONG App</h3>
        </div>
        <div className='portfolio__item'>
          <img src={ONG} alt='ONG app' className='portfolio__img' />
          <h3 className='portfolio__item-title'>ONG App</h3>
        </div>
        <div className='portfolio__item'>
          <img src={ONG} alt='ONG app' className='portfolio__img' />
          <h3 className='portfolio__item-title'>ONG App</h3>
        </div> */}
      </div>
    </section>
  )
}

export default Portfolio
