class CreateAdmins < ActiveRecord::Migration[6.1]
  def change
    create_table :admins do |t|
      t.string :admin
      t.string :email
     
      t.timestamps
    end
  end
end
