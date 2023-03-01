class HostsController < ApplicationController


    get "/hosts" do
        @hosts = Host.all
        # tojson
        @hosts.to_json
    end

    get "/hosts/:id" do
        @host = Host.find(params[:id])
        @host.to_json
    end

    # post
    post "/hosts" do
       host = Host.create(
        name: params[:name],
         email: params[:email])
        host.to_json
       end



end