// Workaround for Knockout not initializing the global "ko" variable when it detects Require.js
define('knockout.global', ['knockout'], function (kno) {
    window.ko = kno; // Initialize a global 'ko' variable
    return kno;
});