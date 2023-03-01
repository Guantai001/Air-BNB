class DescriptionsController < ApplicationController

    get "/descriptions" do
        @descriptions = Description.all
        # tojson
        @descriptions.to_json
    end

    get "/descriptions/:id" do
        @description = Description.find(params[:id])
        @description.to_json
    end


    # post for the below infor
    # create_table :descriptions do |t|
    #     t.text :description
    #     t.references :airbnb, null: false, foreign_key: true
    #     t.references :host, null: false, foreign_key: true
  
    #     t.timestamps
    #   end

    post "/descriptions" do
         description = Description.create(
          description: params[:description],
            airbnb_id: params[:airbnb_id],
            host_id: params[:host_id])
          description.to_json
         end
end