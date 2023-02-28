class Room < ActiveRecord::Base
    belongs_to :airbnb
    has_many :images
    has_many :reviews
  end