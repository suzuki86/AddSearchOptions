window.onload = function(){
  var observer = new MutationObserver(function(mutations){
    if(!document.getElementById('qdr_m3')){
      addThreeMonth();
    }
    if(!document.getElementById('qdr_m6')){
      addSixMonth();
    }
  });
  var options = { subtree: true, childList: true, characterData: true }
  observer.observe(document.body, options);
}

function addThreeMonth(){
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
  m3.childNodes[0].textContent = '3 か月以内';
  if(document.getElementById('qdr_m6')){
    document.getElementById('qdr_y').parentNode.insertBefore(m3, document.getElementById('qdr_m6'));
  }else{
    document.getElementById('qdr_y').parentNode.insertBefore(m3, document.getElementById('qdr_y'));
  }
}

function addSixMonth(){
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
  m6.childNodes[0].textContent = '6 か月以内';
  document.getElementById('qdr_y').parentNode.insertBefore(m6, document.getElementById('qdr_y'));
}
