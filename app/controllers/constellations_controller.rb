class ConstellationsController < ApplicationController

  def index
    @constellations = Constellation.all.order(:id)

    render json: @constellations.to_json, status: :ok
  end
end
