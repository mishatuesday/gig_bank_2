class Contact < ApplicationRecord
    belongs_to :client
    # belongs_to :gig can't be because they won't always have a gig
    # but they can belong to a gig, is there any way to code that?
    # I guess that's a custom route! contacts_by_gig
end
