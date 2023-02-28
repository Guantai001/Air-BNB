class RoomsController < ApplicationController

    # get '/rooms' do 

     get '/rooms' do
        @rooms = Room.all
        @rooms.to_json
    end

    # get '/rooms/:id' do

    get '/rooms/:id' do
        @room = Room.find(params[:id])
        @room.to_json
    end

    # post '/rooms' do

    post '/rooms' do
        @room = Room.create(params)
        @room.to_json
    end

    # patch '/rooms/:id' do

    patch '/rooms/:id' do
        @room = Room.find(params[:id])
        @room.update(params[:room])
        @room.to_json
    end

    # delete '/rooms/:id' do

    delete '/rooms/:id' do
        @room = Room.find(params[:id])
        @room.destroy
        @room.to_json
    end

end