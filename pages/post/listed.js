import Link from "next/link";

const LinkList = () => {
  <>
    <ul>
      <li>
        <Link as="/pages/post/papayaCookie" href="/pages/post/[id]">
          <a>Papaya Cookie</a>
        </Link>
      </li>
      <li>
        <Link as="/pages/post/dawnDusk" href="/pages/post/[id]">
          <a>Dawn and Dusk</a>
        </Link>
      </li>
    </ul>
  </>;
};
export default LinkList;
// import Link from "next/link";

// export default () => {
//     <>
//     <ul>
//         <li>
//             hi
//         </li>
//         <li>
//             Hey
//         </li>
//     </ul>
//     </>
// }
