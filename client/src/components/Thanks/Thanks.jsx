export function redirect () {  
    window.setTimeout( function(){
        window.location = "http://127.0.0.1:5173";
    }, 3000 ); 
}

export default function Thanks() {
    return (
        <>
            {redirect()}
            <h1>Gracias por su donación, nos estaremos comunicando con usted en breve</h1>
        </>
    )
}