class Poem < ApplicationRecord
  belongs_to :user
  belongs_to :category
  validates :title, :content, presence: true
  validates :content, length: { minimum: 10 }
end
