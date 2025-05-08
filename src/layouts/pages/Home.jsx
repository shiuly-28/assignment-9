
import { useLoaderData } from 'react-router';
import Banner from '../../componenet/Banner';
import HomeCards from './HomeCards/HomeCards';
import { Helmet } from 'react-helmet-async';



const Home = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div>
            <Helmet>
                <title>Company || Home</title>
          </Helmet>
            <Banner></Banner>
            {/* <SimpleSlider></SimpleSlider> */}
            <HomeCards data={data}></HomeCards>
        </div>
    );
};

export default Home;