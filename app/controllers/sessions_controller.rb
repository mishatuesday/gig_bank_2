class SessionsController < ApplicationController

    def create
        params.permit(:email, :password, :session)
        user = User.find_by(email: params[:email])
        if user&.authenticate(params[:password])

            render json: user, status: :ok
        else
            render json: {error: "Login invalid"}, status: :not_found
        end
    end
    def destroy
        # i don't understand what this does i'm not using session cookies...
        # I don't think I need this if I'm not using session cookies... but is it safe to have logout only on the front end?
        session.delete :user_id
        head :no_content
    end
end