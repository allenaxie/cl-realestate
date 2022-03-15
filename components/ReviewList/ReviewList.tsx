import classes from './ReviewList.module.scss';
import ReviewListItem from '../ReviewListItem/ReviewListItem';

const ReviewList = () =>  {

    const reviews = [
        {
            name: 'Allen',
            image: 'https://i.imgur.com/tuQtA1X.jpg',
            rating: 5,
            comment: "Calvin is the best real estate agent I've ever seen. He is smart, patient, and works extremely hard to serve his clients. He helped me find my dream home within 30 days! I would recommend Calvin to everyone I know."
        },
        {
            name: 'Jisoo',
            image: 'images/jisoo-review.jpeg',
            rating: 5,
            comment: "Calvin is an amazing agent and friend."
        }
    ]

    return (
        <>
        {reviews.map((review,idx) => 
            <ReviewListItem review={review} key={idx}/>
            )}
        </>
    )
}

export default ReviewList;