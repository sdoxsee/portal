class Api::HomeController < ApplicationController
  def index
    render :json => '{"foo": "bar"}'
  end
end
