import './BookaSeat.css'
import video from "../images/food.mp4"
export default function BookaSeat() {
    return (
        <>
            <div className="bookaseat">
                    <video className="bookaseat-background" src={video} muted loop autoPlay playsInline></video>
                    
                    <div className="video-blur">
                        <div className="bookaseat-text">
                                <text>Get 10% Off on your first Visit</text>

                        </div>
                        <div className="bookaseat-button-div">
                            <button className="bookaseat-button">Book a Seat  →</button>
                        </div>
                    </div>
            </div>

        </>
    )
}