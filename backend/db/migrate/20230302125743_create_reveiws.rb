class CreateReveiws < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.string :user_name
      t.string :user_email
      t.string :comment
      t.integer :rating
      
     t.references :admin, foreign_key:true
     t.references :airbnb, foreign_key:true
      t.timestamps
    end
  end
end
