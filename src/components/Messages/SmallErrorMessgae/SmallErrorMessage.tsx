import PropTypes from 'prop-types';
import { IoIosAlert } from 'react-icons/io';

interface SmallErrorMessageProps {
    message: string;
  }


const SmallErrorMessage = ({ message }:SmallErrorMessageProps) => (
  <div className="bg-red-600 p-2 animate-left-small text-white w-full flex justify-center items-center gap-3" role="alert">
    <IoIosAlert />
    {message}
  </div>
);

SmallErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default SmallErrorMessage;
