import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
class About extends React.Component {
    render() {
        return ( <Layout>
            <SEO title="About" keywords={[`art`, `leaves`, `handmade`]} />
                <div className="site-About">
                  My name is Emily Huyett. Handmade art is what I love, and from time to time I'm willing to part with a piece.
                </div>
            </Layout>
        )
    }
}
export default About