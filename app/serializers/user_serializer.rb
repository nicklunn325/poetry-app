class UserSerializer
  include JSONAPI::Serializer
  attributes :username
  # has_many :poems, serializer: PoemSerializer
end
