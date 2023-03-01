class Description < ActiveRecord::Base
    belongs_to :host
    belongs_to :airbnb_property
  end