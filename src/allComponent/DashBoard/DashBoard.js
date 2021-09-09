import React from 'react';
import Courses from '../Courses/Courses';
import Feedback from '../Feedback/Feedback';
import Footer from '../Footer/Footer';
import HeaderPartOne from '../HeaderSection/HeaderPartOne';
import HeaderPartTwo from '../HeaderSection/HeaderPartTwo';

const DashBoard = () => {
    return (
        <div class="bg">
           <HeaderPartOne></HeaderPartOne>
           <HeaderPartTwo></HeaderPartTwo>
           <Courses></Courses>
           <Feedback></Feedback>
           <Footer></Footer>
        </div>
    );
};

export default DashBoard;