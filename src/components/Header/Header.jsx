import PropTypes from "prop-types";
import MainLogo from "../../assets/logo.png";
import CoinIcon from '../../assets/dollarIcon.png'

const Header = ({ credit }) => {

  return (
    <div className="navbar md:sticky top-0 z-50 bg-white/70 backdrop-blur-md flex justify-between items-center flex-col md:flex-row">
      <div className="">
        <a href="https://github.com/xyryc">
          <img src={MainLogo} />
        </a>
      </div>
      <div className="">
        <ul className="menu menu-horizontal px-1 items-center">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Fixture</a>
          </li>
          <li>
            <a>Teams</a>
          </li>
          <li>
            <a>Schedules</a>
          </li>
          <li>
            <button className="btn border border-gray-200">
              {credit} Coin
              <img src={CoinIcon} alt="dollar icon" />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

Header.propTypes = {
  credit: PropTypes.number.isRequired,
};

export default Header;
