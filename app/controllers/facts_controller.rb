class FactsController < ApplicationController

  def index
    @constellation = Constellation.find(params[:constellation_id])
    @facts = @constellation.facts
    render json: @facts
  end
end
