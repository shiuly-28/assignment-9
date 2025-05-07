import partyImage from "../../assets/party.png";
import eventImage from "../../assets/event.png";
import functionImage from "../../assets/function.png";
import moveImage from "../../assets/function.png";
import { FaBirthdayCake, FaCalendarAlt, FaGlassCheers, FaFilm, FaRegStar } from "react-icons/fa";
import Footer from "../../componenet/Footer";
import Navbar from "../../componenet/Navbar";

const ExtraNewCard = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='bg-base-200 p-5 w-11/12 mx-auto shadow-xl mt-8 mb-8 rounded-xl'>
                <h1 className='text-2xl font-bold mb-8 text-center'>Our Event Types</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center'>

                    {/* Card 1 */}
                    <div className='bg-white rounded-2xl shadow-md p-4 w-64 h-80 flex flex-col '>
                        <img className='w-full h-40 object-cover rounded-xl mb-4' src={partyImage} alt="Birthday" />

                        <span className="flex"><h3 className='text-lg font-semibold mt-2'>Birthday Party🎂🎂</h3></span>

                        <div className="flex justify-between mt-5">
                            <p>4.20</p>
                            <span className="flex"><FaRegStar /><FaRegStar /><FaRegStar /></span>

                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className='bg-white rounded-2xl shadow-md p-4 w-64 h-80 flex flex-col '>
                        <img className='w-full h-40 object-cover rounded-xl mb-4' src={eventImage} alt="Event" />
                        <FaCalendarAlt className="text-4xl text-blue-600" />
                        <h3 className='text-lg font-semibold mt-2'>Corporate Event</h3>
                        <div className="flex justify-between mt-5">
                            <p>4.20</p>
                            <span className="flex"><FaRegStar /><FaRegStar /><FaRegStar /></span>

                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className='bg-white rounded-2xl shadow-md p-4 w-64 h-80 flex flex-col '>
                        <img className='w-full h-40 object-cover rounded-xl mb-4' src={functionImage} alt="Function" />
                        <FaGlassCheers className="text-4xl text-green-600" />
                        <h3 className='text-lg font-semibold mt-2'>Family Function</h3>
                        <div className="flex justify-between mt-5">
                            <p>4.20</p>
                            <span className="flex"><FaRegStar /><FaRegStar /><FaRegStar /></span>

                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className='bg-white rounded-2xl shadow-md p-4 w-64 h-80 flex flex-col '>
                        <img className='w-full h-40 object-cover rounded-xl mb-4' src={moveImage} alt="Movie" />
                        <FaFilm className="text-4xl text-purple-600" />
                        <h3 className='text-lg font-semibold mt-2'>Movie Night</h3>
                        <div className="flex justify-between mt-5">
                            <p>4.20</p>
                            <span className="flex"><FaRegStar /><FaRegStar /><FaRegStar /></span>

                        </div>
                    </div>

                </div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default ExtraNewCard;
