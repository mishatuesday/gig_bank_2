class Client < ApplicationRecord
    belongs_to :user
    has_many :gigs
    has_many :contacts # can also have many contacts through gigs... is this a problem?
    has_many :venues, through: :gigs
    has_many :invoices, through: :gigs
    
end
