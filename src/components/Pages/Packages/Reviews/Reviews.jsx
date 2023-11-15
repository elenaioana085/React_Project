import { useState } from "react";
import React from 'react';
import { ContainerCardReview, ContainerReviews, ContainerReviewsJustCards, ContainerReviewsTextAndCards, ContainerReviewsTitle } from "./Reviews.style";
import Card from 'react-bootstrap/Card';
import {BsFillStarFill} from "react-icons/bs";



function Reviews () {

const reviewsSet = [
    {
        id:"1",
        user:"Razvan",
        package:"Dubai Travel Package",
        text:"Exceptional travel package: Stunning destinations, seamless planning, friendly staff. My dream vacation became a reality!"
    }, 
        
    {
        id:"2",
        user:"Dragos",
        package:"Poros Travel Package",
        text:"Fantastic travel package: Memorable experiences, great value, top-notch accommodations. A journey I'll cherish forever."
    }, 

    {
        id:"3",
        user:"Maria",
        package:"Cairo Travel Package",
        text:"Incredible travel package: Unforgettable adventures, excellent service, exceeded expectations. The trip of a lifetime!"
    }
]

    return(
        <ContainerReviews>
            <ContainerReviewsTitle>
                <h2>See what our customers have to say</h2>
            </ContainerReviewsTitle>
            <ContainerReviewsJustCards>
                {reviewsSet.map((item)=>(
                    <ContainerCardReview key={item.id}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>{item.user}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{item.package}</Card.Subtitle>
                                    <Card.Text>
                                    {item.text}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer as="h5">
                                    <BsFillStarFill/>
                                    <BsFillStarFill/>
                                    <BsFillStarFill/>
                                    <BsFillStarFill/>
                                    <BsFillStarFill/>
                                    </Card.Footer>
                                </Card>
                    </ContainerCardReview>
                ))}
                

            </ContainerReviewsJustCards>

        </ContainerReviews>
    );
}

export default Reviews;