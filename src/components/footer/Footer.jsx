import "./Footer.css";
import { BsChevronRight } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsTiktok } from "react-icons/bs";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <section className="footerPage">
      <div className="footerContainer">
        <div className="aboutAgency">
          <div className="descriptionAgency">
            <h2>ABOUT US</h2>
            <p>
              Discover unforgettable journeys with our travel agency. We craft
              dream vacations, from exotic escapes to cultural adventures,
              ensuring your travels are hassle-free and filled with
              unforgettable memories.
            </p>
          </div>
          <div className="socialMediaAccountsContainer">
            <ul className="socialMediaAccountsList">
              <li className="socialMediaIcon">
                <BsInstagram className="footerSocialMediaIcon" />
              </li>
              <li className="socialMediaIcon">
                <BsFacebook className="footerSocialMediaIcon" />
              </li>
              <li className="socialMediaIcon">
                <BsTiktok className="footerSocialMediaIcon" />
              </li>
            </ul>
          </div>
        </div>
        <div className="footerLinks">
          <div className="LinkGroup">
            <ul className="groupTitle">
              OUR AGENCY
              <li className="groupListItem">
              <Link to="/packages">
                <BsChevronRight className="listItecomIcon" />
                Services
                </Link>
              </li>
              <li className="groupListItem">
              <Link to="/contact">
                <BsChevronRight className="listItecomIcon" />
                Insurance
              </Link>
              </li>
              <li className="groupListItem">
              <Link to="/packages">
                <BsChevronRight className="listItecomIcon" />
                Tourism
              </Link>
              </li>
              <li className="groupListItem">
              <Link to="/contact">
                <BsChevronRight className="listItecomIcon" />
                Payment
                </Link>
              </li>
            </ul>
            <ul className="groupTitle">
              PARTNERS
              <li className="groupListItem">
                <BsChevronRight className="listItecomIcon" />
                Booking
              </li>
              <li className="groupListItem">
                <BsChevronRight className="listItecomIcon" />
                Airbnb
              </li>
              <li className="groupListItem">
                <BsChevronRight className="listItecomIcon" />
                SkyScanner
              </li>
              <li className="groupListItem">
                <BsChevronRight className="listItecomIcon" />
                Edreams
              </li>
            </ul>
            <ul className="groupTitle">
              HELP
              <li className="groupListItem">
              <Link to="/contact">
                <BsChevronRight className="listItecomIcon" />
                Contact
                </Link>
              </li>
              <li className="groupListItem">
              <Link to="/contact">
                <BsChevronRight className="listItecomIcon" />
                Insurance
                </Link>
              </li>
              <li className="groupListItem">
              <Link to="/contact">
                <BsChevronRight className="listItecomIcon" />
                Flight Cancellation/Delay
                </Link>
              </li>
              <li className="groupListItem">
              <Link to="/contact">
                <BsChevronRight className="listItecomIcon" />
                Accomodation Issues
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Footer;
