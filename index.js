const express = require("express")

const app = express()

app.set("view engine", "ejs")

app.use("/design", express.static("assets/css"))

const port = process.env.PORT || 4000

app.get("/", (req, res) => {

  res.render("index", {
    address: "г. Мариуполь, проспект Победы, 48а",
    tel1: "(067) 634 -75 - 74",
    tel2: "(0637) 57 - 01 - 31",
    tel3: "(098) 266 - 43 - 89",
    workHours: "Пн - Пт",
    workHours2: "Сб - Вс",
    dataTime: "08:00",
    linkHome: "Главная",
    linkAbout: "О Клинике",
    linkService: "Наши Услуги",
    linkBlog: "Полезные Статьи",
    linkFaq: "FAQ",
    linkContact: "Контакты",
    linkQuestion: "Задать вопрос",
    copyright: "© 2020 example. All Rights Reserved.",
    heading: "Мы заботимся о",
    headingSpan: "ваших питомцах!",
  })

})

app.get("/about", (req, res) => {

  res.render("about", {
    address: "г. Мариуполь, проспект Победы, 48а",
    tel1: "(067) 634 -75 - 74",
    tel2: "(0637) 57 - 01 - 31",
    tel3: "(098) 266 - 43 - 89",
    workHours: "Пн - Пт",
    workHours2: "Сб - Вс",
    dataTime: "08:00",
    linkHome: "Главная",
    linkAbout: "О Клинике",
    linkService: "Наши Услуги",
    linkBlog: "Полезные Статьи",
    linkFaq: "FAQ",
    linkContact: "Контакты",
    linkQuestion: "Задать вопрос",
    copyright: "© 2020 example. All Rights Reserved.",
    aboutHeading: "О клинике",
  })

})

app.get("/services", (req, res) => {

  res.render("services", {
    address: "г. Мариуполь, проспект Победы, 48а",
    tel1: "(067) 634 -75 - 74",
    tel2: "(0637) 57 - 01 - 31",
    tel3: "(098) 266 - 43 - 89",
    workHours: "Пн - Пт",
    workHours2: "Сб - Вс",
    dataTime: "08:00",
    linkHome: "Главная",
    linkAbout: "О Клинике",
    linkService: "Наши Услуги",
    linkBlog: "Полезные Статьи",
    linkFaq: "FAQ",
    linkContact: "Контакты",
    linkQuestion: "Задать вопрос",
    copyright: "© 2020 example. All Rights Reserved.",
    aboutHeading: "О клинике",
  })

})

app.get("/blog", (req, res) => {

  res.render("blog", {
    address: "г. Мариуполь, проспект Победы, 48а",
    tel1: "(067) 634 -75 - 74",
    tel2: "(0637) 57 - 01 - 31",
    tel3: "(098) 266 - 43 - 89",
    workHours: "Пн - Пт",
    workHours2: "Сб - Вс",
    dataTime: "08:00",
    linkHome: "Главная",
    linkAbout: "О Клинике",
    linkService: "Наши Услуги",
    linkBlog: "Полезные Статьи",
    linkFaq: "FAQ",
    linkContact: "Контакты",
    linkQuestion: "Задать вопрос",
    copyright: "© 2020 example. All Rights Reserved.",
    aboutHeading: "О клинике",
  })

})

app.get("/faq", (req, res) => {

  res.render("faq", {
    address: "г. Мариуполь, проспект Победы, 48а",
    tel1: "(067) 634 -75 - 74",
    tel2: "(0637) 57 - 01 - 31",
    tel3: "(098) 266 - 43 - 89",
    workHours: "Пн - Пт",
    workHours2: "Сб - Вс",
    dataTime: "08:00",
    linkHome: "Главная",
    linkAbout: "О Клинике",
    linkService: "Наши Услуги",
    linkBlog: "Полезные Статьи",
    linkFaq: "FAQ",
    linkContact: "Контакты",
    linkQuestion: "Задать вопрос",
    copyright: "© 2020 example. All Rights Reserved.",
    aboutHeading: "О клинике",
  })

})

app.get("/contact", (req, res) => {

  res.render("contact", {
    address: "г. Мариуполь, проспект Победы, 48а",
    tel1: "(067) 634 -75 - 74",
    tel2: "(0637) 57 - 01 - 31",
    tel3: "(098) 266 - 43 - 89",
    workHours: "Пн - Пт",
    workHours2: "Сб - Вс",
    dataTime: "08:00",
    linkHome: "Главная",
    linkAbout: "О Клинике",
    linkService: "Наши Услуги",
    linkBlog: "Полезные Статьи",
    linkFaq: "FAQ",
    linkContact: "Контакты",
    linkQuestion: "Задать вопрос",
    copyright: "© 2020 example. All Rights Reserved.",
    aboutHeading: "О клинике",
  })

})

app.listen(port, () => {
  console.log("Server ready at https://localhost:" + port);
})