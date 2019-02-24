import React from "react";

function PlusIcon({ height, width }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      height={height}
      width={width}
      fill="#a2a3ba"
    >
      <path d="m256 8c-137 0-248 111-248 248s111 248 248 248 248-111 248-248-111-248-248-248zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12z" />
    </svg>
  );
}

export default PlusIcon;
