import React, { useEffect, useState } from 'react';
import './styles.css';

function CoursesCardList(props) {
    return (
        <div className='courses-card-list'>
            <p>{props.courseName}</p>
        </div>
    );
}

export default CoursesCardList;
