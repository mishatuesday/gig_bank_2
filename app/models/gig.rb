class Gig < ApplicationRecord
    has_many :invoices
    belongs_to :client
    belongs_to :venue, optional: true
    # belongs_to: :venue # but what if the gig doesn't have a venue set yet?
    #has_one? can that be optional?
    has_one :user, through: :client
    has_many :contacts
end
