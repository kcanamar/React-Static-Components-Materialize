export default function Footer() {
    return (
        <footer className="page-footer">
          <div className="container">
            <div className="row">
              <div className="col l4 s12">
                <h5 className="white-text">About KARC</h5>
                <p className="grey-text text-lighten-4">I'am a self motivated developer looking to raise my CSS skills using the Materialize framwork in conjuction with React.</p>
              </div>
              <div className="col l4 offset-l4 s12">
                <h5 className="white-text">Links</h5>
                <ul>
                    <li><a className="grey-text text-lighten-3" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">JavaScript</a></li>
                    <li><a className="grey-text text-lighten-3" href="https://reactjs.org/docs/introducing-jsx.html">JSX</a></li>
                    <li><a className="grey-text text-lighten-3" href="https://reactjs.org/">React</a></li>
                    <li><a className="grey-text text-lighten-3" href="https://materializecss.com/">Materialize</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2022 Copyright 
            </div>
          </div>
        </footer>
    )
}