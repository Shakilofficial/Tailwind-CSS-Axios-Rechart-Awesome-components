import PropTypes from "prop-types";

const Link = ({ route }) => {
  return (
    <li className=" mb-4 mx-auto">
      <a className="font-semibold md:text-xl hover:bg-purple-500 duration-50 p-2 rounded-lg" href={route.path}>{route.name} </a>
    </li>
  );
};
Link.propTypes = {
  route: PropTypes.object.isRequired,
};
export default Link;
