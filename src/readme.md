UI-ROUTER WATCHER
=
Simple extension for chrome helping in debugging AngularJS. It sets watchers for [ui-router](https://ui-router.github.io/) events and show logs in chrome console. 

Instalation
-
Extension **isn't** available on Google Chrome Store because of required payment which is ridiculous in my opinion. 
If you want to install my extension:
* download `uiRouterWatcher.crx` 
* go to Chrome->settings->extensions 
* drag&drop `uiRouterWatcher.crx` to Chrome window.

About
-

Supported [events](https://github.com/angular-ui/ui-router/wiki#state-change-events):
* `$stateChangeStart`
* `$stateChangeError`
* `$stateChangeSuccess`
* `$viewContentLoaded`
* `$stateNotFound`

To turn watch on/off click on ui icon on extensions bar.
* Grey icon - Angular don't detected on current page
* Blue icon - Watch is off
* Red icon - Watch is on