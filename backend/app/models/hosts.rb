class Host < ActiveRecord::Base
    has_many :airbnb_properties
    has_many :descriptions
  end