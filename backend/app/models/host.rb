class Host < ActiveRecord::Base
    has_many :airbnbs
    has_many :descriptions
  end