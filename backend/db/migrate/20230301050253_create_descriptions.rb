class CreateDescriptions < ActiveRecord::Migration[6.1]
  def change
    create_table :descriptions do |t|
      t.text :description
      t.references :airbnb, null: false, foreign_key: true
      t.references :host, null: false, foreign_key: true

      t.timestamps
    end
  end
end
