puts "🌱 Seeding data..."

# Create a Host
host = Host.create(
    name: "John Doe",
    email: "johnDoe@gmail.com",
    phone: "123-456-7890"
)

# Create an Airbnb
airbnb = Airbnb.create(
    title: "John's Airbnb",
    description: "This is a great place to stay!",
    address: "123 Main St, New York, NY 10001",
    price: 100,
    host: host
)

# Create a Room
room = Room.create(
    name: "John's Room",
    description: "This is a great room to stay in!",
    max_guests: 2,
    airbnb: airbnb
)

# Create a User
user = User.create(
    name: "Jane Doe",
    email: "janedoe@gmail.com",
    password: "password"
)

# Create a Review
review = Review.create(
    body: "This is a great place to stay!",
    rating: 5,
    user: user,
    room: room
)

# Create an Image
image = Image.create(
    url: "https://images.unsplash.com/photo-1614691364389-1b5b1b5e1b1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    caption: "This is a great place to stay!",
    room: room
)
puts "🌱 Done seeding!"