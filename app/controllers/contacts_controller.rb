class ContactsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :not_found_response
    def create
        render json: Contact.create(contact_params), status: :ok
    end
    def update
        contact = Contact.find(params[:id])
        render json: contact.update(followup_date: params[:followup_date]), status: :ok
    end
    
    def index_for_user
        user = User.find(params[:id])
        render json: user.contacts, status: :ok
    end

    private
    def contact_params
        params.permit(:date, :method, :client_id, :gig_id, :notes, :followup_date)
    end
    def not_found_response
        render json: {error: "Contact not found"}, status: :not_found
    end
end
