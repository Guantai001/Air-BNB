class Airbnb < ActiveRecord::Base
    belongs_to :admin
    has_many :reviews
end