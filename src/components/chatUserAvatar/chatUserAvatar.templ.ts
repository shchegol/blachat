export default `
if !classes
    - classes = ""
    
div(
    id=id
    _key=_key
    class="avatar " + classes
    title=title
)
    img(
        src=src
        alt=alt
        class="avatar__img"
    )
`;