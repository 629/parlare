<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title></title>
    <meta name="description" content="">
    <meta name="author" content="">

    <!-- Le HTML5 shim, for IE6-8 support of HTML elements -->
    <!--[if lt IE 9]>
      <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->

    <!-- Le styles -->
    <link href="../css/bootstrap.css" rel="stylesheet">
    <link href="../css/bootstrap-responsive.css" rel="stylesheet">
    <style type="text/css">

      .navbar-inner {
        border-radius: 0px;
      }

      h3 > small {
        margin-left: 10px;
      } 

    </style>

    <!-- Le fav and touch icons -->
    <link rel="shortcut icon" href="images/favicon.ico">
    <link rel="apple-touch-icon" href="images/apple-touch-icon.png">
    <link rel="apple-touch-icon" sizes="72x72" href="images/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="114x114" href="images/apple-touch-icon-114x114.png">
  </head>

  <body>

    <div class="navbar">
      <div class="navbar-inner">
        <div class="container">
          <a class="btn btn-navbar" data-target=".nav-collapse" data-toggle="collapse">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </a>
          <a class="brand" href="../../index.html">Parlare</a>
          <div class="container nav-collapse">
            <ul class="nav">
              
              <li class="divider-vertical"></li>
              <li><a href="../../lezione/1.html">1</a></li>
              <li><a href="../../lezione/2.html">2</a></li>
              <li><a href="../../lezione/3.html">3</a></li>
              <li class="divider-vertical"></li>


            </ul>
          </div><!--/.nav-collapse -->
        </div>
      </div>
    </div>


    <div class="container">

      /* =============================================================
 * bootstrap-scrollspy.js v1.3.0
 * http://twitter.github.com/bootstrap/javascript.html#scrollspy
 * =============================================================
 * Copyright 2011 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================== */


!function ( $ ) {

  var $window = $(window)

  function ScrollSpy( topbar, selector ) {
    var processScroll = $.proxy(this.processScroll, this)
    this.$topbar = $(topbar)
    this.selector = selector || 'li > a'
    this.refresh()
    this.$topbar.delegate(this.selector, 'click', processScroll)
    $window.scroll(processScroll)
    this.processScroll()
  }

  ScrollSpy.prototype = {

      refresh: function () {
        this.targets = this.$topbar.find(this.selector).map(function () {
          var href = $(this).attr('href')
          return /^#\w/.test(href) && $(href).length ? href : null
        })

        this.offsets = $.map(this.targets, function (id) {
          return $(id).offset().top
        })
      }

    , processScroll: function () {
        var scrollTop = $window.scrollTop() + 10
          , offsets = this.offsets
          , targets = this.targets
          , activeTarget = this.activeTarget
          , i

        for (i = offsets.length; i--;) {
          activeTarget != targets[i]
            && scrollTop >= offsets[i]
            && (!offsets[i + 1] || scrollTop <= offsets[i + 1])
            && this.activateButton( targets[i] )
        }
      }

    , activateButton: function (target) {
        this.activeTarget = target

        this.$topbar
          .find(this.selector).parent('.active')
          .removeClass('active')

        this.$topbar
          .find(this.selector + '[href="' + target + '"]')
          .parent('li')
          .addClass('active')
      }

  }

  /* SCROLLSPY PLUGIN DEFINITION
   * =========================== */

  $.fn.scrollSpy = function( options ) {
    var scrollspy = this.data('scrollspy')

    if (!scrollspy) {
      return this.each(function () {
        $(this).data('scrollspy', new ScrollSpy( this, options ))
      })
    }

    if ( options === true ) {
      return scrollspy
    }

    if ( typeof options == 'string' ) {
      scrollspy[options]()
    }

    return this
  }

  $(document).ready(function () {
    $('body').scrollSpy('[data-scrollspy] li > a')
  })

}( window.jQuery || window.ender );

      <footer>
        <hr />

    <!--    <p class="muted">Спасибо создателям nanoc, bootstrap и github.pages за отличные инструменты.</p> -->

      </footer>

    </div> <!-- /container -->

  </body>
</html>