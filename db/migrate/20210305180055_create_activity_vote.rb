class CreateActivityVote < ActiveRecord::Migration[6.1]
  def change
    create_table :activity_votes do |t|

      t.references :user, null: false, foreign_key: true
      t.references :activity, null: false, foreign_key: true

      t.timestamps
    end
  end
end
