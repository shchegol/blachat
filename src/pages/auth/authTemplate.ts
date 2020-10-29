export default `
.row.justify-content-center
    .col-12.col-md-4 
        .row.mt-50 
            .col-12 
                header
                    h1.logo.logo_color_white BLABLA
              
                form 
                    .input-1
               
                    label.input.input_color_white.mt-20 
                        span.input__label Пароль
                        input(
                            type="password"
                            name="password"
                            class="input__field"
                            placeholder="Ваш пароль"
                        )
                        span.input__message

                    .button-1
               
                    p.text_align_center.mt-20 
                        a(
                            href="/registration"
                            class="text_color_white"
                        )
                            | Зарегестрироваться
`