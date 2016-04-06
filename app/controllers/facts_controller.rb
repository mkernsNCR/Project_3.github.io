class FactsController < ApplicationController

  def index
    @constellation = Constellation.find(params[:id])
    @facts = @constallation.facts
    render json: @facts
  end
end
