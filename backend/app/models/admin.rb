class Admin < ActiveRecord::Base
    has_many :airbnb
    has_many :reviews    
  
end