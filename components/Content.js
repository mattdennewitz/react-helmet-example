import React from 'react';
import Router from 'react-router';
import Helmet from 'react-helmet';

let Content = React.createClass({
    render: function() {
        return (
            <div>
                <h1>Latest Updates</h1>

                <Helmet
                    title="Latest Updates"
                    meta={[
                        {property: 'og:title', content: 'Latest Updates'},
                    ]} />

                <Router.RouteHandler />
            </div>
        );
    }
});

export default Content;
