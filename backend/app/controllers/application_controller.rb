class ApplicationController < Sinatra::Base
 
# get AirBnB
    get '/airbnbs' do
        @airbnbs = Airbnb.all
        @airbnbs.to_json
    end
 


  end