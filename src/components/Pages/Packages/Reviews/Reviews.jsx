import { useState } from "react";
import React from 'react';
import { ContainerCardReview, ContainerReviews, ContainerReviewsJustCards, ContainerReviewsTextAndCards, ContainerReviewsTitle } from "./Reviews.style";

import CardReviewsONE from "./cardsReviews/cardsReviewsONE";
import CardReviewsTWO from "./cardsReviews/cardsReviewsTWO";
import CardReviewsTHREE from "./cardsReviews/cardsReviewsTHREE";



function Reviews () {
    return(
        <ContainerReviews>
            <ContainerReviewsTitle>
                <h2>See what our customers have to say</h2>
            </ContainerReviewsTitle>
            <ContainerReviewsJustCards>
                <ContainerCardReview>
                    <CardReviewsONE></CardReviewsONE>
                </ContainerCardReview>

                <ContainerCardReview>
                    <CardReviewsTWO></CardReviewsTWO>
                </ContainerCardReview>

                <ContainerCardReview>
                    <CardReviewsTHREE></CardReviewsTHREE>
                </ContainerCardReview>
            </ContainerReviewsJustCards>

        </ContainerReviews>
    );
}

export default Reviews;