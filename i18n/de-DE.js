let deDE = {
  "pageTitle"    : "Nintendo Switch Payload Loader",
  "pageSubtitle" : "JavaScript Port vom Fusee Launcher mit Unterstützung durch WebUSB.",
  "dangerDanger"   :"Trotz einiger Tests können Fehler auftauchen und ich bin nicht Schuld, falls Probleme auftauchen!",
  "warningWindows" :"Dies funktioniert nicht auf Windows, Chrome hat fehlende Implementierungen von WebUSB (eventuell auch andere Gründen!)",
  "warningBrowser" :"Dies funktioniert bisher mit keinem Browser AUßER Chrome! Das liegt daran, dass die anderen Browser WebUSB nicht unterstützen!",
  "warningLinux"   :"In Linux kann ein 'Zugriff abgelehnt' Fehler auftreten! Falls du dieses Problem hast, erstell eine Datei unter: <code>/etc/udev/rules.d/50-switch.rules</code>mit folgendem Inhalt:<br><code>SUBSYSTEM==\"usb\", ATTR{idVendor}==\"0955\", MODE=\"0664\", GROUP=\"plugdev\"</code>.",
  "warningTested"  :"Tests ergeben, dass es zurzeit auf Linux, OSX, Android (unrooted) und Chromebooks funktioniert. Das Ergebnis kann jedoch variieren.",
  "labelInstructions" :"Anleitung:",
  "liRCM"          :"Versetze die Switch in den RCM und verbinde sie mit deinem Gerät.",
  "liSelect"       :"Wähle entweder einen der vorliegenden Payloads oder lade einen eigenen Payload hoch.",
  "liPress"        :'Drücke: "Payload senden"',
  "liAPX"          :'Auf dem Erlaubnisbildschirm musst du "APX" auswählen und zustimmen.',
  "liLaunch"       :"Falls alles richtig läuft, sollte der Payload gesendet werden!",
  "labelContribute" :'Möchtest du helfen eine Übersetzung hinzuzufügen, zu verbessern oder einen Payload hinzuzufügen besuche <a href="https://github.com/AtlasNX/web-cfw-loader/blob/master/CONTRIBUTING.md">diese Seite</a>.',
  "h1SetupDelivery" :"Payload-Einstellungen",
  "h4SelectPayload" :"Wähle einen Payload:",
  "optionAtmosphere" :"Atmosphère 0.8.4",
  "optionSXOS"      :"SX OS",
  "optionReiNX"     :"ReiNX 2.0",
  "optionCTCaerHekate" :"CTCaer's Hekate Mod v5.0.1",
  "optionFusee"     :"(Re)Switched Test Payload (fusee)",
  "optionUpload"    :"Eigenen Payload hochladen",
  "h3Log"           :"Protokoll:",
  "h4GetByteArray"  :"Erhalte den Payload Byte-Array (nicht senden)",
  "goButton"        :"Payload senden!",
  "clearlogsbutton" :"Protokoll leeren",
  "disclaimer1" :'Der Quellcode kann hier gefunden werden: <a href="https://github.com/AtlasNX/web-cfw-loader/">GitHub</a> (oder indem man sich den Quellcode direkt ankuckt, da kein Backend existiert!).',
  "disclaimer2" :'Portiert von <a href="https://github.com/reswitched/fusee-launcher">fusee-launcher</a>.',
  "disclaimer3" :'Danke an <a href="https://github.com/ktemkin">ktemkin</a> und <a href="https://github.com/reswitched">ReSwitched</a>, aber auch <br><a href="https://github.com/atlas44">Atlas44</a> und <a href="https://atlas44.s3-us-west-2.amazonaws.com/web-fusee-launcher/index.html">seine Webseite</a>, als Beginn für dieses Projekt.',
  "disclaimer4" :'Zuletzt danke an <a href="https://github.com/falquinho">falquinho</a> für seinen Bootstraplayout und Übersetzung ins portugiesische, <a href="https://github.com/Filo97">Filo97</a> für die italienische Übersetzung, <a href="https://github.com/tumGER"> tumGER </a>für seine deutsche Übersetzung, <a href="https://github.com/lordfriky">Lord_Friky</a> für die spanische Übersetzung und <a href="https://github.com/lorek123">Lorek</a> für die polnische Übersetzung!.'
}