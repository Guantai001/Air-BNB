class ApplicationController < Sinatra::Base
    set :default_content_type, 'application/json'

    get '/' do
        { message: 'Hello World' }.to_json
    end
    
end