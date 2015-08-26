import React from 'react';
import Helmet from 'react-helmet';

let Home = React.createClass({
    render: function() {
        return (
            <div>
                <Helmet
                    title="Home"
                    meta={[
                        {property: 'og:title', content: 'Home'},
                    ]} />
                <h1>Home</h1>
            </div>
        );
    }
});

export default Home;
