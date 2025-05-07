import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="w-11/12 mx-auto text-black py-10 px-6 mt-10">
            <div className="max-w-7xl mx-auto text-center grid md:grid-cols-3 gap-8">
                {/* Company Info */}
                <div>
                    <h2 className="text-2xl font-bold mb-2">Event Planing</h2>
                    <p className="text-sm">
                        Empowering you with legal solutions.<br/> Book trusted lawyers anytime.
                    </p>
                </div>

                {/* Links */}
                <div>
                    <h3 className="text-xl font-semibold mb-2">Useful Links</h3>
                    <ul className="space-y-1 text-sm">
                        <li><a href="/terms" className="hover:text-white">Terms & Conditions</a></li>
                        <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
                        <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
                    <div className="flex space-x-4">
                        <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-white">
                            <FaFacebookF size={20} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white">
                            <FaTwitter size={20} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white">
                            <FaLinkedinIn size={20} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white">
                            <FaInstagram size={20} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Text */}
            <div className="text-center text-sm mt-8 border-t border-gray-700 pt-4">
                &copy; {new Date().getFullYear()} Event Planning. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
