puts "🌱 Seeding messages..."


# create a seed for an airbnb form the above data
admin = Admin.create(
  admin: "John Smith",
  email: "johnsmith@example.com",
 
)

airbnb = Airbnb.create(
  title: "The Cozy Cottage",
  location: "New York, NY",
  description: "This is a cozy cottage in the heart of New York City. It is a 2 bedroom, 1 bathroom home with a full kitchen and living room. It is located in the heart of the city, close to all the major attractions. It is a great place to stay if you are looking for a quiet place to relax and enjoy the city.",
  price: 100,
  size: 2,
  image: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Ym9va3xlbnwwfHwwfHw%3D&w=1000&q=80",
  admin: admin,
  
)

review = Review.create(
  user_name: "Jane Doe",
  user_email: "janedoe@example.com",
  comment: "This is a great place to stay. It is very clean and the host is very friendly. I would definitely stay here again.",
  rating: 5,
 
)





puts "✅ Done seeding!"

