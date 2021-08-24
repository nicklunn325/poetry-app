Rails.application.routes.draw do
  namespace :api do
    resources :users, only: [:create]
    resources :poems, only: [:create, :index]
    resources :categories, only: [:index]

    get '/me', to: 'users#show'

    post '/login', to: 'sessions#create'
    delete '/logout', to: 'sessions#destroy'
  end 

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
