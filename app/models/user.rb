class User < ApplicationRecord
    has_many :clients, dependent: :delete_all
    has_many :gigs, through: :clients
    has_many :venues, through: :gigs
    has_many :invoices, through: :gigs
    has_many :contacts, through: :clients
    has_secure_password
end
