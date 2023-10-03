import { Link } from 'react-router-dom';
import Linked from '../assets/bi_linkedin.svg';
import Github from '../assets/github.svg';
import stackoverflow from '../assets/stackoverflow.svg';

const Footer = () => {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        height: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        zIndex: 9999,
      }}
    >
      {/* Replace the "to" prop values with your desired routes */}
      <Link to="https://www.linkedin.com/in/toby-carroll-68232127b/">
        <img src={Linked} alt="Icon 1" style={{ width: '25px', height: '25px', margin: '0 10px' }} />
      </Link>
      <Link to="https://github.com/tjsoho">
        <img src={Github} alt="Icon 2" style={{ width: '25px', height: '25px', margin: '0 10px' }} />
      </Link>
      <Link to="https://stackoverflow.com/users/21053235/toby-j">
        <img src={stackoverflow} alt="Icon 3" style={{ width: '25px', height: '25px', margin: '0 10px' }} />
      </Link>
    </div>
  );
};

export default Footer;
