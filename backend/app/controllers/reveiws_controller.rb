class ReviewsController < ApplicationController

    # get '/reviews' do

    get '/reviews' do
        @reviews = Review.all
        @reviews.to_json
    end


    # get '/reviews/:id' do
    
        get '/reviews/:id' do
            @review = Review.find(params[:id])
            @review.to_json
        end
    
        # post '/reviews' do
    
        post '/reviews' do
            @review = Review.create(params)
            @review.to_json
        end
    
        # patch '/reviews/:id' do
    
        patch '/reviews/:id' do
            @review = Review.find(params[:id])
            @review.update(params[:review])
            @review.to_json
        end
    
        # delete '/reviews/:id' do
    
        delete '/reviews/:id' do
            @review = Review.find(params[:id])
            @review.destroy
            @review.to_json
        end

end