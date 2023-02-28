class Airbnb < ActiveRecord::Base
    belongs_to :host
    has_many :rooms
  end