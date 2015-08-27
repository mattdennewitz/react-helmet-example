import React from 'react';
import { Link, State } from 'react-router';
import Helmet from 'react-helmet';

let PostCollection = [
    {id: 1, title: 'Post #1', tags: ['baseball', 'basketball']},
    {id: 2, title: 'Post #2', tags: ['tennis']},
    {id: 3, title: 'Post #3', tags: ['football']},
];

let TagLink = React.createClass({
    render: function() {
        return (
            <Link to="news-tag" params={{tag: this.props.tag}}>
                {this.props.tag}
            </Link>
        );
    }
});

let Post = React.createClass({
    render: function() {
        return (
            <div>
                <h1>{this.props.post.title}</h1>
                <div>
                    Tagged
                    <ul>
                        { this.props.post.tags.map( tag => <li><TagLink tag={tag} /></li> ) }
                    </ul>
                </div>
                <article>
                    <p>post content...</p>
                </article>
            </div>
        );
    }
});

let BlogPosts = React.createClass({
    mixins: [State],

    render: function() {
        let { tag } = this.props.params;
        let title = 'Posts: ' + (tag ? ' tagged "' + tag + '"' : 'all');
        let posts = PostCollection.slice();

        /* filter posts by tag */
        if(tag !== undefined) {
            posts = posts.filter( post => {
                return post.tags.indexOf(tag) !== -1;
            } );
        }

        return (
            <div>
                <Helmet
                    title={title}
                    meta={[
                        {property: 'og:title', content: title},
                    ]} />
                <h3>
                    {title}
                </h3>

                { posts.map(post => <Post key={post.id} post={post} />) }
            </div>
        );
    }
});

export default BlogPosts;
