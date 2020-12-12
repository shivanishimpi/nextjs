import Link from "next/link";
import React from "react";
const LinkList = () => {
  return (
    <header>
      <ul>
        <li>
          <Link as="/post/1" href="/post/[id]">
            <a>Papaya Cookie</a>
          </Link>
        </li>
        <li>
          <Link as="/post/2" href="/post/[id]">
            {/* We use the as attribute to distinguish betwen the first / second post */}
            <a>Dawn and Dusk</a>
          </Link>
        </li>
      </ul>
      <Link href="../">
        <a>
          <h3>Go back to the Previous Page</h3>
        </a>
      </Link>
    </header>
  );
};
export default LinkList;
