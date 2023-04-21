import PropTypes from 'prop-types';
import { IoIosAlert } from 'react-icons/io';

interface AlertMessageProps {
    message: string;
}

const AlertMessage = ({ message }: AlertMessageProps) => (
  <div className="bg-red-600 p-2 animate-left text-white w-full flex justify-center items-center gap-3 z-20" role="alert">
    <IoIosAlert />
    {message}
  </div>
);

AlertMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default AlertMessage;
