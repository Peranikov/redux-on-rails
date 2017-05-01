module ApplicationHelper
  def asset_path(path)
    # development 環境で参照先を変えているのは後述する Hot Module Replacement 機能を利用するためです。
    # Railsではなく、webpack_dev_server というwebpackが提供する開発用のサーバを参照しにいきます。
    # if Rails.env.development?
    #   return "http://localhost:3500/assets/#{path}"
    # end
    host = Rails.application.config.action_controller.asset_host
    manifest = ASSETS_MANIFEST
    path = manifest[path] if manifest && manifest[path].present?
    "#{host}/assets/#{path}"
  end
end
