Rails.application.routes.draw do

  root "constellations#index"

  resources :constellations do
    resources:facts
  end

end
