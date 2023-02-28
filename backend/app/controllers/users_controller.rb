class UsersController < ApplicationController

    # User

    get '/users' do
        @users = User.all
        @users.to_json
    end

    get '/users/:id' do
        @user = User.find(params[:id])
        @user.to_json
    end

    post '/users' do
        name = params[:name]
        email = params[:email]
        password = params[:password]

        if (name.present? && email.present? && password.present?)
            message = "Please fill out all fields"
            message.to_json
        check_email_exist = User.where(email: email).count()
        if check_email_exist < 1
        user = User.create(name: name, email: email, password: password)
        if user 
            message = "User created successfully"
            message.to_json
        else
            message = "User not created"
           message.to_json
        end
    else
        message = "Email already exist"
        message.to_json
    end
    else
        message = "Please fill out all fields"
        message.to_json
    end
        
    end

    patch '/users/:id' do
        @user = User.find(params[:id])
        @user.update(params)
        @user.to_json
    end

    delete '/users/:id' do
       count = User.where(id: params[:id]).count()
         if count > 0   
            @user = User.find(params[:id])
            @user.destroy
            @user.to_json
        else
            message = "User not found"
            message.to_json
        end
    end




end