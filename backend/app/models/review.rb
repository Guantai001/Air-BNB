class Review < ActiveRecord::Base
    belongs_to :airbnb
    belongs_to :admin
end