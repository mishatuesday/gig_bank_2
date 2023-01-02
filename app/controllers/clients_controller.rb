class ClientsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :not_found_response
    def create
        client = Client.create(client_params)
        render json: client, status: :ok
    end
    def show
        client = Client.find(params[:id])
        render json: client, include: :contacts, status: :ok
    end
    def update
        client = Client.find(params[:id])
        client.update(client_params)
        render json: client, status: :ok
    end

    def index_for_user
        user = User.find(params[:id])
        render json: user.clients, status: :ok
    end


    private
    def client_params
        params.permit(:user_id, :first_name, :last_name, :company, :email, :phone, :notes)
    end
    def not_found_response
        render json: {error: "Client not found"}, status: :not_found
    end
end
