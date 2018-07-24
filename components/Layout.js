import Header from './Header'
import Footer from './Footer'

const Layout = (props) => (
    <div id="Layout">
        <Header/>
        <br/><br/><br/>
          {props.children}
        <Footer/>
        <style jsx>
        {`
        div#br {
            style=clear:both;
        }

        @media (min-width:1024px){
                    
        }
        
        `}

        
        </style>

    </div>
)

export default Layout