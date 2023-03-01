class ApplicationController < Sinatra::Base
 

  get '/hosts' do
    @hosts = Host.all
    @hosts.to_json
  end

  end