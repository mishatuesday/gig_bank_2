class VenuesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :not_found_response
    def index
        venues = Venue.all
        businesses = venues.select {|v| v.business == true}
        render json: businesses, status: :ok
    end
    def create
        render json: Venue.create(venue_params), status: :ok
    end
    def update
        venue = Venue.find(params[:id])
        venue.update(venue_params)
        render json: venue, status: :ok
    end
    def destroy
        #if someone deletes a venue, it deletes for all users. This is wrong.
        venue = Venue.find(params[:id])
        venue.destroy
        render json: {}, status: :ok
    end

    private
    def venue_params
        params.permit(:name, :street, :city, :state, :zip_code, :email, :phone, :business)
        #gosh this really shouldn't be editable by a user for everyone else... using that method for project though cuz Princeton wants it.
    end
    def not_found_response
        render json: {error: "Venue not found"}, status: :not_found
    end
end
