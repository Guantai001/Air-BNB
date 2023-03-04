# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2023_03_02_125743) do

  create_table "admins", force: :cascade do |t|
    t.string "admin"
    t.string "email"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "airbnbs", force: :cascade do |t|
    t.string "title"
    t.string "location"
    t.string "description"
    t.string "size"
    t.binary "image"
    t.string "price"
    t.integer "admin_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["admin_id"], name: "index_airbnbs_on_admin_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.string "user_name"
    t.string "user_email"
    t.string "comment"
    t.integer "rating"
    t.integer "admin_id"
    t.integer "airbnb_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["admin_id"], name: "index_reviews_on_admin_id"
    t.index ["airbnb_id"], name: "index_reviews_on_airbnb_id"
  end

  add_foreign_key "airbnbs", "admins"
  add_foreign_key "reviews", "admins"
  add_foreign_key "reviews", "airbnbs"
end
