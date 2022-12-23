class GigsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :not_found_response
    def create
        render json: Gig.create(gig_params), status: :ok
    end
    def show
        render json: Gig.find(params[:id]), include: [:contacts, :venue, :client], status: :ok
    end
    def update
        gig = Gig.find(params[:id])
        gig.update(gig_params)
        render json: gig, status: :ok
    end

    def index_for_user
        user = User.find(params[:id])
        render json: user.gigs, status: :ok
    end

    private
    def gig_params
        params.permit(:client_id, :venue_id, :occasion, :services, :date, :setup_time, :service_time)
    end
    def not_found_response
        render json: {error: "Gig not found"}, status: :not_found
    end
end
