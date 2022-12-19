import React, { useEffect, useState } from 'react';
import people from '../data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [review, setReview] = useState(people[0]);
  const [reviewIdx, setReviewIdx] = useState(0);

  useEffect(() => {
    setReview(people[reviewIdx]);
  }, [reviewIdx])

  const reviewPagination = (increment) => {
    setReviewIdx((prevIdx) => {
      const value = prevIdx + increment;
      const totalReviews = people.length - 1

      if(value < 0) return totalReviews;
      if(value > totalReviews) return 0;

      return value;
    });
  }

  const randomReview = () => {
    let randomIdx = Math.floor( Math.random() * people.length)
    if(randomIdx === reviewIdx){
      randomIdx = (reviewIdx === people.length - 1) ? 0 : reviewIdx + 1;
    }

    setReviewIdx(randomIdx)
  }

  return (
    <>
      <div className='review'>
        <div className='img-container'>
          <img className='person-img' src={ review.image } alt={review.name}/>
          <div className='quote-icon'>
            <FaQuoteRight/>
          </div>
        </div>
        <h4 className='author'>{ review.name }</h4>
        <p className='job'>{ review.job }</p>
        <p className='info'>{ review.text }</p>

        <div>
          <button className='prev-btn' onClick={() => reviewPagination(-1)}>
            <FaChevronLeft />
          </button>

          <button className='next-btn' onClick={() => reviewPagination(1)}>
            <FaChevronRight  />
          </button>
        </div>

        <button
          className='random-btn'
          onClick={() => randomReview()}
        >
          Surprise Me
        </button>
      </div>
      
    </>
  )
};

export default Review;
