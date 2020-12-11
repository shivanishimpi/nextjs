import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import LinkList from "../../../components/linklist";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <h1>Page: {id}</h1>
      <LinkList />
    </>
  );
};
export default Post;
