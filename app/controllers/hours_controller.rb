class HoursController < ApplicationController
  def show
    render layout: "application"
  end

  def load
    render json: [
      {
        date: "18.03.2013",
        start_time: "7:00",
        end_time: "15:00",
        plus_minus: 0
      },
      {
        date: "19.03.2013",
        start_time: "7:00",
        end_time: "15:15",
        plus_minus:0.25
      }
    ]
  end

  def add
    render nothing: true
  end

  def remove
    render nothing: true
  end
end
