
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

object index extends _root_.play.twirl.api.BaseScalaTemplate[play.twirl.api.HtmlFormat.Appendable,_root_.play.twirl.api.Format[play.twirl.api.HtmlFormat.Appendable]](play.twirl.api.HtmlFormat) with _root_.play.twirl.api.Template0[play.twirl.api.HtmlFormat.Appendable] {

  /**/
  def apply/*1.2*/():play.twirl.api.HtmlFormat.Appendable = {
    _display_ {
      {


Seq[Any](format.raw/*1.4*/("""
"""),format.raw/*2.1*/("""<!doctype html>
<html lang="en" data-framework="angular2">
    <head>
        """),format.raw/*5.99*/("""
    """),format.raw/*6.5*/("""<base href="/" />
    <meta charset="utf-8">
    <title>Angular Tour of Heroes</title>
    <link rel="stylesheet" href="assets/stylesheets/styles.css">
    <script src='"""),_display_(/*10.19*/routes/*10.25*/.Assets.versioned("lib/angular2/bundles/angular2-polyfills.js")),format.raw/*10.88*/("""'></script>
    <script src='"""),_display_(/*11.19*/routes/*11.25*/.Assets.versioned("lib/systemjs/dist/system.js")),format.raw/*11.73*/("""'></script>
    <script src='"""),_display_(/*12.19*/routes/*12.25*/.Assets.versioned("lib/typescript/lib/typescript.js")),format.raw/*12.78*/("""'></script>
    <script src='"""),_display_(/*13.19*/routes/*13.25*/.Assets.versioned("lib/rxjs/bundles/Rx.js")),format.raw/*13.68*/("""'></script>
    <script src='"""),_display_(/*14.19*/routes/*14.25*/.Assets.versioned("lib/angular2/bundles/angular2.dev.js")),format.raw/*14.82*/("""'></script>

    </head>
    <body>
        <my-app>Loading...</my-app>
        <script>
        """),format.raw/*20.101*/("""
			"""),format.raw/*21.4*/("""System.config("""),format.raw/*21.18*/("""{"""),format.raw/*21.19*/("""
                """),format.raw/*22.17*/("""transpiler: 'typescript',
                typescriptOptions: """),format.raw/*23.36*/("""{"""),format.raw/*23.37*/("""
                               """),format.raw/*24.105*/("""
                                """),format.raw/*25.33*/("""emitDecoratorMetadata: true,
                                experimentalDecorators: true
                            """),format.raw/*27.29*/("""}"""),format.raw/*27.30*/(""",
                            packages: """),format.raw/*28.39*/("""{"""),format.raw/*28.40*/("""
                                """),format.raw/*29.33*/("""'assets/app': """),format.raw/*29.47*/("""{"""),format.raw/*29.48*/("""
                                    """),format.raw/*30.37*/("""defaultExtension: 'ts' """),format.raw/*30.123*/("""
                                """),format.raw/*31.33*/("""}"""),format.raw/*31.34*/(""",
                                'assets/lib': """),format.raw/*32.47*/("""{"""),format.raw/*32.48*/("""
                                    """),format.raw/*33.37*/("""defaultExtension: 'js' """),format.raw/*33.102*/("""
                                """),format.raw/*34.33*/("""}"""),format.raw/*34.34*/("""
                            """),format.raw/*35.29*/("""}"""),format.raw/*35.30*/(""",
                            map: """),format.raw/*36.34*/("""{"""),format.raw/*36.35*/("""
                                """),format.raw/*37.33*/("""'app' : 'assets/app' """),format.raw/*37.115*/("""
                            """),format.raw/*38.29*/("""}"""),format.raw/*38.30*/("""
                        """),format.raw/*39.25*/("""}"""),format.raw/*39.26*/(""");
                        System.import('app/bootstrap')
                                .then(null, console.error.bind(console));
                    </script>
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
                  SOURCE: /home/hanguksaram/Documents/newmma/app/views/index.scala.html
                  HASH: e3488699bdab2f938b1d1037f0e8584775a8786d
                  MATRIX: 722->1|818->3|845->4|950->172|981->177|1178->347|1193->353|1277->416|1334->446|1349->452|1418->500|1475->530|1490->536|1564->589|1621->619|1636->625|1700->668|1757->698|1772->704|1850->761|1976->950|2007->954|2049->968|2078->969|2123->986|2212->1047|2241->1048|2302->1153|2363->1186|2509->1304|2538->1305|2606->1345|2635->1346|2696->1379|2738->1393|2767->1394|2832->1431|2884->1517|2945->1550|2974->1551|3050->1599|3079->1600|3144->1637|3196->1702|3257->1735|3286->1736|3343->1765|3372->1766|3435->1801|3464->1802|3525->1835|3575->1917|3632->1946|3661->1947|3714->1972|3743->1973
                  LINES: 21->1|26->1|27->2|30->5|31->6|35->10|35->10|35->10|36->11|36->11|36->11|37->12|37->12|37->12|38->13|38->13|38->13|39->14|39->14|39->14|45->20|46->21|46->21|46->21|47->22|48->23|48->23|49->24|50->25|52->27|52->27|53->28|53->28|54->29|54->29|54->29|55->30|55->30|56->31|56->31|57->32|57->32|58->33|58->33|59->34|59->34|60->35|60->35|61->36|61->36|62->37|62->37|63->38|63->38|64->39|64->39
                  -- GENERATED --
              */
          