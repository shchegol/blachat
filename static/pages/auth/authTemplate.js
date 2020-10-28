export default `
.row.justify-content-center
    .col-12.col-md-4 
        .row.mt-50 
            .col-12 
                header
                    h1.logo.logo_color_white BLABLA
              
                form 
                    label.input.input_color_white.mt-50 
                        span.input__label Логин
                        input(
                            type="text"
                            name="login"
                            class="input__field"
                            placeholder="Ваш логин"
                        )
                        span.input__message 
               

                    label.input.input_color_white.mt-20 
                        span.input__label Пароль
                        input(
                            type="password"
                            name="password"
                            class="input__field"
                            placeholder="Ваш пароль"
                        )
                        span.input__message

                    button(
                        type="submit"
                        class="btn btn_type_outline btn_color_white mt-40"
                    )
                        | ВОЙТИ
               

                    p.text_align_center.mt-20 
                        a(
                            href="/registration"
                            class="text_color_white"
                        )
                            | Зарегестрироваться
`