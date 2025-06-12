import React from 'react'
import data from './js/OurPromiseData.js';
import './css/OurPromise.css'
const facebook = '/images/facebook.png';
const instagram = '/images/instagram.png';
const twitter = '/images/x.png';
import Image, { StaticImageData } from 'next/image.js';

const OurPromise = () => {

    function cards(x: {
        img: string,
        title: string,
        progress: string,
        total: string,
        end: string
    }) {
        // Convert progress and total to numbers for calculation
        const progressNum = Number(x.progress);
        const totalNum = Number(x.total);

        return (

            <div key={x.title} className="achievements-container">
                <div className="rating-container">
                    <div className="img-container" style={{
                        backgroundImage: `url(${x.img})`
                    }}>

                    </div>
                    <div className="info">
                        <div>
                            <h3>{x.title}</h3>
                        </div>
                        <div className="progress-bar">
                            <div className="rating progress" style={{
                                width: `${(progressNum / totalNum) * 100}%`
                            }}>

                            </div>

                        </div>
                        <div className="last-text">
                            <p>{x.progress}+ {x.end}</p>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
    const cardsData = data.map(cards);

    return (<>
        <div className='container'>

            <div className="ourpromise-container">

                {cardsData}

            </div>
            <div className="ourpromise-header">
                <p>Our Promise</p>
            </div>
            <div className="ourpromise-body">
                <div className="ourpromise-pic">
                </div>
                <div className="ourpromise-text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem sit quisquam, repudiandae error maiores temporibus obcaecati earum inventore veniam asperiores id suscipit natus aliquid officiis eius, reprehenderit, ullam repellat eos?</p>
                    <div className='socialmedia'>
                        <a>
                            <div className='facebook'>
                                <Image width={12} height={12} src={facebook} alt='facebook' />
                            </div>
                        </a>
                        <a>
                            <div className='instagram'>
                                <Image width={12} height={12} src={instagram} alt='instagram' />

                            </div>
                        </a>
                        <a>
                            <div className='twitter'>
                                <Image width={12} height={12} src={twitter} alt='twitter' />

                            </div>
                        </a>

                    </div>
                </div>
            </div>

        </div>


    </>
    )
}

export default OurPromise
