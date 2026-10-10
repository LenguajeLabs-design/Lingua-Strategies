const contactLocaleStore='lingua-strategies-language';
let contactLocale=localStorage.getItem(contactLocaleStore)||'en';
const contactTitles={en:'Contact Lenguaje Labs — Lingua Strategies',es:'Contacto — Lingua Strategies',zh:'联系 Lenguaje Labs｜Lingua Strategies'};
const contactStatusText={en:'Opening your email app…',es:'Abriendo tu aplicación de correo…',zh:'正在打开你的邮件应用…'};
const contactSubjectPrefix={en:'Lingua Strategies',es:'Lingua Strategies',zh:'Lingua Strategies'};

function applyContactLocale(){
  if(!['en','es','zh'].includes(contactLocale))contactLocale='en';
  document.documentElement.lang=contactLocale==='zh'?'zh-CN':contactLocale;
  document.title=contactTitles[contactLocale];
  document.querySelectorAll('[data-en]').forEach(element=>{element.textContent=element.dataset[contactLocale]||element.dataset.en;});
  document.querySelectorAll('[data-locale]').forEach(button=>{const active=button.dataset.locale===contactLocale;button.classList.toggle('active',active);button.setAttribute('aria-pressed',String(active));});
  document.querySelector('.language-switch').setAttribute('aria-label',contactLocale==='es'?'Idioma':contactLocale==='zh'?'语言':'Language');
}

document.querySelectorAll('[data-locale]').forEach(button=>button.addEventListener('click',()=>{contactLocale=button.dataset.locale;localStorage.setItem(contactLocaleStore,contactLocale);applyContactLocale();}));

document.querySelector('#contactForm').addEventListener('submit',event=>{
  event.preventDefault();
  const form=new FormData(event.currentTarget);
  const topicSelect=document.querySelector('#contactTopic');
  const topicLabel=topicSelect.options[topicSelect.selectedIndex].textContent;
  const name=String(form.get('name')).trim();
  const email=String(form.get('email')).trim();
  const message=String(form.get('message')).trim();
  const subject=`${contactSubjectPrefix[contactLocale]} — ${topicLabel}`;
  const body=`Hello Lenguaje Labs,\n\nName: ${name}\nEmail: ${email}\nTopic: ${topicLabel}\n\n${message}`;
  document.querySelector('#contactStatus').textContent=contactStatusText[contactLocale];
  window.location.href=`mailto:forozc1@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

applyContactLocale();
