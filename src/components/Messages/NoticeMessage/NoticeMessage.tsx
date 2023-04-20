import PropTypes from 'prop-types';
import { TbStarsFilled } from 'react-icons/tb';

interface NoticeMessageProps {
    message: string;
}


const NoticeMessage = ({ message }: NoticeMessageProps) => (
  <div className="bg-green-600 p-2  animate-left text-white w-full flex justify-center items-center gap-3 z-20" role="alert">
    <TbStarsFilled />
    {message}
  </div>
);

NoticeMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default NoticeMessage;
