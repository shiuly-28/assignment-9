
import { useLoaderData } from 'react-router';
import Banner from '../../componenet/Banner';
import HomeCards from './HomeCards/HomeCards';


const Home = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div>
          
            <Banner></Banner>
            <HomeCards data={data}></HomeCards>
        </div>
    );
};

export default Home;