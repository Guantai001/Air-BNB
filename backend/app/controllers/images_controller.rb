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
    
        img = Image.create(
            url: params[:url],
            airbnb_id: params[:airbnb_id]
        )
        img.to_json
    
    end

end
