const express = require("express");
const puppeteer = require('puppeteer');
const app = express();
    (async function take() {
        const browser = await puppeteer.launch({headless:false});
        const page = await browser.newPage();
        await page.goto("https://www.google.com/search?q=react+jobs&ei=4duYYpLRJYq94-EPqfK90AE&uact=5&oq=react+jobs&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEIAEMggIABCABBDJAzIFCAAQkgMyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOgQIABBHOgUIABCRAjoUCC4QgAQQsQMQgwEQxwEQ0QMQ1AI6CAguEIAEELEDOgUILhCABDoLCAAQgAQQsQMQgwE6BAgAEEM6DgguEIAEELEDEMcBEKMCOgsILhDHARCvARCRAjoHCAAQyQMQQzoOCC4QgAQQsQMQxwEQ0QM6CAgAEIAEELEDOggILhCABBDUAjoLCC4QgAQQsQMQ1AI6DQgAELEDEIMBEMkDEEM6CAgAELEDEIMBOgoIABCxAxCDARANOgQIABANOgcIABDJAxANSgQIQRgASgQIRhgAUJseWIgzYOczaANwAngAgAGmAYgB5AqSAQQwLjExmAEAoAEBsAEAyAEIwAEB&sclient=gws-wiz&ibp=htl;jobs&sa=X&ved=2ahUKEwi546uOj4_4AhXh6zgGHQlPDQYQutcGKAF6BAgHEAY#htivrt=jobs&htidocid=DNXJc0LPw_4AAAAAAAAAAA%3D%3D&fpstate=tldetail",{waitUntil: "domcontentloaded"});
        const data = await page.evaluate(()=>{
           return  {
               title:Array.from(document.querySelectorAll(".BjJfJf.PUpOsf")).map(x=>x.textContent),
               company:Array.from(document.querySelectorAll(".vNEEBe")).map(y=>y.textContent),
               descrition:Array.from(document.querySelectorAll(".HBvzbc")).map(z=>z.textContent),
               location:Array.from(document.querySelectorAll(".sMzDkb")).map(p=>p.textContent)
           }
          })
  await browser.close();
  app.get("/reactjobs",async(req,res)=>{
    res.send(data)
})
app.listen(3000, () => {
    console.log("listening on port 3000")
  })

})()
