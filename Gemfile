# frozen_string_literal: true

source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "3.0.3"
gem "rails", "~> 7.0.2", ">= 7.0.2.3"

gem "cssbundling-rails"
gem "jbuilder"
gem "jsbundling-rails"
gem "pg", "~> 1.1"
gem "puma", "~> 5.5.2"
gem "redis", "~> 4.5"
gem "sprockets-rails"
gem "stimulus-rails"
gem "turbo-rails"
gem "view_component"

gem "bootsnap", require: false

group :development, :test do
  gem "byebug"
  gem "rspec-rails", "~> 4.0.0"
end

group :development do
  gem "web-console"

  gem "foreman", require: false
  gem "rubocop", require: false
  gem "rubocop-packaging", require: false
  gem "rubocop-performance", require: false
  gem "rubocop-rails", require: false
  gem "rubocop-rspec", require: false
  gem "rubycritic", require: false
end
