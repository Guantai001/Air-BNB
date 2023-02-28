class CreateRooms < ActiveRecord::Migration[6.1]
  def change
    create_table :rooms do |t|
      t.string :name
      t.text :description
      t.integer :max_guests
      t.references :airbnb, null: false, foreign_key: true
      t.timestamps
    end
  end
end
