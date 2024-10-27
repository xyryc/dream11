import { useState } from "react";
import PlayerContainer from "./components/PlayerContainer/PlayerContainer";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [isActive, setIsActive] = useState({
    available: true,
    status: "available",
  });

  const [credit, setCredit] = useState(0);

  const handleClaimCredit = () => {
    setCredit(credit + 11000000);
    toast.success("11000000 credit has been added!");
  };

  const handleCreditTransaction = (biddingPrice) => {
    setCredit(credit - biddingPrice);
  };

  const handleIsActiveState = (status) => {
    if (status == "available") {
      setIsActive({
        available: true,
        status: "available",
      });
    } else {
      setIsActive({
        available: false,
        status: "selected",
      });
    }
  };

  return (
    <>
      <div className="container mx-auto px-4 font-sora">
        <ToastContainer
        position="top-center"  autoClose={1200} />
        <Header credit={credit} />
        <Banner handleClaimCredit={handleClaimCredit} />
        <PlayerContainer
          handleIsActiveState={handleIsActiveState}
          isActive={isActive}
          credit={credit}
          handleCreditTransaction={handleCreditTransaction}
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
