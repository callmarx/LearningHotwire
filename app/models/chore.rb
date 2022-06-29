# frozen_string_literal: true

class Chore < ApplicationRecord
  validates :title, presence: true
end
