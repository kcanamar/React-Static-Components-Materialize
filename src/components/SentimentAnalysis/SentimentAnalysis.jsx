export default function SentimentAnalysis() {
    return (
        <div className="col s3">
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src="https://wtop.com/wp-content/uploads/2020/01/GettyImages-1090216738-1024x683.jpg" style={{height: "12rem"}} alt=""/>
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">Analysis<i className="material-icons right">more_vert</i></span>
                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">Analysis<i className="material-icons right">close</i></span>
                    <table className="highlight responsive-table">
                        <thead>
                        <tr>
                            <th >Sentiment</th>
                            <th className="right-align">Total Reviews</th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr>
                            <td>Postive</td>
                            <td className="right-align">352</td>
                        </tr>
                        <tr>
                            <td>Neutral</td>
                            <td className="right-align">135</td>
                        </tr>
                        <tr>
                            <td>Negative</td>
                            <td className="right-align">15</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}