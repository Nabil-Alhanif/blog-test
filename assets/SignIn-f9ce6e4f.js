import{d as h,r as u,u as w,o as r,c as i,a as e,w as c,v as d,t as g,e as f,F as k,s as _,g as y}from"./index-1ccaeeea.js";const b=e("h1",null," Login to Your Account ",-1),I={key:0},x={__name:"SignIn",setup(N){const p=h(),l=u(""),o=u(""),a=u(),m=w(),v=()=>{_(y(),l.value,o.value).then(s=>{console.log("Successfully logged in!"),p.$patch({displayName:s.user.displayName,email:s.user.email}),m.push("/")}).catch(s=>{switch(s.code){case"auth/invalid-email":a.value="Invalid email";break;case"auth/user-not-found":a.value="No account with that email was found";break;case"auth/wrong-password":a.value="Incorrect password";break;default:a.value="Email or password was incorrect";break}})};return(s,t)=>(r(),i(k,null,[b,e("p",null,[c(e("input",{type:"text",placeholder:"Email","onUpdate:modelValue":t[0]||(t[0]=n=>l.value=n)},null,512),[[d,l.value]])]),e("p",null,[c(e("input",{type:"password",placeholder:"Password","onUpdate:modelValue":t[1]||(t[1]=n=>o.value=n)},null,512),[[d,o.value]])]),a.value?(r(),i("p",I,g(a.value),1)):f("",!0),e("p",null,[e("button",{onClick:v}," Submit ")])],64))}};export{x as default};
