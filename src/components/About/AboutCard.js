import React from 'react'
import Title from '../common/heading\'/title/title'
import { homeAbout } from '../dummydata'
import AWrapper from './AWrapper'


const AboutCard = () => {
  return (
    <>
    
        <section className='aboutHome'>
                <div className='container flexSB'>
                    <div className='left row'>
                        <img src="./about.webp" alt='Not found' className='about_img' />
                    </div>
                    <div className='right row'>
                            <Title subtitle='Learn Anything' title='Benefits ABout Online Learning'/>
                            <div className='items'>
                                {homeAbout.map((val)=>(
                                    <div className='item flexSB'>
                                        <div className='img'>
                                            <img src={val.cover} alt=''/>
                                        </div>
                                        <div className='text'>
                                            <h2>{val.title}</h2>
                                            <p>{val.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                    </div>
                </div>
        </section>
        <AWrapper/> 
    </>
  )
}

export default AboutCard
