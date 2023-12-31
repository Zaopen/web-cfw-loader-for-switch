let enUS = {
  "pageTitle"    : "Nintendo Switch Payload Loader",
  "pageSubtitle" : "Fusee Launcher ported to JavaScript using WebUSB.",
  "dangerDanger"   :"This is moderately tested. Although no issues have been discovered, I'm not responsible if anything goes wrong!",
  "warningWindows" :"This does NOT work on Windows due to a limitation in the Chrome implementation of WebUSB (and probably other reasons!)",
  "warningBrowser" :"This does NOT currently work on any browser but Chrome, because they don't implement WebUSB.",
  "warningLinux"   :"On Linux, you might get an 'Access Denied' or 'No Compatible Device' error on the Connect dialog! If you do, you can try creating a file at <code>/etc/udev/rules.d/50-switch.rules</code>With the following contents:<br><code>SUBSYSTEM==\"usb\", ATTR{idVendor}==\"0955\", MODE=\"0664\", GROUP=\"plugdev\"</code>",
  "warningTested"  :"This has been tested and appears to work on Linux, OSX, Android (unrooted) and Chromebooks. Your mileage may vary.",
  "labelInstructions" :"Instructions:",
  "liRCM"          :"Put the Switch in RCM, and connect it to your device.",
  "liSelect"       :"Select either the example payload, or upload one.",
  "liPress"        :"Press 'Deliver Payload!'",
  "liAPX"          :"On the consent screen that appears, select 'APX' and hit 'Connect'.",
  "liLaunch"       :"If all goes well, the payload will launch!",
  "labelContribute" :'If you would like to help adding another translation or updating/adding a payload, check <a href="https://github.com/AtlasNX/web-cfw-loader/blob/master/CONTRIBUTING.md">this</a>.',
  "h1SetupDelivery" :"Setup Payload Delivery",
  "h4SelectPayload" :"Select Payload:",
  "optionAtmosphere" :"Atmosphère 0.8.4",
  "optionSXOS"      :"SX OS (All Versions)",
  "optionReiNX"     :"ReiNX 2.0",
  "optionCTCaerHekate" :"CTCaer's Hekate Mod v5.0.1",
  "optionFusee"     :"(Re)Switched test payload (fusee)",
  "optionUpload"    :"Upload Payload",
  "h3Log"           :"Log:",
  "h4GetByteArray"  :"Get payload byte array (don't sploit)",
  "goButton"        :"Deliver Payload!",
  "clearlogsbutton" :"Clear Logs",
  "disclaimer1" :'Source can be found on <a href="https://github.com/AtlasNX/web-cfw-loader">GitHub</a> (or by hitting view source, there is no backend!).',
  "disclaimer3" :'Thanks to <a href="https://github.com/ktemkin">ktemkin</a> and <a href="https://github.com/reswitched">ReSwitched</a>, as well as <br><a href="https://github.com/atlas44">Atlas44</a> and <a href="https://atlas44.s3-us-west-2.amazonaws.com/web-fusee-launcher/index.html">his website</a> as a beginning point for this one.',
  "disclaimer4" :'Lastly, thanks to <a href="https://github.com/ElijahZAwesome">ElijahZAwesome</a> for creating, maintaining and tranferring the project, <a href="https://github.com/falquinho">falquinho</a> for the new bootstrap layout and portuguese translation, <a href="https://github.com/Filo97">Filo97</a> for the italian translation, <a href="https://github.com/tumGER">tumGER</a> for his german and russian translations, <a href="https://github.com/lordfriky">Lord_Friky</a> for the spanish translation, <a href="https://github.com/lorek123">Lorek</a> for the polish translation and <a href="https://github.com/Rakau">Rakau</a> for the chinese translations.'
}
