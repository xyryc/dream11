import PropTypes from "prop-types";
import Available from "../Available/Available";
import Selected from "../Selected/Selected";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PlayerContainer = ({
  handleIsActiveState,
  isActive,
  credit,
  handleCreditTransaction,
}) => {
  const [chosenPlayer, setChosenPlayer] = useState([]);

  const handleChosenPlayer = (player) => {
    const isExist = chosenPlayer.find(
      (previousPlayer) => previousPlayer.playerId === player.playerId
    );

    if (!isExist) {
      const newChosenPlayerList = [...chosenPlayer, player];
      if (player.biddingPrice > credit) {
        toast.error("Not enough credit!");
      } else if (newChosenPlayerList.length > 6) {
        toast.error("Maximum Selection Limit Reached! (6/6)");
        return;
      } else {
        setChosenPlayer(newChosenPlayerList);
        handleCreditTransaction(player.biddingPrice);
        toast.success("Player has been selected!");
      }
    } else {
      toast.error("Player already exist!");
    }
  };

  const handleRemove = (id) => {
    // remove from chosen player using filter
    const updatedPlayerList = chosenPlayer.filter(
      (chosenPlayer) => chosenPlayer.playerId !== id
    );

    setChosenPlayer(updatedPlayerList);
    toast.success(`Player removed from the list!`);
  };

  return (
    <div>
      {/* handle button active status */}
      <div className="text-right sticky top-2 md:top-20 z-50  pb-2 ">
        <button
          onClick={() => handleIsActiveState("available")}
          className={`${
            isActive.available
              ? "py-[14px] px-[30px] bg-[#E7FE29] rounded-l-xl font-bold border border-lime-300"
              : "py-[14px] px-[30px] border border-gray-300 rounded-l-xl bg-white"
          }`}
        >
          Available
        </button>
        <button
          onClick={() => handleIsActiveState("selected")}
          className={`${
            isActive.available
              ? "py-[14px] px-[30px] border border-gray-300 rounded-r-xl bg-white"
              : "py-[14px] px-[30px] bg-[#E7FE29] rounded-r-xl font-bold border border-lime-300"
          }`}
        >
          Selected({chosenPlayer.length})
        </button>
      </div>

      {/* render card according to active status */}
      <div className="lg:-mt-10">
        {isActive.available ? (
          <Available handleChosenPlayer={handleChosenPlayer} />
        ) : (
          <Selected
            handleIsActiveState={handleIsActiveState}
            chosenPlayer={chosenPlayer}
            handleRemove={handleRemove}
          />
        )}
      </div>
    </div>
  );
};

PlayerContainer.propTypes = {
  handleIsActiveState: PropTypes.func.isRequired,
  isActive: PropTypes.object.isRequired,
  credit: PropTypes.number.isRequired,
  handleCreditTransaction: PropTypes.func.isRequired,
};

export default PlayerContainer;
