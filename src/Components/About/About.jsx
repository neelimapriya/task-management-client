import video from '../../assets/https___todoist.com_static_home_complexity-slider_complexity-video.webm'

const About = () => {
    return (
        <div className='min-h-screen pt-10 flex flex-col md:flex-row mb-10 gap-5'>
           
            <div>

                <video controls width="600" height="400" className=''>
                    <source src={video} type='video/mp4'/>
                </video>
            </div>
            <div className='grid items-center justify-center'>
                <ol className='text-2xl font-semibold font-serif space-y-4 '>
                    <li>1. Add a task</li>
                    <li>2. Break it into subtasks</li>
                    <li>3. Move tasks into projects</li>
                   
                    <li>4. Give tasks a priority level</li>
                    <li>5. Complete tasks</li>
                </ol>
            </div>
        </div>
    );
};

export default About;