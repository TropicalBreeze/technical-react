import React from 'react';
import {graphql} from "gatsby";

const BlogPost = ({data}) => {
    return (
        <main>
            <h1>{data.contentfulPost.title}</h1>
            <p>{data.contentfulPost.description}</p>
            {data.contentfulPost?.image?.file?.url && (
                <img
                src={data.contentfulPost.image.file.url}
                alt={data.title}
                style={{width: 300, height: 'auto'}}
                />
                )}

        </main>
    )};

export default BlogPost;


export const query = graphql`
    query pageQuery($id: String) {
        contentfulPost(id: { eq: $id }) {
            slug
            title
            image {
                file {
                    url
                }
            }
            title
            subtitle
            author
        }
    }
`
