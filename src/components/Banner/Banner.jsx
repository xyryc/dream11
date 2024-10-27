import BannerBackground from "../../assets/bg-shadow.png";
import BannerMainImage from "../../assets/banner-main.png";
import PropTypes from "prop-types";

const Banner = ({ handleClaimCredit }) => {
  return (
    <div
      className="hero h-full sm:h-[545px]  bg-[#131313] rounded-3xl mt-6 mb-[88px]"
      style={{
        backgroundImage: `url(${BannerBackground})`,
      }}
    >
      {/* <div className="hero-overlay bg-opacity-60"></div> */}
      <div className="hero-content text-center">
        <div>
          <img
            className="mx-auto"
            src={BannerMainImage}
            alt={`image of main banner`}
          />
          <h1 className="mt-6 mb-4 text-[40px] font-bold text-white">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>
          <p className="mb-6 text-gray-400 font-inter text-2xl font-medium">
            Beyond Boundaries Beyond Limits
          </p>
          <div className="border rounded-xl p-2 border-[#E7FE29]  w-44 mx-auto">
            <button
              onClick={() => handleClaimCredit()}
              className="btn border-none bg-[#E7FE29] font-bold"
            >
              Claim Free Credit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Banner.propTypes = {
  handleClaimCredit: PropTypes.func.isRequired,
};

export default Banner;
