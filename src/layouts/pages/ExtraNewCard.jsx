import partyImage from "../../assets/party.png";
import eventImage from "../../assets/event.png";
import familyImage from "../../assets/family.png";
import moveImage from "../../assets/function.png";
import { FaBirthdayCake, FaCalendarAlt, FaGlassCheers, FaFilm, FaRegStar, FaStar } from "react-icons/fa";
import Footer from "../../componenet/Footer";
import Navbar from "../../componenet/Navbar";
import { Helmet } from "react-helmet-async";

const ExtraNewCard = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Helmet>
                <title>company || ExtraNewCard</title>
            </Helmet>
            <div className='bg-base-200 p-5 w-11/12 mx-auto shadow-xl mt-8 mb-8 rounded-xl'>
                <h1 className='text-2xl font-bold mb-8 text-center'>Our Event Types</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center'>

                    {/* Card 1 */}
                    <div className='bg-white rounded-2xl shadow-md p-4 w-64 h-80 flex flex-col '>
                        <img className='w-full h-40 object-cover rounded-xl mb-4' src={partyImage} alt="Birthday" />
                        
                        <span className="flex"><h3 className='text-lg font-semibold mt-2'>Birthday Party🎂🎂</h3></span>
                        <p className="text-gray-400 mt-2">Date: 10-5-2025</p>
                        <div className="flex justify-between mt-5">
                            <p>4.20</p>
                            <span className="flex"><FaStar className="text-amber-400" /><FaStar className="text-amber-400" /><FaStar className="text-amber-400" /></span>

                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className='bg-white rounded-2xl shadow-md p-4 w-64 h-80 flex flex-col '>
                        <img className='w-full h-40 object-cover rounded-xl mb-4' src={eventImage} alt="Event" />
                        {/* <FaCalendarAlt className="text-4xl text-blue-600" /> */}
                        <h3 className='text-lg font-semibold mt-2'>Corporate Event🏆🏆</h3>
                        <p className="text-gray-400 mt-2">Date: 12-4-2025</p>
                        <div className="flex justify-between mt-5">
                            
                            <p>4.20</p>
                            <span className="flex"><FaStar className="text-amber-400" /><FaStar className="text-amber-400" /><FaStar className="text-amber-400" /></span>

                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className='bg-white rounded-2xl shadow-md p-4 w-64 h-80 flex flex-col '>
                        <img className='w-full h-40 object-cover rounded-xl mb-4' src={familyImage} alt="Function" />
                        {/* <FaGlassCheers className="text-4xl text-green-600" /> */}
                        <h3 className='text-lg font-semibold mt-2'>Family Function🍀🍀</h3>
                        <p className="text-gray-400 mt-2">Date: 3-4-2025</p>
                        <div className="flex justify-between mt-5">
                            <p>4.20</p>
                            <span className="flex"><FaStar className="text-amber-400" /><FaStar className="text-amber-400" /><FaStar className="text-amber-400" /></span>

                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className='bg-white rounded-2xl shadow-md p-4 w-64 h-80 flex flex-col '>
                        <img className='w-full h-40 object-cover rounded-xl mb-4' src={moveImage} alt="Movie" />
                        {/* <FaFilm className="text-4xl text-purple-600" /> */}
                        <h3 className='text-lg font-semibold mt-2'>Movie Night🌒🌓</h3>
                        <p className="text-gray-400 mt-2">Date: 2-5-2025</p>
                        <div className="flex justify-between mt-5">
                            <p>4.20</p>
                            <span className="flex"><FaStar className="text-amber-400" /><FaStar className="text-amber-400" /><FaStar className="text-amber-400" /></span>

                        </div>
                    </div>

                </div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default ExtraNewCard;
