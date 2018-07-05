import Navbar from './Navbar'
import Footer from './Footer'

const Layout = (props) => (
    <div id="Layout">
        <Navbar/>
        <br/><br/><br/>
          {props.children}
        <Footer/>
        <style jax>
        {`
        div#br {
            style=clear:both;
        }

        `}
        </style>

    </div>
)

export default Layout