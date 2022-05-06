import WebsiteVisitor from "../WebsiteVisitor/WebsiteVisitor"

export default function WebsiteVisitors() {
    return (
        <div className="col s9">
            <h4 className="left-align">Recent Activity</h4>
            <h6 className="left-align">365 Patrons Visited this Month</h6>
            <ul className="collection">
                <WebsiteVisitor 
                img="https://media-exp1.licdn.com/dms/image/C5603AQErSHf_5d4rGA/profile-displayphoto-shrink_100_100/0/1651195536336?e=1657152000&v=beta&t=bDFq5oSKdvwTXXsizChnkOrh75E3kIXjYSgGW2Xo_LY"
                username="KARC"
                loc="Bonney Lake, WA"
                comment="I enjoy using React and Materialize Frameworks"
                />
                <WebsiteVisitor 
                img="https://media-exp1.licdn.com/dms/image/C5603AQErSHf_5d4rGA/profile-displayphoto-shrink_100_100/0/1651195536336?e=1657152000&v=beta&t=bDFq5oSKdvwTXXsizChnkOrh75E3kIXjYSgGW2Xo_LY"
                username="KARC"
                loc="Bonney Lake, WA"
                comment="Working with Materialize has been a joy as I begin to put the pieces together for how css really works and can be harnessed."
                />
                <WebsiteVisitor 
                img="https://media-exp1.licdn.com/dms/image/C5603AQErSHf_5d4rGA/profile-displayphoto-shrink_100_100/0/1651195536336?e=1657152000&v=beta&t=bDFq5oSKdvwTXXsizChnkOrh75E3kIXjYSgGW2Xo_LY"
                username="KARC"
                loc="Bonney Lake, WA"
                comment="This exercise in Static Components is exciting to learn what can be built with React."
                />
            </ul>
        </div>
    )
}