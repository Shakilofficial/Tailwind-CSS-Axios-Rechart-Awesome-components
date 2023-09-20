import PropTypes from 'prop-types';
import { AiFillCheckCircle } from "react-icons/ai";
const Feature = ({feature}) => {
    return (
        <div className='text-lg font-semibold'>
            <p className='flex justify-center items-center gap-1'> <AiFillCheckCircle></AiFillCheckCircle> {feature}</p>
        </div>
    );
};

Feature.protoTypes = {
    feature:PropTypes.string
}
export default Feature;