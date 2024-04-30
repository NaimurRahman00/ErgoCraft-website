
import { useLoaderData } from 'react-router-dom';
import Banner from '../Componants/Banner';
import CraftItem from '../Componants/CraftItem';
import Discover from '../Componants/Discover';
import Testimonials from '../Componants/Testimonials';
import { ToastContainer } from 'react-toastify';
import ArtCraft from '../Componants/ArtCraft';

const Home2 = () => {
    const {crafts} = useLoaderData()
    return (
        <div className='w-[95%] mx-auto max-w-[1440px]'>
            <Banner></Banner>
            <CraftItem crafts={crafts} ></CraftItem>
            <ArtCraft></ArtCraft>
            <Testimonials></Testimonials>
            <Discover></Discover>
            <ToastContainer className="z-20"></ToastContainer>
        </div>
    );
};

export default Home2;