const e=document.querySelector(".feedback-form");document.querySelector("input"),document.querySelector("textarea"),document.querySelector("button");let t={};e.addEventListener("input",(function(e){t[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(t))})),e.addEventListener("submit",(function(r){r.preventDefault(),t.email&&t.message?(console.log(t),alert("Данні успішно відправленні"),e.reset(),localStorage.removeItem("feedback-form-state")):alert(" Поля повинні бути заповнені")}));
//# sourceMappingURL=03-feedback.2dee6df9.js.map
