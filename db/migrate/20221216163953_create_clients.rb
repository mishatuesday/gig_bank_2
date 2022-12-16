class CreateClients < ActiveRecord::Migration[7.0]
  def change
    create_table :clients do |t|
      t.integer :user_id
      t.string :first_name
      t.string :last_name
      t.string :company
      t.string :email
      t.string :phone
      t.string :notes

      t.timestamps
    end
  end
end
