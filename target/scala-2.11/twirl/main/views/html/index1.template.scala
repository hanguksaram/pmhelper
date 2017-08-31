
package views.html

import _root_.play.twirl.api.TwirlFeatureImports._
import _root_.play.twirl.api.TwirlHelperImports._
import _root_.play.twirl.api.Html
import _root_.play.twirl.api.JavaScript
import _root_.play.twirl.api.Txt
import _root_.play.twirl.api.Xml
import models._
import controllers._
import play.api.i18n._
import views.html._
import play.api.templates.PlayMagic._
import play.api.mvc._
import play.api.data._

object index1 extends _root_.play.twirl.api.BaseScalaTemplate[play.twirl.api.HtmlFormat.Appendable,_root_.play.twirl.api.Format[play.twirl.api.HtmlFormat.Appendable]](play.twirl.api.HtmlFormat) with _root_.play.twirl.api.Template0[play.twirl.api.HtmlFormat.Appendable] {

  /**/
  def apply/*1.2*/():play.twirl.api.HtmlFormat.Appendable = {
    _display_ {
      {


Seq[Any](format.raw/*1.4*/("""
"""),format.raw/*2.1*/("""<!doctype html>
<html lang="en" data-framework="angular2">
    <head>
        <base href="/" />
        """),format.raw/*7.47*/("""
        """),format.raw/*8.9*/("""<meta charset="utf-8">
        <title>Angular Tour of Heroes</title>
        <link rel="stylesheet" href="assets/stylesheets/styles.css">
        <script type='text/javascript' src='"""),_display_(/*11.46*/routes/*11.52*/.Assets.versioned("lib/core-js/client/shim.min.js")),format.raw/*11.103*/("""'></script>
        <script type='text/javascript' src='"""),_display_(/*12.46*/routes/*12.52*/.Assets.versioned("lib/zone.js/dist/zone.js")),format.raw/*12.97*/("""'></script>
        <script type='text/javascript' src='"""),_display_(/*13.46*/routes/*13.52*/.Assets.versioned("lib/systemjs/dist/system.src.js")),format.raw/*13.104*/("""'></script>

        <script type='text/javascript' src='"""),_display_(/*15.46*/routes/*15.52*/.Assets.versioned("systemjs.config.js")),format.raw/*15.91*/("""'></script>
        """),format.raw/*16.114*/("""
        """),format.raw/*17.9*/("""<script>
             System.import('assets/app/main.js').catch(function(err)"""),format.raw/*18.69*/("""{"""),format.raw/*18.70*/(""" """),format.raw/*18.71*/("""console.error(err); """),format.raw/*18.91*/("""}"""),format.raw/*18.92*/(""");
        </script>
    </head>
    <body>
        <my-root>Loading...</my-root>
    </body>
</html>
"""))
      }
    }
  }

  def render(): play.twirl.api.HtmlFormat.Appendable = apply()

  def f:(() => play.twirl.api.HtmlFormat.Appendable) = () => apply()

  def ref: this.type = this

}


              /*
                  -- GENERATED --
                  DATE: Thu Aug 31 17:22:14 NOVT 2017
                  SOURCE: /home/hanguksaram/Documents/newmma/app/views/index1.scala.html
                  HASH: e117f08deec5aa2c2dd104dae6ac227a577d40f1
                  MATRIX: 723->1|819->3|846->4|977->250|1012->259|1222->442|1237->448|1310->499|1394->556|1409->562|1475->607|1559->664|1574->670|1648->722|1733->780|1748->786|1808->825|1857->950|1893->959|1998->1036|2027->1037|2056->1038|2104->1058|2133->1059
                  LINES: 21->1|26->1|27->2|31->7|32->8|35->11|35->11|35->11|36->12|36->12|36->12|37->13|37->13|37->13|39->15|39->15|39->15|40->16|41->17|42->18|42->18|42->18|42->18|42->18
                  -- GENERATED --
              */
          