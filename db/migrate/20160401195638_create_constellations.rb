class CreateConstellations < ActiveRecord::Migration
  def change
    create_table :constellations do |t|
      t.string :name
      t.string :origin
      t.string :visibility
      t.string :star
      t.string :star_distance_from_earth
      t.string :image_url
    end
  end
end
