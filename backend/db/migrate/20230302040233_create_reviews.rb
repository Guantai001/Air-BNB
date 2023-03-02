class CreateReviews < ActiveRecord::Migration[6.1]
  def change

    create_table :reviews do |t|
      t.string :name
      t.string :email
      t.string :review
      t.integer :rating
      
      t.references :airbnb, null: 0, foreign_key: true

      t.timestamps
    end
  end
end
