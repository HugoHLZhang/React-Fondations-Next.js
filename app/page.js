import LikeButton from './like-button';

function Header({title}){
    console.log(title)
    return (<h1>{title ? title : "Default title"}</h1>)
}

export default function HomePage(){

    const names = ['hugo', 'lora', 'chloe'];
    return (<div>
        <Header title="React" />
        <Header />
        <ul>
            {
                names.map((name) => (
                    <li key={name}>{name}</li>
                ))
            }
        </ul>
        <LikeButton />
    </div>)
}
// REACT DOM method

// root.render(<HomePage />); //not valid code because it is not valid javascript


// Javascript DOM Method
// // Create a new H1 element
// const header = document.createElement('h1');
// // Create a new text node for the H1 element
// const text = 'Hello';
// const headerContent = document.createTextNode(text);
// // Append the text to the h1 element

// header.appendChild(headerContent);
// // Place h1 element inside the div
// app.appendChild(header);