# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts 'seeding database:'
puts 'creating user...'
User.create(first_name: "Misha", last_name: "Tuesday", business_name: "Tuesday Productions, LLC", email: "mishatuesday@gmail.com")

puts 'creating clients...'
Client.create(user_id: 1, first_name: "Kyle", last_name: "Roemnich", company: "Fort Wayne Property Group", email: "fwpg6605@yahoo.com", phone: "260 705 6824")

puts 'creating gigs...'
Gig.create(client_id: 1, occasion: "Holiday Party", services: "Comedy magic show", date: "2022-12-17", setup_time: "6:30 PM", service_time: "7:00 PM", venue_id: 1)

puts 'creating contacts...'
Contact.create(client_id: 1, gig_id: 1, date: "2022-11-19", method: "quoted on The Bash", notes: "Quoted $699")
Contact.create(client_id: 1, gig_id: 1, date: "2022-12-13", method: "phone", notes: "Got venue address and I'm welcome to eat there")

puts 'creating venues...'
Venue.create(name: "Parkview Field", street: "1301 Ewing St", city: "Fort Wayne", state: "IN", zip_code: "46802", phone: "(260) 482-6400")

puts 'seeding complete!'