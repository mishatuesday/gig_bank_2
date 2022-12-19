Rails.application.routes.draw do
  resources :venues, except: [:show]
  # resources :invoices
  resources :contacts, only: [:create, :update]
  resources :gigs, except: [:delete, :index]
  resources :clients, except: [:delete, :index]
  resources :users, except: [:index] # would need index for admin role
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  post '/login', to: 'sessions#create'
  get '/logout', to: 'sessions#destroy'

  get '/my_gigs/:id', to: 'gigs#index_for_user'
  # Defines the root path route ("/")
  # root "articles#index"
end
