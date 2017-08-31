
// @GENERATOR:play-routes-compiler
// @SOURCE:/home/hanguksaram/Documents/newmma/conf/routes
// @DATE:Thu Aug 31 17:22:12 NOVT 2017

import play.api.routing.JavaScriptReverseRoute


import _root_.controllers.Assets.Asset

// @LINE:6
package controllers.javascript {

  // @LINE:9
  class ReverseAssets(_prefix: => String) {

    def _defaultPrefix: String = {
      if (_prefix.endsWith("/")) "" else "/"
    }

  
    // @LINE:9
    def versioned: JavaScriptReverseRoute = JavaScriptReverseRoute(
      "controllers.Assets.versioned",
      """
        function(file1) {
          return _wA({method:"GET", url:"""" + _prefix + { _defaultPrefix } + """" + "assets/" + (""" + implicitly[play.api.mvc.PathBindable[Asset]].javascriptUnbind + """)("file", file1)})
        }
      """
    )
  
  }

  // @LINE:11
  class ReverseHeroes(_prefix: => String) {

    def _defaultPrefix: String = {
      if (_prefix.endsWith("/")) "" else "/"
    }

  
    // @LINE:11
    def all: JavaScriptReverseRoute = JavaScriptReverseRoute(
      "controllers.Heroes.all",
      """
        function() {
          return _wA({method:"GET", url:"""" + _prefix + { _defaultPrefix } + """" + "api/heroes"})
        }
      """
    )
  
    // @LINE:14
    def delete: JavaScriptReverseRoute = JavaScriptReverseRoute(
      "controllers.Heroes.delete",
      """
        function(id0) {
          return _wA({method:"DELETE", url:"""" + _prefix + { _defaultPrefix } + """" + "api/heroes/" + (""" + implicitly[play.api.mvc.PathBindable[Int]].javascriptUnbind + """)("id", id0)})
        }
      """
    )
  
    // @LINE:12
    def create: JavaScriptReverseRoute = JavaScriptReverseRoute(
      "controllers.Heroes.create",
      """
        function() {
          return _wA({method:"POST", url:"""" + _prefix + { _defaultPrefix } + """" + "api/heroes"})
        }
      """
    )
  
    // @LINE:13
    def update: JavaScriptReverseRoute = JavaScriptReverseRoute(
      "controllers.Heroes.update",
      """
        function(id0) {
          return _wA({method:"PUT", url:"""" + _prefix + { _defaultPrefix } + """" + "api/heroes/" + (""" + implicitly[play.api.mvc.PathBindable[Int]].javascriptUnbind + """)("id", id0)})
        }
      """
    )
  
  }

  // @LINE:6
  class ReverseApplication(_prefix: => String) {

    def _defaultPrefix: String = {
      if (_prefix.endsWith("/")) "" else "/"
    }

  
    // @LINE:6
    def index: JavaScriptReverseRoute = JavaScriptReverseRoute(
      "controllers.Application.index",
      """
        function() {
          return _wA({method:"GET", url:"""" + _prefix + """"})
        }
      """
    )
  
  }


}
