import { FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import PropTypes from "prop-types";
const Star = ({ count, stars, rating }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {stars > index + 1 ? (
          <FaStar className="icon" />
        ) : stars > number ? (
          <FaStarHalfAlt className="icon" />
        ) : (
          <AiOutlineStar className="icon" />
        )}
      </span>
    );
  });
  return (
    <wrapper>
      <div className="icon-style">
        <p>{rating}</p>
        <p className="flex mt-1 pl-1 text-yellow-600">{ratingStar}</p>
      </div>
    </wrapper>
  );
};

export default Star;

Star.propTypes = {
  count: PropTypes.number,
  stars: PropTypes.number,
  rating: PropTypes.number,
};
