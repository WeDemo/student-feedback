import React from 'react';

import BarGuage from './BarGuage.jsx';
import set from '../helperFunctions.jsx';

const SummaryRow = props => (
  <div className='studentFeedbackGraphRow' style={{ opacity: set.opacity(props.selectedStar, props.star) }} onClick={props.ratingFilter}>
    <BarGuage percent={ props.percent * 100 }/>
    <span>
      <img className='summaryStars' src={`https://s3.us-east-2.amazonaws.com/udemy-demo-tarik/${props.star}+stars+white.png`}></img>
    </span>
    <div className='starButtonHolder'>
      <button className='starButton'>{Math.round(props.percent * 100)}%</button>
    </div>
  </div>
);

export default SummaryRow;
