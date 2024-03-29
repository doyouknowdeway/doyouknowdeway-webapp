# Каталог аренды спортивных товаров

## Описание приложения

Веб-приложение предназначено для просмотра, поиска и почасовой
аренды спортивного инвентаря.

**Работающее приложение можно увидеть по ссылке**:
http://45.147.160.96:8084/catalog

**Приложение предусмартривает три сценария использования**:
-	Просмотр каталога товаров, функционала сайта неавторизированным
пользователям.
-	Просмотр каталога товаров, функционала сайта, оформления аренды,
оплаты и проверки статуса аренды в кабинете для авторизированных
пользователей.
-	Просмотр каталога товаров, функционала сайта, изменение каталога,
карточек товаров, изменение данных пользователей и другое для
авторизированного администратора.

> В приложении используются современные веб-технологии, UI/UX приёмы
> дизайна, за счёт чего достигается высокое быстродействие и удобство
> пользования приложением.


## Цикл разработки

### Версирование:
Наименование и выпуск версий приложения придерживается следующего
шаблона: `vA.B.C-build`, \
**Где**: \
`A` — мажорная версия, \
`B` — минорная версия \
`C` — промежуточная,

`<build>` — тип сборки проекта (`dev`, `rel`, `rc`), разработка, релиз,
релиз-кандидат соответственно.

### Ветвление:
Две основные ветки проекта: `main`, `dev`, где в main хранятся
релизы, которые уже можно использовать в проекте,
`dev` — история коммитов и сборок во время разработки
Ветка `dev` может быть разбита на большее количество подветок
размножена ветками нововведений, - `feature`.
