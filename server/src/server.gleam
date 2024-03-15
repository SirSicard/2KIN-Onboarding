import gleam/io
import gleam/json
import gleam/result
import gleam/int
import gleam/list
import envoy
import wisp.{type Request, type Response}
import mist

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

  io.println("Listening on localhost:" <> int.to_string(port))
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
    ["/categories"] -> categories(req)
    ["/categories", slug] -> category(req, slug)
    _ -> wisp.not_found()
  }
}

fn categories(req) {
  let string = json.string(_)
  let categories = [
    [
      #("name", string("Kategori 1")),
      #("slug", string("kategori-1")),
      #(
        "description",
        string("Lorem ipsum dolor sit amet, consectetur adipiscing elit."),
      ),
    ],
    [
      #("name", string("Kategori 2")),
      #("slug", string("kategori-2")),
      #(
        "description",
        string(
          "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        ),
      ),
    ],
    [
      #("name", string("Kategori 3")),
      #("slug", string("kategori-3")),
      #(
        "description",
        string(
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        ),
      ),
    ],
    [
      #("name", string("Kategori 4")),
      #("slug", string("kategori-4")),
      #(
        "description",
        string(
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        ),
      ),
    ],
    [
      #("name", string("Kategori 5")),
      #("slug", string("kategori-5")),
      #(
        "description",
        string(
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        ),
      ),
    ],
    [
      #("name", string("Kategori 6")),
      #("slug", string("kategori-6")),
      #(
        "description",
        string(
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptate autem vero aspernatur, veniam, Provident porro doloremque laudantium sint maiores deleniti iure, voluptates iusto vero.",
        ),
      ),
    ],
  ]
  let response =
    json.preprocessed_array(list.map(categories, json.object))
    |> json.to_string_builder
  wisp.json_response(response, 200)
}

fn category(req, slug) {
  todo
}
