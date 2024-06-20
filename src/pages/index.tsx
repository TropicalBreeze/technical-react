import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import useAllPosts from "../ hooks/use-all-posts";
import {Link} from "gatsby";

const IndexPage: React.FC<PageProps> = () => {
  const data = useAllPosts();
  console.log('index', data);
  return (
    <main>
      {data.map((node, index) => {
        const { title, gatsbyPath } = node.node;

        return (
            <li key={index}>
              <Link to={gatsbyPath}>{title}</Link>
            </li>
        );
      })}
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
