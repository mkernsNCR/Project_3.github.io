# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Constellation.destroy_all
# Constellation.create!(JSON.parse(File.read("db/constellations_data.json")))
constdata= JSON.parse(File.read("db/constellations_data.json"))
constdata.each do |constellation|
  new_constelllation= Constellation.create!(constellation["constdata"])
  constellation["facts"].each do |fact|
    new_constelllation.facts.create!(text: fact)
  end
end
# Constellation.create(name: 'Jon', image_url: "http://google.com")
