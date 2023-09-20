import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';
const PriceOption = ({ option }) => {
    const { name, price, features } = option;
    return (
        <div className='space-y-8 bg-purple-500/80 hover:border-4 border-rose-500 duration-1000 flex flex-col rounded-xl p-6 hover:shadow-lg text-center text-white'>
            <h2>
                <span className='text-5xl font-bold'>{price}</span>
                <span className='text-xl font-semibold'> /month</span>
            </h2>
            <h4 className='font-semibold text-3xl'>{name}</h4>
            <div className='space-y-1'>
                {
                    features.map((feature,idx) => <Feature key={idx} feature={feature}></Feature> )
                }
            </div>
            <button className='py-2 px-4 bg-rose-500 hover:bg-rose-800/80 hover:border-2 border-purple-200 font-semibold rounded-full shadow-lg'>Purchase</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
}
export default PriceOption;