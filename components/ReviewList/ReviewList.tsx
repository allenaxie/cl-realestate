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
            name: 'Adrian',
            image: 'https://scontent.fsac1-2.fna.fbcdn.net/v/t1.6435-9/205385742_4752929548055622_6844612697171109551_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=862hh9XD59wAX9X7Yhu&_nc_ht=scontent.fsac1-2.fna&oh=00_AT9lyyTBGnbeVUJT2KkhgM5Y-N4Mj3iyF0dhHsuuGl3weg&oe=625306F9',
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