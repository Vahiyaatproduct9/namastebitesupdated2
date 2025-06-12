import data from './OurPromiseData.js';
import './OurPromise.css'
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import twitter from '../images/x.png';
export default function OurPromise() {

    function cards(x) {
        return (
            <>

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
                                    width: `${(x.progress / x.total) * 100}%`
                                }}>

                                </div>

                            </div>
                            <div className="last-text">
                                <p>{x.progress}+ {x.end}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    const cardsData = data.map(cards);

    return (
        <>
            <div className='container'>

                <div className="ourpromise-container">

                    {cardsData}

                </div>
                <div className="ourpromise-header">
                    <text>Our Promise</text>
                </div>
                <div className="ourpromise-body">
                    <div className="ourpromise-pic">
                    </div>
                    <div className="ourpromise-text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem sit quisquam, repudiandae error maiores temporibus obcaecati earum inventore veniam asperiores id suscipit natus aliquid officiis eius, reprehenderit, ullam repellat eos?</p>
                        <div className='socialmedia'>
                            <a>
                                <div className='facebook'>
                                    <img src={facebook} alt='facebook' />
                                </div>
                            </a>
                            <a>
                                <div className='instagram'>
                                    <img src={instagram} alt='instagram' />

                                </div>
                            </a>
                            <a>
                                <div className='twitter'>
                                    <img src={twitter} alt='twitter' />

                                </div>
                            </a>

                        </div>
                    </div>
                </div>

            </div>


        </>
    )
}