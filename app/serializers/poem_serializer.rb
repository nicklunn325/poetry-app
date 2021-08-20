class PoemSerializer
  include JSONAPI::Serializer
  attributes :title, :content #, :user
  belongs_to :user, serializer: :user
  belongs_to :category
end
