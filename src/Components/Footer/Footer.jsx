
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-800 text-gray-300 py-8 px-4">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between">
    {/* Company Info */}
    <div className="mb-6 md:mb-0">
      <h2 className="text-xl font-bold mb-2">StayFinder</h2>
      <p>© 2025 StayFinder. All rights reserved.</p>
    </div>

    {/* Quick Links */}
    <div className="mb-6 md:mb-0">
      <h3 className="font-semibold mb-2">Quick Links</h3>
      <ul>
        <li><a href="/" className="hover:underline">Home</a></li>
        <li><a href="/listings" className="hover:underline">Listings</a></li>
        <li><a href="/about" className="hover:underline">About Us</a></li>
        <li><a href="/contact" className="hover:underline">Contact</a></li>
        <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
      </ul>
    </div>

    {/* Contact Info */}
    <div>
      <h3 className="font-semibold mb-2">Contact</h3>
      <p>Email: support@stayfinder.com</p>
      <p>Phone: +880 1234 567890</p>
    </div>
  </div>

  {/* Social Media */}
  <div className="mt-8 flex justify-center space-x-6">
    <a href="#" aria-label="Facebook" className="hover:text-white text-2xl  text-white"> <CiFacebook /></a>
    <a href="#" aria-label="Twitter" className="hover:text-white text-2xl"><CiTwitter /></a>
    <a href="#" aria-label="Instagram" className="hover:text-white text-2xl"><FaInstagram /></a>
  </div>
</footer>

        </div>
    );
};

export default Footer;