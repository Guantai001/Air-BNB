class AirbnbProperty < ActiveRecord::Base
    belongs_to :host
    has_many :descriptions
    has_many :images
  end