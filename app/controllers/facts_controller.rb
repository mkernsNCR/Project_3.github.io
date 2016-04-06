class FactsController < ApplicationController

  def index
    @constellation = Constellation.find(params[:id])
    @facts = @Constallation.facts
    render json: @facts
  end
end
