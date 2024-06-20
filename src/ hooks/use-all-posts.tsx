import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';

const useAllPosts = () => {
    const {allContentfulPost: {edges}} =  useStaticQuery(graphql`
        query MyQuery {
            allContentfulPost {
                edges {
                    node {
                        title
                        createdAt
                        gatsbyPath(filePath: "/{contentfulPost.slug}")
                    }
                }
            }
        }
    `);
    return edges;
};
export default useAllPosts;
