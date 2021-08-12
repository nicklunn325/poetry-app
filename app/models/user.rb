class User < ApplicationRecord
    has_secure_password
    validates :username, uniqueness: true
    # validates :username, length: {minimum: 100}
    has_many :poems
    has_many :categories, through: :poems
end
