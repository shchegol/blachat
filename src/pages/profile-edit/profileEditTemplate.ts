export default `
.row
    .col
        a(
            href="/"
            class="btn-icon btn-icon_size_l mt-20"
            title="К чату"
        )
            i.material-icons arrow_back
        
    

section.row.justify-content-center.profile
    .col-6.text_align_center
        form
            .row
                .col-12
                    label(
                        class="cursor-pointer"
                        title="Поменять фото"
                    )
                        img(
                            src="/img/bg.jpg"
                            alt="Александр Щеголь"
                            class="profile__img"
                        )
                        input(
                            type="file"
                            name="avatar"
                            hidden
                        )

            .row.mt-40
                .col-6
                    label.input
                        span.input__label Имя
                        input(
                            type="text"
                            name="first_name"
                            class="input__field"
                            placeholder="Ваше имя"
                            data-validation-type="name"
                        )
                        span.input__message

                .col-6
                    label.input
                        span.input__label Фамилия
                        input(
                            type="text"
                            name="second_name"
                            class="input__field"
                            placeholder="Ваша фамилия"
                            data-validation-type="name"
                        )
                        span.input__message

            .row.mt-20
                .col-6
                    label.input
                        span.input__label Логин
                        input(
                            type="text"
                            name="login"
                            class="input__field"
                            placeholder="Ваш логин"
                            data-validation-type="text"
                        )
                        span.input__message

                .col-6
                    label.input
                        span.input__label Отображаемое имя
                        input(
                            type="text"
                            name="display_name"
                            class="input__field"
                            placeholder="Как вас видят другие люди"
                            data-validation-type="text"
                        )
                        span.input__message

            .row.mt-20
                .col-6
                    label.input
                        span.input__label Почта
                        input(
                            type="text"
                            name="email"
                            class="input__field"
                            placeholder="Ваш email"
                            data-validation-type="email"
                        )
                        span.input__message

                .col-6
                    label.input
                        span.input__label Телефон
                        input(
                            type="text"
                            name="phone"
                            class="input__field"
                            placeholder="Ваш телефон"
                            data-validation-type="phone"
                        )
                        span.input__message

            .row.mt-20
                .col-12
                    h5.text_align_left Сменить пароль

            .row.mt-10
                .col-12
                    label.input
                        span.input__label Пароль
                        input(
                            type="password"
                            name="oldPassword"
                            class="input__field"
                            placeholder="Текущий пароль"
                            data-validation-type="password"
                        )
                        span.input__message

            .row.mt-20
                .col-6
                    label.input
                        span.input__label Новый пароль
                        input(
                            type="password"
                            name="newPassword"
                            class="input__field"
                            placeholder="Новый пароль"
                            data-validation-type="password"
                        )
                        span.input__message

                .col-6
                    label.input
                        span.input__label Новый пароль ещё раз
                        input(
                            type="password"
                            name="newPassword_check"
                            class="input__field"
                            placeholder="Новый пароль ещё раз"
                            data-validation-type="password"
                        )
                        span.input__message

            .row.mt-40
                .col-12
                    #button-3

        p.text_align_center.mt-20
            a(
                href="/profile"
                class="text_color_red"
            )
              | Отмена
`