# frozen_string_literal: true

json.extract! chore, :id, :title, :content, :created_at, :updated_at
json.url chore_url(chore, format: :json)
