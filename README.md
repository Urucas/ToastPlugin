ToastPlugin
===========

Phonegap Toast Plugin for Android & iOS for Cordova >= 3.0


Installation
============

Android, iOS

* Via cordova console
``cordova plugin add https://github.com/Urucas/ToastPlugin.git``

Usage
=====
From your javascript just call toast.alert().
The only required param is the text to toast (1st param)

```
toast.alert(
  "This is a toast text",
  "long",
  function(){//success},
  function(){//error}
)
```

We still need to do some testing on iOS and Cordova 3.0

License
=======
* MIT License

