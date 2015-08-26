import React from 'react';
import Helmet from 'react-helmet';

let About = React.createClass({
    render: function() {
        return (
            <div>
                <Helmet
                    title="About"
                    meta={[
                        {property: 'og:title', content: 'About'},
                    ]} />
                <h1>About</h1>
            </div>
        );
    }
});

export default About;
