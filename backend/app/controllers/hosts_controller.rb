class HostsController < ApplicationController

    # get '/hosts' do

    get '/hosts' do
        @hosts = Host.all
        @hosts.to_json
    end

    # get '/hosts/:id' do
    
        get '/hosts/:id' do
            @host = Host.find(params[:id])
            @host.to_json
        end
    
        # post '/hosts' do
    
        post '/hosts' do
            @host = Host.create(params)
            @host.to_json
        end
    
        # patch '/hosts/:id' do
    
        patch '/hosts/:id' do
            @host = Host.find(params[:id])
            @host.update(params[:host])
            @host.to_json
        end
    
        # delete '/hosts/:id' do
    
        delete '/hosts/:id' do
            @host = Host.find(params[:id])
            @host.destroy
            @host.to_json
        end

end