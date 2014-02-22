use Rack::Static,
  :urls => ["/img", "js", "/css"],
  :root => "public"

require 'rack/favicon'
use Rack::Favicon, image: "public/favicon.ico"

run lambda { |env|
  [
    200,
    {
      'Content-Type'  => 'text/html',
      'Cache-Control' => 'public, max-age=86400'
    },
    File.open('public/index.html', File::RDONLY)
  ]
}