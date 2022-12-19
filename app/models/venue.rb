class Venue < ApplicationRecord
    has_many :gigs
    has_many :clients, through: :gigs
    has_many :users, through: :clients
end
