import AverageRating from "../AverageRating/AverageRating"
import Reviews from "../Reviews/Reviews";
import SentimentAnalysis from "../SentimentAnalysis/SentimentAnalysis";
import WebsiteVisitors from "../WebsiteVisitors/WebsiteVisitors";


export default function Dashboard() {
    return (
        <div className="dashboard">
            <AverageRating />
            <Reviews />
            <SentimentAnalysis />
            <WebsiteVisitors />
        </div>
    )
}