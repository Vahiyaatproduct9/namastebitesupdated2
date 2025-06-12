import './MenuOverview.css'
import { TopSellers, MainCourse } from './MenuOverview.js'

export default function MenuOverview() {

    function itemMaker(x) {
        return (
            <div className="sampleitem">
                <div className='item-container' style={{
                    backgroundImage: `url(${x.img})`
                }}>

                </div>
                <div className='sample'>
                    <h3>{x.name}</h3>
                    <p>Only at {x.price}</p>
                </div>
            </div>
        )
    }

    const topSellersItems = TopSellers.map(itemMaker);
    const mainCourseItems = MainCourse.map(itemMaker);

    return (
        <div className='container'>
            <div className="menuoverview-container">
                <div className='blur-menu'>
                    <div className="menuoverview-maintext">
                        <text>Menu Overview</text>
                    </div>
                    <div className="topsellers">
                        <div className="topsellers-text">
                            <text>Top Sellers →</text>
                        </div>
                        <div className="topsellers-items">

                            {topSellersItems}


                        </div>
                    </div>
                    <div className="topsellers">
                        <div className="topsellers-text">
                            <text>Main Course →</text>
                        </div>
                        <div className="topsellers-items">
                            {mainCourseItems}
                        </div>
                    </div>
                    <div className="seefullmenu">
                        <button className="seefullmenu-button">
                            See Full Menu</button>
                    </div>

                </div>
            </div>
        </div>
    )
}
