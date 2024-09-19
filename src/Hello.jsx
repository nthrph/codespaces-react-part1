import './Hello.css';
// export default function Hello(){
//     let name="Nitharee Punyachayan";
//     return (
//         <>
//         <h1> Hello World {name + "!!!"} </h1>
//         </>
//     )
// }

// ไม่รับค่า
// const Hello = function(){
//     let name="Nitharee Punyachayan";
//     return (<><h1> Hello World {name + "!!!"} </h1></>);
// }
// export default Hello;

// const Hello = function(props){
//     return (<><h1> Hello World {props.name + "!!!"} </h1></>);
// }
// export default Hello;

// const Hello = props=> <><h1> Hello World {props.name}{props.lastname} </h1></>;
// export default Hello;

// export default function Hello({firstname,lastname}){
//         return (<><h1> Hello World {firstname}  {lastname}</h1></>);
// }

export default function Hello({firstname,lastname = "Punyachayan " , age=22}){
    return (<><h1> Hello World {firstname}  {lastname}  age {age}</h1></>);
}
