Rails.application.routes.draw do
  resources :users, only: [:create]
  resources :poems, only: [:create]
  resources :categories, only: [:index]

  get '/me', to: 'users#show'

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
