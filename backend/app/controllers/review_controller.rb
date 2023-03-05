class ReviewController < ApplicationController

    get "/reviews" do
        reviews = Review.all
        reviews.to_json
    end

    get "/reviews/:id" do
        reviews = Review.find_by(id: params[:id])
        reviews.to_json
    end

    post "/reviews/" do
        review = Review.create(
            user_name: params[:user_name],
            user_name: params[:user_name],
            comment: params[:comment],
            rating: params[:rating],
            admin: params[:admin_id],
            airbnb: params[:airbnb_id]
        )
        review.to_json
    end

end