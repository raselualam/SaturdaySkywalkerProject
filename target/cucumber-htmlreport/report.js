$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("EbayBrandOutline.feature");
formatter.feature({
  "line": 2,
  "name": "Ebay Brand Outline",
  "description": "",
  "id": "ebay-brand-outline",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@SKYW-17"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Search for items with Brands",
  "description": "",
  "id": "ebay-brand-outline;search-for-items-with-brands",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Open Ebay Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Search for \"\u003cItems\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Filter by \"\u003cBrand\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Item list should have products of \"\u003cBrand\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "ebay-brand-outline;search-for-items-with-brands;",
  "rows": [
    {
      "cells": [
        "Items",
        "Brand"
      ],
      "line": 11,
      "id": "ebay-brand-outline;search-for-items-with-brands;;1"
    },
    {
      "cells": [
        "Shoes",
        "Nike"
      ],
      "line": 12,
      "id": "ebay-brand-outline;search-for-items-with-brands;;2"
    },
    {
      "cells": [
        "Shirts",
        "Adidas"
      ],
      "line": 13,
      "id": "ebay-brand-outline;search-for-items-with-brands;;3"
    },
    {
      "cells": [
        "Pants",
        "Unbranded"
      ],
      "line": 14,
      "id": "ebay-brand-outline;search-for-items-with-brands;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3804460100,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Search for items with Brands",
  "description": "",
  "id": "ebay-brand-outline;search-for-items-with-brands;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@SKYW-17"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Open Ebay Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Search for \"Shoes\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Filter by \"Nike\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Item list should have products of \"Nike\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "EbayHomepageSteps.open_Ebay_Homepage()"
});
formatter.result({
  "duration": 1327489500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shoes",
      "offset": 12
    }
  ],
  "location": "EbayHomepageSteps.search_for(String)"
});
formatter.result({
  "duration": 3432312700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nike",
      "offset": 11
    }
  ],
  "location": "EbaySearchResultSteps.filter_by(String)"
});
formatter.result({
  "duration": 5591539400,
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d102.0.5005.63)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027RASEL\u0027, ip: \u0027192.168.1.6\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027x86\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 102.0.5005.63, chrome: {chromedriverVersion: 102.0.5005.61 (0e59bcc00cc4..., userDataDir: C:\\Users\\rasel\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:60207}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: e4996006e8651cce787c44cc913d73d0\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:276)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\r\n\tat upskill.ebay.pageAction.EbaySearchResultActions.filterBrand(EbaySearchResultActions.java:48)\r\n\tat upskill.ebay.stepDef.EbaySearchResultSteps.filter_by(EbaySearchResultSteps.java:18)\r\n\tat ✽.And Filter by \"Nike\"(EbayBrandOutline.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nike",
      "offset": 35
    }
  ],
  "location": "EbaySearchResultSteps.item_list_should_have_products_of(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1125811900,
  "status": "passed"
});
formatter.before({
  "duration": 2845202900,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Search for items with Brands",
  "description": "",
  "id": "ebay-brand-outline;search-for-items-with-brands;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@SKYW-17"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Open Ebay Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Search for \"Shirts\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Filter by \"Adidas\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Item list should have products of \"Adidas\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "EbayHomepageSteps.open_Ebay_Homepage()"
});
formatter.result({
  "duration": 1256903800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shirts",
      "offset": 12
    }
  ],
  "location": "EbayHomepageSteps.search_for(String)"
});
formatter.result({
  "duration": 4422007900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Adidas",
      "offset": 11
    }
  ],
  "location": "EbaySearchResultSteps.filter_by(String)"
});
formatter.result({
  "duration": 5601585700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Adidas",
      "offset": 35
    }
  ],
  "location": "EbaySearchResultSteps.item_list_should_have_products_of(String)"
});
formatter.result({
  "duration": 3203452200,
  "status": "passed"
});
formatter.after({
  "duration": 656891400,
  "status": "passed"
});
formatter.before({
  "duration": 3375305800,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Search for items with Brands",
  "description": "",
  "id": "ebay-brand-outline;search-for-items-with-brands;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@SKYW-17"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Open Ebay Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Search for \"Pants\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Filter by \"Unbranded\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Item list should have products of \"Unbranded\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "EbayHomepageSteps.open_Ebay_Homepage()"
});
formatter.result({
  "duration": 1110623900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pants",
      "offset": 12
    }
  ],
  "location": "EbayHomepageSteps.search_for(String)"
});
formatter.result({
  "duration": 2537783200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Unbranded",
      "offset": 11
    }
  ],
  "location": "EbaySearchResultSteps.filter_by(String)"
});
formatter.result({
  "duration": 5177808700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Unbranded",
      "offset": 35
    }
  ],
  "location": "EbaySearchResultSteps.item_list_should_have_products_of(String)"
});
formatter.result({
  "duration": 3052038000,
  "status": "passed"
});
formatter.after({
  "duration": 661675000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "Search for items with Brands",
  "description": "",
  "id": "ebay-brand-outline;search-for-items-with-brands",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "Open Ebay Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "Search for \"\u003cItems\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Filter by \"\u003cBrand\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Select Color \"\u003cColor\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Select Size \"\u003cSize\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Select Conditions \"\u003cConditions\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Item list should have products of \"\u003cBrand\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "ebay-brand-outline;search-for-items-with-brands;",
  "rows": [
    {
      "cells": [
        "Items",
        "Brand",
        "Color",
        "Size",
        "Conditions"
      ],
      "line": 27,
      "id": "ebay-brand-outline;search-for-items-with-brands;;1"
    },
    {
      "cells": [
        "Shoes",
        "Nike",
        "Black",
        "Tall",
        "Pre-owned"
      ],
      "line": 28,
      "id": "ebay-brand-outline;search-for-items-with-brands;;2"
    },
    {
      "cells": [
        "Shirts",
        "Adidas",
        "Blue",
        "",
        ""
      ],
      "line": 29,
      "id": "ebay-brand-outline;search-for-items-with-brands;;3"
    },
    {
      "cells": [
        "Pants",
        "Unbranded",
        "Gray",
        "Juniors",
        "New"
      ],
      "line": 30,
      "id": "ebay-brand-outline;search-for-items-with-brands;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3376935100,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Search for items with Brands",
  "description": "",
  "id": "ebay-brand-outline;search-for-items-with-brands;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@SKYW-17"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "Open Ebay Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "Search for \"Shoes\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Filter by \"Nike\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Select Color \"Black\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Select Size \"Tall\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Select Conditions \"Pre-owned\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Item list should have products of \"Nike\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "EbayHomepageSteps.open_Ebay_Homepage()"
});
formatter.result({
  "duration": 872066100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shoes",
      "offset": 12
    }
  ],
  "location": "EbayHomepageSteps.search_for(String)"
});
formatter.result({
  "duration": 3551282500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nike",
      "offset": 11
    }
  ],
  "location": "EbaySearchResultSteps.filter_by(String)"
});
formatter.result({
  "duration": 5367543100,
  "error_message": "org.openqa.selenium.JavascriptException: javascript error: Unable to find owning document\n  (Session info: chrome\u003d102.0.5005.63)\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027RASEL\u0027, ip: \u0027192.168.1.6\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027x86\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 102.0.5005.63, chrome: {chromedriverVersion: 102.0.5005.61 (0e59bcc00cc4..., userDataDir: C:\\Users\\rasel\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:60627}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: c4413054f31ccbabbecb99a347f940a7\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:276)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.submit(RemoteWebElement.java:87)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy18.submit(Unknown Source)\r\n\tat upskill.ebay.pageAction.EbaySearchResultActions.filterBrand(EbaySearchResultActions.java:49)\r\n\tat upskill.ebay.stepDef.EbaySearchResultSteps.filter_by(EbaySearchResultSteps.java:18)\r\n\tat ✽.And Filter by \"Nike\"(EbayBrandOutline.feature:20)\r\n",
  "status": "failed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "Nike",
      "offset": 35
    }
  ],
  "location": "EbaySearchResultSteps.item_list_should_have_products_of(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 933684700,
  "status": "passed"
});
formatter.before({
  "duration": 2939589700,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Search for items with Brands",
  "description": "",
  "id": "ebay-brand-outline;search-for-items-with-brands;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@SKYW-17"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "Open Ebay Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "Search for \"Shirts\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Filter by \"Adidas\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Select Color \"Blue\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Select Size \"\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Select Conditions \"\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Item list should have products of \"Adidas\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "EbayHomepageSteps.open_Ebay_Homepage()"
});
formatter.result({
  "duration": 948891800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shirts",
      "offset": 12
    }
  ],
  "location": "EbayHomepageSteps.search_for(String)"
});
formatter.result({
  "duration": 4176197200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Adidas",
      "offset": 11
    }
  ],
  "location": "EbaySearchResultSteps.filter_by(String)"
});
formatter.result({
  "duration": 5668218100,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "Adidas",
      "offset": 35
    }
  ],
  "location": "EbaySearchResultSteps.item_list_should_have_products_of(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 625347400,
  "status": "passed"
});
formatter.before({
  "duration": 2900721500,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Search for items with Brands",
  "description": "",
  "id": "ebay-brand-outline;search-for-items-with-brands;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@SKYW-17"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "Open Ebay Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "Search for \"Pants\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Filter by \"Unbranded\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Select Color \"Gray\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Select Size \"Juniors\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Select Conditions \"New\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Item list should have products of \"Unbranded\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "EbayHomepageSteps.open_Ebay_Homepage()"
});
formatter.result({
  "duration": 1037904000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pants",
      "offset": 12
    }
  ],
  "location": "EbayHomepageSteps.search_for(String)"
});
formatter.result({
  "duration": 2613602700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Unbranded",
      "offset": 11
    }
  ],
  "location": "EbaySearchResultSteps.filter_by(String)"
});
formatter.result({
  "duration": 4970542700,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "Unbranded",
      "offset": 35
    }
  ],
  "location": "EbaySearchResultSteps.item_list_should_have_products_of(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 662345100,
  "status": "passed"
});
formatter.uri("EbayCartDropDown.feature");
formatter.feature({
  "line": 2,
  "name": "Ebay Cart Functionality",
  "description": "",
  "id": "ebay-cart-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 3212161900,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Add product to cart using drop down options",
  "description": "",
  "id": "ebay-cart-functionality;add-product-to-cart-using-drop-down-options",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Open Ebay Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Search for shirt",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Select the first shirt on item list",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Select Size",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Select Men Size",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Select Shade",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Select Quantity",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Add to shopping cart",
  "keyword": "Then "
});
formatter.match({
  "location": "EbayHomepageSteps.open_Ebay_Homepage()"
});
formatter.result({
  "duration": 1340434200,
  "status": "passed"
});
formatter.match({
  "location": "EbayHomepageSteps.search_for_shirt()"
});
formatter.result({
  "duration": 2026366000,
  "status": "passed"
});
formatter.match({
  "location": "EbaySearchResultSteps.select_the_first_shirt_on_item_list()"
});
formatter.result({
  "duration": 2311347300,
  "status": "passed"
});
formatter.match({
  "location": "EbayCartSteps.select_Size()"
});
formatter.result({
  "duration": 3797598000,
  "status": "passed"
});
formatter.match({
  "location": "EbayCartSteps.select_Men_Size()"
});
formatter.result({
  "duration": 2202179500,
  "status": "passed"
});
formatter.match({
  "location": "EbayCartSteps.select_Shade()"
});
formatter.result({
  "duration": 2097286800,
  "status": "passed"
});
formatter.match({
  "location": "EbayCartSteps.select_Quantity()"
});
formatter.result({
  "duration": 67863900,
  "status": "passed"
});
formatter.match({
  "location": "EbayCartSteps.add_to_shopping_cart()"
});
formatter.result({
  "duration": 20145640300,
  "status": "passed"
});
formatter.after({
  "duration": 662285500,
  "status": "passed"
});
formatter.uri("EbaySearchExcel.feature");
formatter.feature({
  "line": 2,
  "name": "Ebay Search Functionality",
  "description": "",
  "id": "ebay-search-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@SKYW-18"
    },
    {
      "line": 1,
      "name": "@E2E"
    }
  ]
});
formatter.before({
  "duration": 3078012700,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Search for Excel items",
  "description": "",
  "id": "ebay-search-functionality;search-for-excel-items",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Open Ebay Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Search item from Excel file data",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Item list should have only related products",
  "keyword": "Then "
});
formatter.match({
  "location": "EbayHomepageSteps.open_Ebay_Homepage()"
});
formatter.result({
  "duration": 1015308900,
  "status": "passed"
});
formatter.match({
  "location": "EbayHomepageSteps.search_item_from_Excel_file_data()"
});
formatter.result({
  "duration": 3004707800,
  "status": "passed"
});
formatter.match({
  "location": "EbaySearchResultSteps.item_list_should_have_only_related_products()"
});
formatter.result({
  "duration": 175585200,
  "status": "passed"
});
formatter.after({
  "duration": 665423100,
  "status": "passed"
});
formatter.uri("EbaySearchShoes.feature");
formatter.feature({
  "line": 2,
  "name": "Ebay Search Functionality",
  "description": "",
  "id": "ebay-search-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@SKYW-15"
    },
    {
      "line": 1,
      "name": "@E2E"
    }
  ]
});
formatter.before({
  "duration": 2924341100,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Search for Shoes",
  "description": "",
  "id": "ebay-search-functionality;search-for-shoes",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Open Ebay Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Search for shoes",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Item list should have only shoes related products",
  "keyword": "Then "
});
formatter.match({
  "location": "EbayHomepageSteps.open_Ebay_Homepage()"
});
formatter.result({
  "duration": 770271800,
  "status": "passed"
});
formatter.match({
  "location": "EbayHomepageSteps.searchshoes()"
});
formatter.result({
  "duration": 3497700700,
  "status": "passed"
});
formatter.match({
  "location": "EbaySearchResultSteps.item_list_should_have_only_shoes_related_products()"
});
formatter.result({
  "duration": 372231800,
  "error_message": "java.lang.AssertionError: expected [false] but found [true]\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:494)\r\n\tat org.testng.Assert.assertFalse(Assert.java:63)\r\n\tat org.testng.Assert.assertFalse(Assert.java:73)\r\n\tat upskill.ebay.pageAction.EbaySearchResultActions.verifyShoesItems(EbaySearchResultActions.java:40)\r\n\tat upskill.ebay.stepDef.EbaySearchResultSteps.item_list_should_have_only_shoes_related_products(EbaySearchResultSteps.java:13)\r\n\tat ✽.Then Item list should have only shoes related products(EbaySearchShoes.feature:7)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1038430300,
  "status": "passed"
});
formatter.uri("EbaySummaryMouseHover.feature");
formatter.feature({
  "line": 2,
  "name": "Ebay Summary Mousehover",
  "description": "",
  "id": "ebay-summary-mousehover",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 3089592200,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Ebay Summary Mousehover",
  "description": "",
  "id": "ebay-summary-mousehover;ebay-summary-mousehover",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Open Ebay Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Mouse Hover to MyEbay Summary",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Click on Summary",
  "keyword": "Then "
});
formatter.match({
  "location": "EbayHomepageSteps.open_Ebay_Homepage()"
});
formatter.result({
  "duration": 954970800,
  "status": "passed"
});
formatter.match({
  "location": "EbayHomepageSteps.mouse_Hover_to_MyEbay_Summary()"
});
formatter.result({
  "duration": 3174005000,
  "status": "passed"
});
formatter.match({
  "location": "EbayHomepageSteps.click_on_Summary()"
});
formatter.result({
  "duration": 130915700,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[contains(text(),\u0027Summary1\u0027)]\"}\n  (Session info: chrome\u003d102.0.5005.63)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027RASEL\u0027, ip: \u0027192.168.1.6\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027x86\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 102.0.5005.63, chrome: {chromedriverVersion: 102.0.5005.61 (0e59bcc00cc4..., userDataDir: C:\\Users\\rasel\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:61274}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 86428c60b2c14489e85c51ce01776539\n*** Element info: {Using\u003dxpath, value\u003d//a[contains(text(),\u0027Summary1\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:317)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:419)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.isEnabled(Unknown Source)\r\n\tat upskill.ebay.pageAction.EbayHomepageActions.clickSummary(EbayHomepageActions.java:86)\r\n\tat upskill.ebay.stepDef.EbayHomepageSteps.click_on_Summary(EbayHomepageSteps.java:39)\r\n\tat ✽.Then Click on Summary(EbaySummaryMouseHover.feature:7)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1306638700,
  "status": "passed"
});
formatter.uri("Shettyiframe.feature");
formatter.feature({
  "line": 2,
  "name": "Rahul Shetty iframe practice",
  "description": "",
  "id": "rahul-shetty-iframe-practice",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@SKYW-20"
    },
    {
      "line": 1,
      "name": "@E2E"
    }
  ]
});
formatter.before({
  "duration": 3011388900,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Iframe Practice",
  "description": "",
  "id": "rahul-shetty-iframe-practice;iframe-practice",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Open Shetty Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Click on iFrame Home",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "It should reload iframe homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "ShettyHomepageSteps.open_Shetty_Homepage()"
});
formatter.result({
  "duration": 7512268100,
  "status": "passed"
});
formatter.match({
  "location": "ShettyHomepageSteps.click_on_iFrame_Home()"
});
formatter.result({
  "duration": 40350100,
  "status": "passed"
});
formatter.match({
  "location": "ShettyHomepageSteps.it_should_reload_iframe_homepage()"
});
formatter.result({
  "duration": 5023744400,
  "status": "passed"
});
formatter.after({
  "duration": 693161600,
  "status": "passed"
});
});