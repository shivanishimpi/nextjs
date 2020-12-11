import Link from "next/link";
import React from "react";
const LinkList = () => {
  return (
    <>
      <ul>
        <li>
          <Link as="/post/papayaCookie" href="/post/[id]">
            <a>Papaya Cookie</a>
          </Link>
        </li>
        <li>
          <Link as="/post/dawnDusk" href="/post/[id]">
            {/* We use the as attribute to distinguish betwen the first / second post */}
            <a>Dawn and Dusk</a>
          </Link>
        </li>
      </ul>
      <Link href="../">
        <a>Go back to the Previous Page</a>
      </Link>
    </>
  );
};
export default LinkList;
