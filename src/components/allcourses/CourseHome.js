import React from 'react'
import CourseCard from './CourseCard';
import Back from '../common/heading\'/Back/Back';

const CourseHome = () => {
  return (
    <div>
        <Back title='Explore Courses'/>
        <h1 className='explore_course'>Explore Courses</h1>
        <CourseCard/>
    </div>
  )
}

export default CourseHome;
