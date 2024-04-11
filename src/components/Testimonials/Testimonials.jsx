import { useEffect, useState } from 'react'
import Carousel from 'better-react-carousel'
import { Wrapper, TestimonialItem, TestimonialDetails, Dot } from '../../theme/theme'
// import { AiFillStar, AiOutlineStar, AiTwotoneStar } from 'react-icons/ai'

const Testimonials = props => {
  const [reviewData, setReviewData] = useState([])

  useEffect(() => {
    if (props.data) {
      // const _data = props.data.sort((a,b) => {
      //   return a.order[props.idx] - b.order[props.idx]
      // })
      setReviewData(props.data)
    }
  }, [props])

  // const renderStars = rank => {
  //   const totalStars = 5
  //   return (
  //     <div className='star-rating'>
  //       {[...Array(totalStars)].map((el, i) =>
  //         // check if current star should be half
  //         i < rank && i + 1 > rank ? (
  //           <AiTwotoneStar key={i} color={'#fec017'} size={20}></AiTwotoneStar>
  //         ) : // not half, so check if current star should be full
  //         i < rank ? (
  //           <AiFillStar key={i} color={'#fec017'} size={20}></AiFillStar>
  //         ) : (
  //           // else, current star should be empty
  //           <AiOutlineStar key={i} size={20}></AiOutlineStar>
  //         )
  //       )}
  //     </div>
  //   )
  // }

  const MyDot = ({ isActive }) => {
    return (
      <Dot
        className={`${isActive ? ' active' : ''}`}
        style={{
          width: isActive ? '100px' : '13px'
        }}
      />
    )
  }

  return (
    <Carousel cols={2} rows={1} gap={25} loop scrollSnap={true} showDots='true' dot={MyDot}>
      {reviewData.map((item, idx) => {
        return (
          <Carousel.Item key={idx}>
            <Wrapper>
              <TestimonialItem>
                {/* {renderStars(item.rate)} */}
                {/* <TestimonialImage src={'https://images.unsplash.com/photo-1572561300743-2dd367ed0c9a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=300'}></TestimonialImage> */}
                <TestimonialDetails>
                  <p className='card-text'>{item.review}</p>
                  <h5>
                    {item.user} <br />
                    <span></span>
                  </h5>
                </TestimonialDetails>
              </TestimonialItem>
            </Wrapper>
          </Carousel.Item>
        )
      })}
    </Carousel>
  )
}

export default Testimonials
