import gleam/erlang/process
import gleam/json
import gleam/result
import gleam/int
import gleam/list
import gleam/http
import gluid
import envoy
// http listener library
import mist
// web framework for handling requests and responses
import wisp

pub fn main() {
  // get the port from the environment, if not present use 3001 as default
  let port =
    // this tries to get the environment variable named PORT
    // otherwise returns Nil
    envoy.get("PORT")
    // these are called pipes, make sure to go through the online tutorial
    // if PORT was successfully gotten, this tries to take the String and make
    // it an Int in base 10. base 10 is our normal number system
    // base 2 is binary, 3 trinary, 8 is octal, 10 decimal, 16 hexadecimal, ...
    // another word for a numbers base is the radix of it, it's latin for root
    // https://en.wikipedia.org/wiki/Radix#In_numeral_systems
    |> result.try(int.base_parse(_, 10))
    // if something went wrong in any of the steps above, set the port to 3001
    // we can see this as the default value and makes sure the variable port
    // is always an Int
    |> result.unwrap(3001)
  // enable the logger for wisp
  wisp.configure_logger()
  // idk
  let secret_base_key = wisp.random_string(64)
  let assert Ok(_) =
    // lets the web framwork know which function is our router or request handler
    wisp.mist_handler(router, secret_base_key)
    // creates a new http listener with our web framework and our router
    |> mist.new
    // sets the port to listen to
    |> mist.port(port)
    // start listening on that port
    |> mist.start_http
  // makes sure the program keeps running instead of ending right after we
  // start the listener, this way we can keep handling requests forever
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
    ["categories", slug] -> articles(req, slug)
    ["products"] -> products(req)
    _ -> wisp.not_found()
  }
}

pub fn mock_category(n) {
  let string = json.string
  let id = gluid.guidv4()
  [
    #("id", string(id)),
    #("title", string("Category" <> n)),
    #(
      "snippet",
      string(
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      ),
    ),
    #("image", string("image path")),
    #("slug", string(id)),
  ]
}

pub fn mock_article(category_id) {
  let string = json.string
  let id = gluid.guidv4()
  [
    #("id", string(id)),
    #("category_id", string(category_id)),
    #("name", string("Article")),
    #(
      "content",
      string(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      ),
    ),
    #("image", string("image_path")),
  ]
}

fn mock_product(n) {
  let string = json.string
  let gluid = gluid.guidv4()
  case n {
    "1" -> {
      [
        #("id", string(gluid)),
        #("name", string("2KIN product")),
        #("product-image", string("https://via.placeholder.com/600x425")),
        #("stock", json.int(99)),
        #("price", json.float(20.0)),
      ]
    }
    _ -> {
      [
        #("id", string(gluid)),
        #("name", string("Extra " <> n)),
        #("product-image", string("https://via.placeholder.com/600x425")),
        #("stock", json.int(99)),
        #("price", json.float(10.0)),
      ]
    }
  }
}

fn categories(req) {
  use <- wisp.require_method(req, http.Get)
  wisp.set_header
  let response =
    list.range(1, 6)
    |> list.map(int.to_string)
    |> list.map(mock_category)
    |> list.map(json.object)
    |> json.preprocessed_array
    |> json.to_string_builder
  wisp.json_response(response, 200)
}

// fn category(req, slug) {
//   use <- wisp.require_method(req, http.Get)

//   let response =
//     mock_category(slug)
//     |> json.object
//     |> json.to_string_builder

//   wisp.json_response(response, 200)
// }

fn articles(req, slug) {
  use <- wisp.require_method(req, http.Get)
  let res =
    list.repeat(slug, times: 5)
    |> list.map(mock_article)
    |> list.map(json.object)
    |> json.preprocessed_array
    |> json.to_string_builder
  wisp.json_response(res, 200)
}

fn products(req) {
  use <- wisp.require_method(req, http.Get)
  let response =
    list.range(1, 3)
    |> list.map(int.to_string)
    |> list.map(mock_product)
    |> list.map(json.object)
    |> json.preprocessed_array
    |> json.to_string_builder
  wisp.json_response(response, 200)
}
