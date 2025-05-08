import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="w-full bg-gray-100 text-gray-800 py-10 px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
                {/* Company Info */}
                <div>
                    <h2 className="text-2xl font-bold mb-3 text-secondary">Event Planning</h2>
                    <p className="text-sm leading-relaxed">
                        Empowering you with legal solutions. <br />
                        Book trusted lawyers anytime, anywhere.
                    </p>
                </div>

                {/* Useful Links */}
                <div>
                    <h3 className="text-xl font-semibold mb-3">Useful Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-secondary transition duration-200">Terms & Conditions</a></li>
                        <li><a href="#" className="hover:text-secondary transition duration-200">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-secondary transition duration-200">Contact Us</a></li>
                    </ul>
                </div>

                {/* Social Media */}
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
                    <div className="flex space-x-4">
                        <a href="https://facebook.com" target="_blank" rel="noreferrer"
                            className="hover:text-secondary transition duration-200">
                            <FaFacebookF size={20} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer"
                            className="hover:text-secondary transition duration-200">
                            <FaTwitter size={20} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer"
                            className="hover:text-secondary transition duration-200">
                            <FaLinkedinIn size={20} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer"
                            className="hover:text-secondary transition duration-200">
                            <FaInstagram size={20} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Text */}
            <div className="text-center text-xs text-gray-600 mt-10 border-t border-gray-300 pt-4">
                &copy; {new Date().getFullYear()} Event Planning. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
