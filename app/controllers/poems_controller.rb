class PoemsController < ApplicationController
    skip_before_action :authorize, only: [:index]

    def index
        poems = Poem.all 
        render json: { poems: poems }, status: :ok 
    end

    def create
        # byebug
        poem = @current_user.poems.build(poem_params)
        if poem.save! 
            render json: { poem: poem }, status: 201
        end
    end

    private

    def poem_params
        params.permit(:title, :content, :category_id)
    end
end
