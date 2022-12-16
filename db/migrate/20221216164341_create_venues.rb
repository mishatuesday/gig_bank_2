class CreateVenues < ActiveRecord::Migration[7.0]
  def change
    create_table :venues do |t|
      t.string :name
      t.string :street
      t.string :city
      t.string :state
      t.string :zip_code
      t.string :email
      t.string :phone

      t.timestamps
    end
  end
end
