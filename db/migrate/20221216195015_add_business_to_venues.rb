class AddBusinessToVenues < ActiveRecord::Migration[7.0]
  def change
    add_column :venues, :business, :boolean
  end
end
