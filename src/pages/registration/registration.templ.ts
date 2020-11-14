export default `
.container
    .row.justify-content-center 
        .col-12.col-md-6 
            .row.mt-50 
                .col-12 
                    header
                       h1.logo.logo_color_white BLABLA                                            
    
            form 
                .row.mt-50 
                    .col-6 
                        | !{inputName}
                    
                    .col-6 
                        | !{inputSecondName}
                    
                .row.mt-20 
                    .col-12 
                        | !{inputLogin}
                    
                .row.mt-20 
                    .col-6 
                        | !{inputEmail}
                    
                    .col-6 
                        | !{inputPhone}
                    
                
    
                .row.mt-20 
                    .col-6 
                        | !{inputPassword}
                    
                    .col-6 
                        | !{inputPasswordCheck}
                    
                
                .row.mt-40 
                    .col-12 
                        | !{buttonSubmit}
    
                        p.text_align_center.mt-20 
                            a(
                               href="/auth.html"
                               class="text_color_white"
                            )
                                | Войти  
`;