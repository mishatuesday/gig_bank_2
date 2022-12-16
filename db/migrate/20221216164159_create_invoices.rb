class CreateInvoices < ActiveRecord::Migration[7.0]
  def change
    create_table :invoices do |t|
      t.integer :gig_id
      t.string :description
      t.float :deposit
      t.boolean :deposit_paid
      t.float :balance
      t.boolean :balance_paid

      t.timestamps
    end
  end
end
