class Invoice < ApplicationRecord
    belongs_to :gig
    has_one :client, through: :gig
    has_one :user, through: :client
    
end
