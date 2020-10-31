export default `
.row 
     .col 
         a(
            href="/index.html"
            class="btn-icon btn-icon_size_l mt-20"
            title="К чату"
         )
             i.material-icons.arrow_back
         
section.row.justify-content-center.profile 
     .col-4.text_align_center 
         img(
            src="/img/bg.jpg"
            alt="Александр Щеголь"
            class="profile__img"
         )
         
         h1.profile__title.mt-20 Александр Щеголь

         table.table.table_type_centered.mt-20 
             tr
                 td.table__title Почта:
                 td.table__text bla@bla.com
             tr
                 td.table__title Логин:
                 td.table__text ashchegol
         a(
            href="/profile-edit.html"
            class="btn btn_type_outline mt-40"
         )
             | ИЗМЕНИТЬ ДАННЫЕ
         
         p.text_align_center.mt-20 
             a(
                href="/auth.html"
                class="text_color_red"
             )
               | Выйти
`