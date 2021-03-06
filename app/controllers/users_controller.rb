class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create]
    
    def create
        user = User.create!(user_params)
        # new User 
        session[:user_id] = user.id
        # byebug
        render json: { user: user }, status: :created
    end

    def show
        # check for session id and log user in if they have one
        if session[:user_id]
            user = User.find(session[:user_id])
            # options = { include: [:poems]}
            user_json = UserSerializer.new(user).serializable_hash
            poem_json = PoemSerializer.new(user.poems).serializable_hash
            render json: {user: user_json, poems: poem_json}, status: :ok
        end
        
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation)
    end

end
