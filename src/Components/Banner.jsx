import React from 'react'

const Banner = ({ jobsRef }) => {
    const scrollToJobs = () => {
      jobsRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div>
            <div className='md:flex items-center text-center md:text-left lg:text-left mb-12 px-6'>
                <div className="header-details md:w-3/5 tracking-wider ">
                    <h1 className='text-7xl w-auto md:w-5/6'>
                        One Step Closer  To Your <span className='custom-text text-7xl'>Dream Job</span>
                    </h1>
                    <p className='w-auto md:w-5/6 mt-6 leading-relaxed'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button onClick={scrollToJobs} className='custom-btn mt-4'>Get Started</button>
                </div>
                <div className="image-section mt-10 md:mt-0 lg:mt-0 md:w-1/2 ">
                   <img className='bg-transparent' src="./src/assets/job.png" alt="" />
                </div>
            </div>
        </div>
    );
}

export default Banner