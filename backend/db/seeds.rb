puts "🌱 Seeding messages..."

# # app/models/host.rb
# class Host < ActiveRecord::Base
#     has_many :airbnb_properties
#     has_many :descriptions
#   end
  
#   # app/models/airbnb_property.rb
#   class AirbnbProperty < ActiveRecord::Base
#     belongs_to :host
#     has_many :descriptions
#     has_many :images
#   end
  
#   # app/models/description.rb
#   class Description < ActiveRecord::Base
#     belongs_to :host
#     belongs_to :airbnb_property
#   end
  
#   # app/models/image.rb
#   class Image < ActiveRecord::Base
#     belongs_to :airbnb_property
#   end

# host
host1 = Host.create!(
    name: "John",
    email: "jp@gmail.com"
)

# airbnb_property
airbnb_property1 = AirbnbProperty.create!(
    name: "John's place",
    location: "New York",
    size: 1,
    price: 100,
    host_id: host1.id
)

# description
description1 = Description.create!(
    description: "John's place is a great place to stay",
    host_id: host1.id,
    airbnb_property_id: airbnb_property1.id
)

# image
image1 = Image.create!(
    url: "https://images.unsplash.com/photo-1558987905-8b6c7b9f1c9c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    airbnb_property_id: airbnb_property1.id
)


  

puts "✅ Done seeding!"

