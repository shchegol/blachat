export default `  
if !classes
    - classes = ""
    
button(
    id=id
    _key=_key
    type=type
    class="btn " + classes
) #{text}
`;