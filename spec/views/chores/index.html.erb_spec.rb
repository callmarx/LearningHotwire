require 'rails_helper'

RSpec.describe "chores/index", type: :view do
  before(:each) do
    assign(:chores, [
      Chore.create!(
        title: "Title",
        content: "MyText"
      ),
      Chore.create!(
        title: "Title",
        content: "MyText"
      )
    ])
  end

  it "renders a list of chores" do
    render
    assert_select "tr>td", text: "Title".to_s, count: 2
    assert_select "tr>td", text: "MyText".to_s, count: 2
  end
end
