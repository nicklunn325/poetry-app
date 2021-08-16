class SessionsController < ApplicationController
    skip_before_action :authorize, only: [:create]
    def create
        user = User.find_by(username: params[:username])
        if user && user.authenticate(params[:password])
            session[:user_id] = user.id
            render json: { user: user }, status: :ok
        else
            render json: { errors: ['Invalid username and password combination.']}, status: :unauthorized
        end
    end

    def destroy
        session.destroy
    end

end
