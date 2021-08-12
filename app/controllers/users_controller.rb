class UsersController < ApplicationController

    def create
        user = User.create!(user_params)
        # byebug;
        session[:user_id] = user.id
        render json: { user: user }, status: :created
    end

    def show
        # check for session id and log user in if they have one
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation)
    end

end
