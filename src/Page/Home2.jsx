
import { useLoaderData } from 'react-router-dom';
import Banner from '../Componants/Banner';
import CraftItem from '../Componants/CraftItem';
import Discover from '../Componants/Discover';
import Testimonials from '../Componants/Testimonials';

const Home2 = () => {
    const crafts = useLoaderData()
    return (
        <div className='w-[95%] mx-auto max-w-[1440px]'>
            <Banner></Banner>
            <CraftItem crafts={crafts} ></CraftItem>
            <Testimonials></Testimonials>
            <Discover></Discover>
        </div>
    );
};

export default Home2;