class ImagesController < ApplicationController

    # GET /images
    get '/images' do
        @images = Image.all
        @images.to_json
    end

    # GET /images/:id
    get '/images/:id' do
        @image = Image.find(params[:id])
        @image.to_json
    end

    # POST /images
    post '/images' do
        @image = Image.create(params)
        @image.to_json
    end

    # PATCH /images/:id 
    patch '/images/:id' do
        @image = Image.find(params[:id])
        @image.update(params)
        @image.to_json
    end

    # DELETE /images/:id
    delete '/images/:id' do
        @image = Image.find(params[:id])
        @image.destroy
        @image.to_json
    end

end