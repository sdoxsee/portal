class Api::HomeController < ApplicationController
  def index
    render :json => '[{"name" : "Development Tools","info" : "Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less."}]'
  end
end
