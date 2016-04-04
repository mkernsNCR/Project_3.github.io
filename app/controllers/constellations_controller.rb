class ConstellationsController < ApplicationController
  before_action do
    if params[:id]
      @constellation = Constellation.find(params[:id])
    end
  end

  def index
    @constellations = Constellation.all
    respond_to do | format |
      format.json { render json: @constellations, status: :ok }
  end
end
