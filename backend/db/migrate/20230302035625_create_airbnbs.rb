class CreateAirbnbs < ActiveRecord::Migration[6.1]
  def change
    create_table :airbnbs do |t|
      t.string :name
      t.string :location
      t.string :description
      t.integer :size
      t.integer :price
      t.string :image

      t.references :admin, null: 0, foreign_key: true

      t.timestamps
    end
  end
end
