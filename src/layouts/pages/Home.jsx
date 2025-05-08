
import { useLoaderData } from 'react-router';
import Banner from '../../componenet/Banner';
import HomeCards from './HomeCards/HomeCards';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    const data = useLoaderData();

    return (
        <div className="w-full">
            <Helmet>
                <title>Company || Home</title>
            </Helmet>
            {/* Banner section */}
            <Banner />

            {/* Uncomment if you add a slider */}
            {/* <SimpleSlider /> */}

            {/* HomeCards section */}
            <div className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">
                <HomeCards data={data} />
            </div>
        </div>
    );
};

export default Home;
