import classes from './ReviewList.module.scss';
import ReviewListItem from '../ReviewListItem/ReviewListItem';

const ReviewList = () =>  {

    const reviews = [
        {
            name: 'Allen',
            rating: 5,
            comment: "Calvin is the best real estate agent I've ever seen. He is smart, patient, and works extremely hard to serve his clients. He helped me find my dream home within 30 days! I would recommend Calvin to everyone I know."
        },
        {
            name: 'Adrian',
            rating: 5,
            comment: "I love Calvin."
        }
    ]

    return (
        <>
        {reviews.map(review => 
            <ReviewListItem review={review} />
            )}
        </>
    )
}

export default ReviewList;