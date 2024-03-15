import gleam/erlang/process
import gleam/json
import gleam/result
import gleam/int
import gleam/list
import gleam/http
import envoy
import mist
import wisp

pub fn main() {
  let port =
    envoy.get("PORT")
    |> result.try(int.base_parse(_, 10))
    |> result.unwrap(3001)

  wisp.configure_logger()

  let secret_base_key = wisp.random_string(64)

  let assert Ok(_) =
    wisp.mist_handler(router, secret_base_key)
    |> mist.new
    |> mist.port(port)
    |> mist.start_http
  process.sleep_forever()
}

fn middleware(req, router) {
  use <- wisp.log_request(req)
  use <- wisp.rescue_crashes
  use req <- wisp.handle_head(req)
  router(req)
}

fn router(req) {
  use req <- middleware(req)
  case wisp.path_segments(req) {
    ["categories"] -> categories(req)
    ["categories", slug] -> category(req, slug)
    _ -> wisp.not_found()
  }
}

fn mock_category(n) {
  let string = json.string(_)
  [
    #("name", string("Kategori " <> n)),
    #("slug", string("kategori-" <> n)),
    #(
      "description",
      string(
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      ),
    ),
  ]
}

fn categories(req) {
  use <- wisp.require_method(req, http.Get)

  let response =
    list.range(1, 6)
    |> list.map(int.to_string)
    |> list.map(mock_category)
    |> list.map(json.object)
    |> json.preprocessed_array
    |> json.to_string_builder

  wisp.json_response(response, 200)
}

fn category(req, slug) {
  use <- wisp.require_method(req, http.Get)

  let response =
    mock_category(slug)
    |> json.object
    |> json.to_string_builder

  wisp.json_response(response, 200)
}
