ToastPlugin
===========

Phonegap Toast Plugin


Installation
============

Android

* Copy **com.urucas.plugins.ToastPlugin** into to your Android project **src/**

* Add the plugin markup to the **config.xml** file of the phonegap project 
``<plugin name="ToastPlugin" value="com.urucas.plugins.ToastPlugin"/> ``


Usage
=====

<code>
cordova.exec(
  null, 
  null, 
  "ToastPlugin", 
  "alert",
  [{"text":"Im a toast text", "duration": "long"}]
);
</code>

License
=======
* CDDL-1.0
* GPL-2.0
* BSD
