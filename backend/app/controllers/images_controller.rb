class ImagesController < ApplicationController

    
     get "/images" do

        @images = Image.all
        # tojson
        @images.to_json
    end

    get "/images/:id" do
        @image = Image.find(params[:id])
        @image.to_json
    end

    # post

    post "/images" do
        image = Image.create(
            image: params[:image],
            airbnb_id: params[:airbnb_id])
        image.to_json
    end

end
