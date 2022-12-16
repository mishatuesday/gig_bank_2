Rails.application.routes.draw do
  resources :venues
  resources :invoices
  resources :contacts
  resources :gigs
  resources :clients
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
