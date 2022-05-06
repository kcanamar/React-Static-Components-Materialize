export default function WebsiteVisitor({ img, loc, comment, username}) {
    return (
        <li className="collection-item avatar">
            <img src={img} alt="" className="circle"/>
            <span className="title left">{username}</span>
            <p className="right-align">{loc}<br/>
                {comment}
            </p>
        </li>
    )
}