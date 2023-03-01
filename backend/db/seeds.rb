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
host1 = Host.create(name: "John", email: "jp@gmail.com")

# airbnb
airbnb1 = Airbnb.create(name: "John's place", host_id: host1.id)

# description
description1 = Description.create(description: "This is a great place", host_id: host1.id, airbnb_id: airbnb1.id)

# image
image1 = Image.create(url: "https://www.google.com", airbnb_id: airbnb1.id)

  

puts "✅ Done seeding!"

