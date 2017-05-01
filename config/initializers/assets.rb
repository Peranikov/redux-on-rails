ASSETS_MANIFEST =
  if File.exist?(Rails.root.join('public', 'assets', 'manifest.json'))
    JSON.parse(File.read(Rails.root.join('public', 'assets', 'manifest.json')))
  end