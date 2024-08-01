import React from 'react'
import "./hero.css"
import Title from '../../common/heading\'/title/title';

const Hero = () => {
  return (
    <>
        <section className='hero'>
            <div className="container">
                <div className="row">
                    <Title subtitle='Welcome to Mindsprint Learning' title='Best Online Education'/>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, facilis! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, ipsam ipsa. Nam impedit cum aspernatur dolor repellendus error magnam hic, reprehenderit, quas eaque saepe aliquam. Atque sapiente maxime provident inventore! </p>
                    <div className="button">
                        <button className='primary-btn'>
                            GET STARTED <i className='fa fa-long-arrow-alt-right'></i>
                        </button>
                        <button >
                            VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <div className="margin"></div>
    </>
  )
}

export default Hero;
