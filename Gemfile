# frozen_string_literal: true

source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "3.0.3"
gem "rails", "~> 7.0.0.rc1"

gem "cssbundling-rails", ">= 0.1.0"
gem "jbuilder", "~> 2.7"
gem "jsbundling-rails", "~> 0.1.0"
gem "pg", "~> 1.1"
gem "puma", "~> 5.0"
gem "redis", "~> 4.0"
gem "sprockets-rails", ">= 3.4.1"
gem "stimulus-rails", ">= 0.7.3"
gem "turbo-rails", ">= 0.9.0"

gem "bootsnap", ">= 1.4.4", require: false

group :development, :test do
  gem "byebug"
  gem "rspec-rails", "~> 4.0.0"
end

group :development do
  gem "web-console", ">= 4.1.0"

  gem "foreman", require: false
  gem "rubocop", require: false
  gem "rubocop-packaging", require: false
  gem "rubocop-performance", require: false
  gem "rubocop-rails", require: false
  gem "rubocop-rspec", require: false
  gem "rubycritic", require: false
end

