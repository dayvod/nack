import React from "react";
import PropTypes from "prop-types";

function ImageIcon({ height, width, fill }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      height={height}
      width={width}
      fill={fill}
    >
      <path d="m464 64h-416c-26.51 0-48 21.49-48 48v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48v-288c0-26.51-21.49-48-48-48zm-6 336h-404a6 6 0 0 1 -6-6v-276a6 6 0 0 1 6-6h404a6 6 0 0 1 6 6v276a6 6 0 0 1 -6 6zm-330-248c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zm-32 200h320v-80l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0l-119.514 119.515-39.515-39.515c-4.686-4.686-12.284-4.686-16.971 0l-39.514 39.515z" />
    </svg>
  );
}

ImageIcon.defaultProps = {
  fill: "#000"
};

ImageIcon.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  fill: PropTypes.string
};

export default ImageIcon;
