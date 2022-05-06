export default function Reviews() {
    return (
        <div className="col s3">
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" style={{height: "12rem"}} src="https://img.freepik.com/free-photo/happy-friends-from-diverse-cultures-races-laughing-having-fun-public-park_139143-529.jpg?w=2000" alt=""/>
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">Reviews<i className="material-icons right">more_vert</i></span>
                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">Reviews<i className="material-icons right">close</i></span>
                    573 Reviews
                    <p>Featured Five Star Reivew</p>
                </div>
            </div>
        </div>
    )
}