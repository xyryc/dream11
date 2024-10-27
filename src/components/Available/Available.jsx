import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const Available = ({ handleChosenPlayer }) => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("players.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  return (
    <div>
      <h2 className="text-[28px] font-bold">Available Players</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {players.map((player) => (
          <div key={player.playerId} className="p-6 border rounded-2xl">
            <img
              src={player.image}
              alt={`image of ${player.name}`}
              className="rounded-2xl h-60 w-full object-cover"
            />
            <p className="mt-[26px] flex items-center gap-4 text-[#131313]">
              <i className="fa-solid fa-user"></i>
              <span>{player.name}</span>
            </p>

            <div className="flex justify-between items-center mb-4">
              <p className="text-gray-500  space-x-3">
                <i className="fa-solid fa-flag"></i>
                <span>{player.country}</span>
              </p>
              <p className="px-4 py-2">{player.role}</p>
            </div>

            <hr />
            <h4 className="font-bold my-4">Rating</h4>
            <p className="flex justify-between items-center mb-3">
              <span className="font-semibold">{player.battingType}</span>
              <span className="text-gray-500">{player.bowlingType}</span>
            </p>
            <p className="flex justify-between items-center">
              <span className="font-semibold">
                Price: ${player.biddingPrice}
              </span>
              <button
                onClick={() => handleChosenPlayer(player)}
                className="btn btn-sm border border-gray-300 text-sm font-normal"
              >
                Choose Player
              </button>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

Available.propTypes = {
  handleChosenPlayer: PropTypes.func.isRequired,
};

export default Available;
