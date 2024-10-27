import FooterImage from "../../assets/logo-footer.png";
import NewsletterBackground from "../../assets/bg-shadow.png";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleEmail = () => {
    if (email) {
      localStorage.setItem("dream11", email);
      toast.success("Successfully subscribed to newsletter");
    } else {
      toast.error("Enter a valid email");
    }
  };

  useEffect(() => {
    const storedEmail = localStorage.getItem("dream11");
    if (storedEmail) {
      toast(`Logged in as ${storedEmail}`);
    }
  }, []);

  return (
    <div className="relative font-sora">
      {/* newsletter */}
      <div className="absolute -top-80 sm:-top-44 inset-x-0 text-center container mx-auto border rounded-3xl">
        <div
          className="m-6 border py-[88px] rounded-3xl bg-white"
          style={{ backgroundImage: `url(${NewsletterBackground})` }}
        >
          <h1 className="text-[32px] font-bold">Subscribe to our Newsletter</h1>
          <p className="font-inter  text-xl font-medium text-gray-600 mt-4">
            Get the latest updates and news right in your inbox!
          </p>
          <div className="space-x-4 mt-6">
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              onClick={() => handleEmail()}
              className="btn font-bold bg-gradient-to-r from-pink-400 to-yellow-300"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="bg-[#06091A] pt-60 font-sora mt-96">
        <img className="mx-auto mb-16" src={FooterImage} alt="footer logo" />

        <div className="container mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-3 text-white space-y-7 sm:space-y-0  pb-[72px]">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-400 sm:w-2/3">
              We are a passionate team dedicated to providing the best services
              to our customers.
            </p>
          </div>

          <ul className="list-disc list-inside text-gray-400">
            <h3 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h3>
            <li>
              <a className="link link-hover">Home</a>
            </li>
            <li>
              <a className="link link-hover">Services</a>
            </li>
            <li>
              <a className="link link-hover">About</a>
            </li>
            <li>
              <a className="link link-hover">Contact</a>
            </li>
          </ul>

          <form id="footer-form" name="footer-form">
            <h6 className="text-lg font-semibold">Newsletter</h6>
            <fieldset className="form-control w-80">
              <label className="label my-3">
                <span className="label-text text-gray-400">
                  Subscribe to our newsletter for the latest updates.
                </span>
              </label>
              <div className="join">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="input input-bordered join-item text-gray-600"
                />
                <button className="btn bg-gradient-to-r from-yellow-400 to-pink-300 border-none font-bold join-item">
                  Subscribe
                </button>
              </div>
            </fieldset>
          </form>
        </div>

        <hr className="border-slate-700" />

        <footer className="footer footer-center text-gray-600 p-4 bg-[#06091A]">
          <aside>
            <p>
              Copyright © {new Date().getFullYear()} - Dream11 All right
              reserved
            </p>
          </aside>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
