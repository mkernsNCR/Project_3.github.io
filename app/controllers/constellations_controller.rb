class ConstellationsController < ApplicationController

  def index
    @constellations = Constellation.all.order(:id)
    respond_to do | format |
      format.html
      format.json{render json: @constellations.to_json, status: :ok}
    end
  end
end
