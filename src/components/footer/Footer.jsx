import { useState } from "react";
import './Footer.css';
import {BsChevronRight} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsTiktok} from 'react-icons/bs'

 function Footer ()
{
    return (
        <section className="footerPage">
        <div className="footerContainer">
            <div className="aboutAgency">
                <div className="descriptionAgency">
                    <h2>ABOUT US</h2>
                    <p>Discover unforgettable journeys with our travel agency. We craft dream vacations, from exotic escapes to cultural adventures, ensuring your travels are hassle-free and filled with unforgettable memories.</p>
                </div>
                <div className="socialMediaAccountsContainer">
                    <ul className="socialMediaAccountsList">
                        <li className="socialMediaIcon"><BsInstagram className="footerSocialMediaIcon"/></li>
                        <li className="socialMediaIcon"><BsFacebook className="footerSocialMediaIcon"/></li>
                        <li className="socialMediaIcon"><BsTiktok className="footerSocialMediaIcon"/></li>
                    </ul>
                </div>
            </div>
            <div className="footerLinks">
                <div className="LinkGroup">
                    <ul className="groupTitle">OUR AGENCY
                    <li className="groupListItem"><BsChevronRight className="listItecomIcon"/>Services</li>
                    <li className="groupListItem"><BsChevronRight className="listItecomIcon"/>Insurance</li>
                    <li className="groupListItem"><BsChevronRight className="listItecomIcon"/>Tourism</li>
                    <li className="groupListItem"><BsChevronRight className="listItecomIcon"/>Payment</li>
                    </ul>
                    <ul className="groupTitle">PARTNERS
                    <li className="groupListItem"><BsChevronRight className="listItecomIcon"/>Booking</li>
                    <li className="groupListItem"><BsChevronRight className="listItecomIcon"/>Airbnb</li>
                    <li className="groupListItem"><BsChevronRight className="listItecomIcon"/>Sky</li>
                    <li className="groupListItem"><BsChevronRight className="listItecomIcon"/>Edreams</li>
                    </ul>
                    <ul className="groupTitle">HELP
                    <li className="groupListItem"><BsChevronRight className="listItecomIcon"/>Contact</li>
                    <li className="groupListItem"><BsChevronRight className="listItecomIcon"/>Insurance</li>
                    <li className="groupListItem"><BsChevronRight className="listItecomIcon"/>Flight Cancellation/Delay</li>
                    <li className="groupListItem"><BsChevronRight className="listItecomIcon"/>Accomodation Issues</li>
                    </ul>
                </div>
            </div>
        </div>
        </section>
    );
}
export default Footer;