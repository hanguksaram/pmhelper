
// @GENERATOR:play-routes-compiler
// @SOURCE:/home/hanguksaram/Documents/newmma/conf/routes
// @DATE:Thu Aug 31 17:22:12 NOVT 2017


package router {
  object RoutesPrefix {
    private var _prefix: String = "/"
    def setPrefix(p: String): Unit = {
      _prefix = p
    }
    def prefix: String = _prefix
    val byNamePrefix: Function0[String] = { () => prefix }
  }
}
