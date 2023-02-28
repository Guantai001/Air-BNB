class CreateAirbnbs < ActiveRecord::Migration[6.1]
  def change
    create_table :airbnbs do |t|
      t.string :title
      t.text :description
      t.string :address
      t.decimal :price
      t.references :host, null: false, foreign_key: true
      t.timestamps
    end
  end
end
