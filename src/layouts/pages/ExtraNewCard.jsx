import partyImage from "../../assets/party.png";
import eventImage from "../../assets/event.png";
import familyImage from "../../assets/family.png";
import moveImage from "../../assets/function.png";
import { FaStar } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const ExtraNewCard = () => {
    return (
        <div className="mt-20">
            <Helmet>
                <title>Company || ExtraNewCard</title>
            </Helmet>

        <div className=" px-4 sm:px-6 md:px-10">
                <div className="bg-base-200 sm:p-10 shadow-xl rounded-xl">
                    <h1 className="text-2xl font-bold  text-center">Our Event Types</h1>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Reusable Card Component */}
                        {[
                            {
                                title: "Birthday Party🎂🎂",
                                image: partyImage,
                                date: "10-5-2025"
                            },
                            {
                                title: "Corporate Event🏆🏆",
                                image: eventImage,
                                date: "12-4-2025"
                            },
                            {
                                title: "Family Function🍀🍀",
                                image: familyImage,
                                date: "3-4-2025"
                            },
                            {
                                title: "Movie Night🌒🌓",
                                image: moveImage,
                                date: "2-5-2025"
                            }
                        ].map((event, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl shadow-md p-4 max-w-sm w-full mx-auto flex flex-col"
                            >
                                <img
                                    className="w-full h-40 object-cover rounded-xl mb-4"
                                    src={event.image}
                                    alt={event.title}
                                />
                                <h3 className="text-lg font-semibold mt-2">{event.title}</h3>
                                <p className="text-gray-400 mt-2">Date: {event.date}</p>
                                <div className="flex justify-between mt-5">
                                    <p>4.20</p>
                                    <span className="flex">
                                        <FaStar className="text-amber-400" />
                                        <FaStar className="text-amber-400" />
                                        <FaStar className="text-amber-400" />
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtraNewCard;
