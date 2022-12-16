class CreateContacts < ActiveRecord::Migration[7.0]
  def change
    create_table :contacts do |t|
      t.string :date
      t.string :method
      t.integer :client_id
      t.integer :gig_id
      t.string :notes
      t.string :followup_date

      t.timestamps
    end
  end
end
