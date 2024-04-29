## gleam pgo + wisp tutorial

gleam pgo is a postgress package for gleam. 

conversion of a json request body to a record :
```js

// record of type of desired "Request"  
pub type Todo {
    Todo(title: String, text: String)
}
// the "->" at function start means what the function will return.
//Result is oftenly used as a return type for many functions and built in methods
// In which it can handle pontentiall errors
pub fn decode_todo(json: dynamic.Dynamic) -> Result(Todo, pgo.QueryError) {
    // here you decode the excepted request. 
    //if the request meets the criteria in which where we need a field of "title" and "text" then the decoding will be succeded and return the json value in of type Record
    let decode = 
        dynamic.decode2(
            Todo, 
            dynamic.field("title", dynamic.string),
            dynamic.field("text"), dynamic.string
        )
    
    let result = decode(json)
    // here you then check if it succeded and or
    // either returns the requested value in type of Record or if not as an error.
    result
    |> result.map_error(pgo.UnexpectedResultType)
}

//later on you will use this in the http request function and can do that in two ways. 


//here is your "Request" json object handled
use jsons <- wisp.require_json(req)

//this below is usually used when you want to see any possible errors that may occur. 
use todos <- result.try(decode_todo(jsons))


let todos = result.unwrap(decode_todo(jsons), Todo(title: "title", text: "text"))
//this is used if you want to ignore such errors. 

//There is a problem with "use" as it expects a certain return value. So for example if the first "use" in the function expects return value "Response" then the rest of "use" + result.try methods will also need that. To work around that you can either use result.unwrap or within a scope create a new use and later handle the final return value with a case.

// "use" within a scope 
pub fn my_function() {
    use first_use <- result.try(other_function()) //return Response
    let result = {
    use new_use <- result.try(decode_todo(jsons))// returns Result(Todo, QueryError)
    // Used at the end of the scope to get what your desired return value will be. For in this example a stringbuilder
    Ok(json.to_string_builder(
          json.object([
            #("title", json.string(new_use.title)),
            #("text", json.string(new_use.text)), 
          ])
      ),)
}
    // here is the desired return value. The api endpoints and all backend http request methods allways returns with a type Response so the final desired value is Response. for the wisp function "response" it requests a stringbuilder so you more then oftenly need to convert you returned value to a stringbuilder. 
    case result {
        Ok(value) -> wisp.response(value, 200)
        Error(_) -> wisp.internal_server_error
    }
}

```
