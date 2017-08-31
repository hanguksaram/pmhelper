
// @GENERATOR:play-routes-compiler
// @SOURCE:/home/hanguksaram/Documents/newmma/conf/routes
// @DATE:Thu Aug 31 17:22:12 NOVT 2017

import play.api.mvc.Call


import _root_.controllers.Assets.Asset

// @LINE:6
package controllers {

  // @LINE:9
  class ReverseAssets(_prefix: => String) {
    def _defaultPrefix: String = {
      if (_prefix.endsWith("/")) "" else "/"
    }

  
    // @LINE:9
    def versioned(file:Asset): Call = {
      implicit val _rrc = new play.core.routing.ReverseRouteContext(Map(("path", "/public")))
      Call("GET", _prefix + { _defaultPrefix } + "assets/" + implicitly[play.api.mvc.PathBindable[Asset]].unbind("file", file))
    }
  
  }

  // @LINE:11
  class ReverseHeroes(_prefix: => String) {
    def _defaultPrefix: String = {
      if (_prefix.endsWith("/")) "" else "/"
    }

  
    // @LINE:11
    def all(): Call = {
      
      Call("GET", _prefix + { _defaultPrefix } + "api/heroes")
    }
  
    // @LINE:14
    def delete(id:Int): Call = {
      
      Call("DELETE", _prefix + { _defaultPrefix } + "api/heroes/" + implicitly[play.api.mvc.PathBindable[Int]].unbind("id", id))
    }
  
    // @LINE:12
    def create(): Call = {
      
      Call("POST", _prefix + { _defaultPrefix } + "api/heroes")
    }
  
    // @LINE:13
    def update(id:Int): Call = {
      
      Call("PUT", _prefix + { _defaultPrefix } + "api/heroes/" + implicitly[play.api.mvc.PathBindable[Int]].unbind("id", id))
    }
  
  }

  // @LINE:6
  class ReverseApplication(_prefix: => String) {
    def _defaultPrefix: String = {
      if (_prefix.endsWith("/")) "" else "/"
    }

  
    // @LINE:6
    def index(): Call = {
      
      Call("GET", _prefix)
    }
  
  }


}
