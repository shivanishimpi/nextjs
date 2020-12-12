import React from "react";
// import { useRouter } from "next/router";
// import Link from "next/link";
import LinkList from "../../../components/linklist";

const Post = ({ title, body }) => (
  // return (
  // const router = useRouter();
  // const { id } = router.query;

  <>
    <LinkList />
    <h1>{title}</h1>
    <p>{body}</p>
  </>
);

Post.getInitialProps = async ({ query }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${query.id}`
  );
  const post = res.json();
  return post;
};
export default Post;
