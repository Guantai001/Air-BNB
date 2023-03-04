class ApplicationController < Sinatra::Base
    set :default_content_type, 'application/json'


    get "/" do
        airbnbs = Airbnb.all
        airbnbs.to_json(include: [:admin])
    end

    get "/airbnbs/:id" do
        airbnbs = Airbnb.find_by(id: params[:id])
        airbnbs.to_json
    end


    post "/airbnbs/" do
        airbnb = Airbnb.create(
            title: params[:title],
            location: params[:location],
            description: params[:description],
            size: params[:size],
            price: params[:price],
            image: params[:image],
            admin: params[:admin_id]
        )
        airbnb.to_json
       {
            "message": "Airbnb created successfully",
            "status": "success"
       }.to_json
    end

    delete "/airbnbs/:id" do
        airbnb = Airbnb.find_by(id: params[:id])
        airbnb.destroy
        airbnb.to_json
    end

    patch "/airbnbs/:id" do
        airbnb = Airbnb.find_by(id: params[:id])
        airbnb.update(
            title: params[:title],
            location: params[:location],
            description: params[:description],
            size: params[:size],
            price: params[:price],
            image: params[:image],
            admin: params[:admin_id]
        )
        airbnb.to_json
    end


end

