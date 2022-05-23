import addAlias from "./images/add-alias.png"
import addDomain from "./images/add-domain.png"
import addSubdomain from "./images/add-subdomain.png"
import clock from "./images/clock.png"
import db from "./images/db.png"
import folder from "./images/folder.png"
import mailDomain from "./images/mail.png"
import mailFilter from "./images/mail-filter.png"
import users from "./images/users.png"

export const legendItems = [
  {
    src: mailDomain,
    description: 'Почтовые домены'
  },
  {
    src: users,
    description: 'FTP пользователи'
  },
  {
    src: folder,
    description: 'Работа с файлами'
  },
  {
    src: db,
    description: 'Базы данных'
  },
  {
    src: clock,
    description: 'Cron'
  },
  {
    src: mailFilter,
    description: 'Mail Filter'
  },
  {
    src: addDomain,
    description: 'Прикрепить домен'
  },
  {
    src: addAlias,
    description: 'Создать алиас'
  },
  {
    src: addSubdomain,
    description: 'Создать поддомен'
  },
]