class CreateGigs < ActiveRecord::Migration[7.0]
  def change
    create_table :gigs do |t|
      t.integer :client_id
      t.integer :venue_id
      t.string :occasion
      t.string :services
      t.string :date
      t.string :setup_time
      t.string :service_time

      t.timestamps
    end
  end
end
