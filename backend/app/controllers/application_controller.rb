class ApplicationController < Sinatra::Base
#  get "/hosts" do
#     @hosts = Host.all
#     # tojson
#     @hosts.to_json
#   end

# get "/airbnbs" do
#     @airbnbs = Airbnb.all
#     # tojson
#     @airbnbs.to_json(include: [:host, :images, :descriptions])
#   end

#     get "/airbnbs/:id" do
#         @airbnb = Airbnb.find(params[:id])
#         @airbnb.to_json(include: [:host, :images, :descriptions])
#     end

#     # post
#     post "/airbnbs" do
#         airbnb = Airbnb.create(
#             name: params[:name],
#             location: params[:location],
#             size: params[:size],
#             price: params[:price],
#             host: params[:host],
#             description: params[:description],
#             image: params[:image]

#         )
#         airbnb.to_json
#     end

get "/airbnbs" do
    @airbnbs = Airbnb.all
    # tojson
    @airbnbs.to_json(include: [:admin, :reviews])
end

get "/airbnbs/:id" do
    @airbnb = Airbnb.find(params[:id])
    @airbnb.to_json
end

# post
post "/airbnbs" do
    airbnb = Airbnb.create(
        name: params[:name],
        location: params[:location],
        size: params[:size],
        price: params[:price],
        admin: params[:admin],
        description: params[:description],
        image: params[:image]

    )
    airbnb.to_json
end


   
        
end
