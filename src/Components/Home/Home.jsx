import { Link } from 'react-router-dom';
import banner from '../../assets/task_banner-removebg-preview.png'
import Faq from '../FAQ/FAQ';
import About from '../About/About';

const Home = () => {
    return (
        <div>
            <div className='flex flex-col md:flex-row justify-center items-center p-3 pt-20 '>
            <div className='w-1/2 mx-auto text-center '>
                <h2 className='text-3xl md:text-5xl font-bold font-serif'>Organize your work and life, finally.</h2>
                <p className='text-base md:text-xl font-serif w-2/3 mx-auto'>Become focused, organized, and calm with Todoist. The world&apos;s #1 task manager and to-do list app.</p>
                <div className='w-32 mx-auto pt-2'>
                    <Link className='bg-gradient-to-r from-pink-700 to-blue-700 text-white hover:from-green-700 hover:to-yellow-500 p-3 rounded-lg font-serif text-base lg:text-lg flex justify-center cursor-pointer items-center' to='/dashboard/profile'>
                    Let&apos;s Explore
                    </Link>
                </div>
            </div>
            <div className='w-1/2'><img src={banner} alt="" /></div>
        </div>
        <div className='my-10 text-center w-2/3 mx-auto'>
            <h2 className='text-4xl font-bold font-serif'>“Todoist makes it easy to go as simple or as complex as you want”</h2>
            <p className='text-xl font-serif'>- The Verge</p>
        </div>
        <About></About>
        <Faq></Faq>
        </div>
    );
};

export default Home;