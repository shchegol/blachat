export default `
.container
    .row.justify-content-center
        .col-12.col-md-4 
            .row.mt-50 
                .col-12 
                    header
                        h1.logo.logo_color_white BLABLA
                  
                    form 
                        | !{inputLogin}
                        | !{inputPassword}
                        | !{buttonSubmit}
                   
                        p.text_align_center.mt-20 
                            a(
                                href="/registration.html"
                                class="text_color_white"
                            )
                                | Зарегестрироваться
`