
// @GENERATOR:play-routes-compiler
// @SOURCE:/home/hanguksaram/Documents/newmma/conf/routes
// @DATE:Thu Aug 31 17:22:12 NOVT 2017

package router

import play.core.routing._
import play.core.routing.HandlerInvokerFactory._

import play.api.mvc._

import _root_.controllers.Assets.Asset

class Routes(
  override val errorHandler: play.api.http.HttpErrorHandler, 
  // @LINE:6
  Application_2: controllers.Application,
  // @LINE:9
  Assets_1: controllers.Assets,
  // @LINE:11
  Heroes_0: controllers.Heroes,
  val prefix: String
) extends GeneratedRouter {

   @javax.inject.Inject()
   def this(errorHandler: play.api.http.HttpErrorHandler,
    // @LINE:6
    Application_2: controllers.Application,
    // @LINE:9
    Assets_1: controllers.Assets,
    // @LINE:11
    Heroes_0: controllers.Heroes
  ) = this(errorHandler, Application_2, Assets_1, Heroes_0, "/")

  def withPrefix(prefix: String): Routes = {
    router.RoutesPrefix.setPrefix(prefix)
    new Routes(errorHandler, Application_2, Assets_1, Heroes_0, prefix)
  }

  private[this] val defaultPrefix: String = {
    if (this.prefix.endsWith("/")) "" else "/"
  }

  def documentation = List(
    ("""GET""", this.prefix, """controllers.Application.index"""),
    ("""GET""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """assets/""" + "$" + """file<.+>""", """controllers.Assets.versioned(path:String = "/public", file:Asset)"""),
    ("""GET""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """api/heroes""", """controllers.Heroes.all"""),
    ("""POST""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """api/heroes""", """controllers.Heroes.create"""),
    ("""PUT""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """api/heroes/""" + "$" + """id<[^/]+>""", """controllers.Heroes.update(id:Int)"""),
    ("""DELETE""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """api/heroes/""" + "$" + """id<[^/]+>""", """controllers.Heroes.delete(id:Int)"""),
    Nil
  ).foldLeft(List.empty[(String,String,String)]) { (s,e) => e.asInstanceOf[Any] match {
    case r @ (_,_,_) => s :+ r.asInstanceOf[(String,String,String)]
    case l => s ++ l.asInstanceOf[List[(String,String,String)]]
  }}


  // @LINE:6
  private[this] lazy val controllers_Application_index0_route = Route("GET",
    PathPattern(List(StaticPart(this.prefix)))
  )
  private[this] lazy val controllers_Application_index0_invoker = createInvoker(
    Application_2.index,
    play.api.routing.HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.Application",
      "index",
      Nil,
      "GET",
      this.prefix + """""",
      """ Home page""",
      Seq()
    )
  )

  // @LINE:9
  private[this] lazy val controllers_Assets_versioned1_route = Route("GET",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("assets/"), DynamicPart("file", """.+""",false)))
  )
  private[this] lazy val controllers_Assets_versioned1_invoker = createInvoker(
    Assets_1.versioned(fakeValue[String], fakeValue[Asset]),
    play.api.routing.HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.Assets",
      "versioned",
      Seq(classOf[String], classOf[Asset]),
      "GET",
      this.prefix + """assets/""" + "$" + """file<.+>""",
      """ Map static resources from the /public folder to the /assets URL path""",
      Seq()
    )
  )

  // @LINE:11
  private[this] lazy val controllers_Heroes_all2_route = Route("GET",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("api/heroes")))
  )
  private[this] lazy val controllers_Heroes_all2_invoker = createInvoker(
    Heroes_0.all,
    play.api.routing.HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.Heroes",
      "all",
      Nil,
      "GET",
      this.prefix + """api/heroes""",
      """""",
      Seq()
    )
  )

  // @LINE:12
  private[this] lazy val controllers_Heroes_create3_route = Route("POST",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("api/heroes")))
  )
  private[this] lazy val controllers_Heroes_create3_invoker = createInvoker(
    Heroes_0.create,
    play.api.routing.HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.Heroes",
      "create",
      Nil,
      "POST",
      this.prefix + """api/heroes""",
      """""",
      Seq()
    )
  )

  // @LINE:13
  private[this] lazy val controllers_Heroes_update4_route = Route("PUT",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("api/heroes/"), DynamicPart("id", """[^/]+""",true)))
  )
  private[this] lazy val controllers_Heroes_update4_invoker = createInvoker(
    Heroes_0.update(fakeValue[Int]),
    play.api.routing.HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.Heroes",
      "update",
      Seq(classOf[Int]),
      "PUT",
      this.prefix + """api/heroes/""" + "$" + """id<[^/]+>""",
      """""",
      Seq()
    )
  )

  // @LINE:14
  private[this] lazy val controllers_Heroes_delete5_route = Route("DELETE",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("api/heroes/"), DynamicPart("id", """[^/]+""",true)))
  )
  private[this] lazy val controllers_Heroes_delete5_invoker = createInvoker(
    Heroes_0.delete(fakeValue[Int]),
    play.api.routing.HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.Heroes",
      "delete",
      Seq(classOf[Int]),
      "DELETE",
      this.prefix + """api/heroes/""" + "$" + """id<[^/]+>""",
      """""",
      Seq()
    )
  )


  def routes: PartialFunction[RequestHeader, Handler] = {
  
    // @LINE:6
    case controllers_Application_index0_route(params) =>
      call { 
        controllers_Application_index0_invoker.call(Application_2.index)
      }
  
    // @LINE:9
    case controllers_Assets_versioned1_route(params) =>
      call(Param[String]("path", Right("/public")), params.fromPath[Asset]("file", None)) { (path, file) =>
        controllers_Assets_versioned1_invoker.call(Assets_1.versioned(path, file))
      }
  
    // @LINE:11
    case controllers_Heroes_all2_route(params) =>
      call { 
        controllers_Heroes_all2_invoker.call(Heroes_0.all)
      }
  
    // @LINE:12
    case controllers_Heroes_create3_route(params) =>
      call { 
        controllers_Heroes_create3_invoker.call(Heroes_0.create)
      }
  
    // @LINE:13
    case controllers_Heroes_update4_route(params) =>
      call(params.fromPath[Int]("id", None)) { (id) =>
        controllers_Heroes_update4_invoker.call(Heroes_0.update(id))
      }
  
    // @LINE:14
    case controllers_Heroes_delete5_route(params) =>
      call(params.fromPath[Int]("id", None)) { (id) =>
        controllers_Heroes_delete5_invoker.call(Heroes_0.delete(id))
      }
  }
}
