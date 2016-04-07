Rails.application.routes.draw do

  resources :constellations do
    resources:facts
  end

end
