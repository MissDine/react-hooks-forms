import React from "react";

// function Form() {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");

 
//   function handleFirstNameChange(event) {
//     setFirstName(event.target.value);
//   }
  
//   function handleLastNameChange(event) {
//     setLastName(event.target.value);
//   }

//   return (
//     <form>
//       <input type="text" onChange={handleFirstNameChange} value={firstName} />
// <input type="text" onChange={handleLastNameChange} value={lastName} />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default Form;

function Form(props) {
  return (
    <form>
      <input
        type="text"
        onChange={props.handleFirstNameChange}
        value={props.firstName}
      />
      <input
        type="text"
        onChange={props.handleLastNameChange}
        value={props.lastName}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;