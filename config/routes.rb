Rails.application.routes.draw do

  resources :constellations

  root to: redirect('/constellations')

end
