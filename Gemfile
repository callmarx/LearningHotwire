# frozen_string_literal: true

source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "3.0.2"

gem "cssbundling-rails", ">= 0.1.0"
gem "jbuilder", "~> 2.7"
gem "jsbundling-rails", "~> 0.1.0"
gem "pg", "~> 1.1"
gem "puma", "~> 5.0"
gem "rails", "~> 7.0.0.alpha2"
gem "redis", "~> 4.0"
gem "stimulus-rails", ">= 0.4.0"
gem "turbo-rails", ">= 0.7.11"

gem "bootsnap", ">= 1.4.4", require: false

group :development, :test do
  gem "byebug"
  gem "rspec-rails", "~> 4.0.0"
end

group :development do
  gem "foreman", require: false
  gem "rubocop", require: false
  gem "rubocop-packaging", require: false
  gem "rubocop-performance", require: false
  gem "rubocop-rails", require: false
  gem "rubocop-rspec", require: false
  gem "rubycritic", require: false
  gem "web-console", ">= 4.1.0"
end

