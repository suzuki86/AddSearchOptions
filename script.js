window.onload = function(){
  var googleLanguage = getGoogleLanguage();
  var hyphenPosition = googleLanguage.indexOf('-');
  var localeCode = (hyphenPosition >= 0) ? googleLanguage.substr(0, hyphenPosition) : googleLanguage;
  var observer = new MutationObserver(function(mutations){
    if(!document.getElementById('qdr_m3')){
      addThreeMonth(localeCode);
    }
    if(!document.getElementById('qdr_m6')){
      addSixMonth(localeCode);
    }
  });
  var options = { subtree: true, childList: true, characterData: true }
  observer.observe(document.body, options);
}

function getMessage(keyword, language){
  messages = {
    "en": {
      "past_3_months": "Past 3 months",
      "past_6_months": "Past 6 months"
    },
    "ja": {
      "past_3_months": "3 ヶ月以内",
      "past_6_months": "6 ヶ月以内"
    }
  };
  if(language in messages){
    return messages[language][keyword];
  }
}

function getGoogleLanguage(){
  return document.documentElement.lang;
}

function addThreeMonth(localeCode){
  if(document.getElementById('qdr_m') && document.getElementById('qdr_m').childNodes[0].nodeType !== 3){
    var m3 = document.getElementById('qdr_m').cloneNode(true);
    var mHref = m3.childNodes[0].getAttribute('href');
    var m3Href = mHref.replace(/qdr:m/, 'qdr:m3');
  }else if(document.getElementById('qdr_y')){
    var m3 = document.getElementById('qdr_y').cloneNode(true);
    var mHref = m3.childNodes[0].getAttribute('href');
    var m3Href = mHref.replace(/qdr:y/, 'qdr:m3');
  }else{
    return false;
  }
  m3.childNodes[0].setAttribute('href', m3Href);
  m3.setAttribute('id', 'qdr_m3');
  m3.childNodes[0].textContent = getMessage("past_3_months", localeCode);
  if(document.getElementById('qdr_m6')){
    document.getElementById('qdr_y').parentNode.insertBefore(m3, document.getElementById('qdr_m6'));
  }else{
    document.getElementById('qdr_y').parentNode.insertBefore(m3, document.getElementById('qdr_y'));
  }
}

function addSixMonth(localeCode){
  if(document.getElementById('qdr_m') && document.getElementById('qdr_m').childNodes[0].nodeType !== 3){
    var m6 = document.getElementById('qdr_m').cloneNode(true);
    var mHref = m6.childNodes[0].getAttribute('href');
    var m6Href = mHref.replace(/qdr:m/, 'qdr:m6');
  }else if(document.getElementById('qdr_y')){
    var m6 = document.getElementById('qdr_y').cloneNode(true);
    var mHref = m6.childNodes[0].getAttribute('href');
    var m6Href = mHref.replace(/qdr:y/, 'qdr:m6');
  }else{
    return false;
  }
  m6.childNodes[0].setAttribute('href', m6Href);
  m6.setAttribute('id', 'qdr_m6');
  m6.childNodes[0].textContent = getMessage("past_6_months", localeCode);
  document.getElementById('qdr_y').parentNode.insertBefore(m6, document.getElementById('qdr_y'));
}
