import Layout from '../components/Layout'
import FaqHeader from '../components/FaqHeader'

export default class CS extends React.Component {
  render() {
      return (
        <Layout>
            <div id="faqcontent">
                <FaqHeader/>
            </div>
            <style jsx>
            {`
            #faqcontent {

            }
            @media (min-width:1024px){
            #faqcontent {
                width:80%;
                margin:0px auto;
            }
            }
            `}
            </style>
        </Layout>
    )
  }
}
