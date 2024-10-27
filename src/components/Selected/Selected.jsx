import PropTypes from "prop-types";

const Selected = ({ handleIsActiveState, chosenPlayer, handleRemove }) => {
  return (
    <div className="text-[#131313]">
      <h2 className="text-[28px] font-bold ">
        Selected Players ({chosenPlayer.length}/6)
      </h2>

      {/* Selected Players list */}
      <div className="space-y-6 mb-12 mt-6">
        {chosenPlayer.map((player) => (
          <div key={player.playerId}>
            {/* player details */}
            <div className="flex items-center p-6 border rounded-2xl justify-between">
              <div className="flex items-center gap-6">
                <img
                  className="w-20 h-20 object-cover rounded-2xl"
                  src={player.image}
                  alt={`image of ${player.name}`}
                />
                <div>
                  <h3 className="text-2xl font-semibold">{player.name}</h3>
                  <p className="text-gray-600">{player.role}</p>
                  <p className="text-gray-600 font-semibold">
                    Price: ${player.biddingPrice}
                  </p>
                </div>
              </div>

              {/* remove button */}
              <button
                onClick={() => {
                  handleRemove(player.playerId);
                }}
                className="text-red-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="border rounded-xl p-2 border-black w-[170px]">
        <button
          onClick={() => handleIsActiveState("available")}
          className="btn border-none bg-[#E7FE29] font-bold"
        >
          Add more player
        </button>
      </div>
    </div>
  );
};

Selected.propTypes = {
  handleIsActiveState: PropTypes.func.isRequired,
  chosenPlayer: PropTypes.array.isRequired,
  handleRemove: PropTypes.func.isRequired,
};

export default Selected;
