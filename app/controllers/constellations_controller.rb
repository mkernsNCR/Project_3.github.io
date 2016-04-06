class ConstellationsController < ApplicationController

  def index
    @constellations = Constellation.all.order(:id)
    respond_to do | format |
      format.html
      format.json{render json: @constellations.to_json, status: :ok}
    end
  end
  def show
    @constellation = Constellation.find(params[:id])
    render json: @constellation
  end
end
