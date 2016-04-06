class CreateFacts < ActiveRecord::Migration
  def change
    create_table :facts do |t|
      t.string :text
      t.references :constellation
    end
  end
end
