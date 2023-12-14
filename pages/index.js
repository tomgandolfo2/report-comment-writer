import React, { useState } from "react";

const CommentGenerator = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [grade, setGrade] = useState("");
  const [logro, setLogro] = useState("");
  const [evidence, setEvidence] = useState("");
  const [optionalPart, setOptionalPart] = useState("");
  const [aliento, setAliento] = useState("");
  const [comment, setComment] = useState("");

  const copyToClipboard = () => {
    const commentElement = document.getElementById("comment");
    if (!commentElement) return;

    commentElement.select();
    commentElement.setSelectionRange(0, 99999); // For mobile devices

    document.execCommand("copy");
  };

  const generateComment = () => {
    let comment = "";

    // Generate the main part of the comment
    comment += `${name} `;

    // if (grade === "9" || grade === "10") {
    //   comment += `demuestra muy buen rendimiento. `;
    // } else if (grade === "7" || grade === "8") {
    //   comment += `demuestra buen rendimiento. `;
    // } else if (grade === "6") {
    //   comment += `presenta un rendimiento satisfactorio. `;
    // } else if (grade === "5") {
    //   comment += `presenta un rendimiento aceptable. `;
    // } else if (
    //   grade === "4" ||
    //   grade === "3" ||
    //   grade === "2" ||
    //   grade === "1"
    // ) {
    //   comment += `ha presentado un rendimiento bajo. `;
    // }

    // if (grade === "9" || grade === "10") {
    //   comment += `cumple con los requisitos del curso de manera destacada. `;
    // } else if (grade === "7" || grade === "8") {
    //   comment += `cumple con los requisitos del curso de manera satisfactoria. `;
    // } else if (grade === "6") {
    //   comment += `cumple con los requisitos del curso de manera aceptable. `;
    // } else if (grade === "5") {
    //   comment += `cumple con los requisitos del curso de manera aceptable. `;
    // } else if (
    //   grade === "4" ||
    //   grade === "3" ||
    //   grade === "2" ||
    //   grade === "1"
    // ) {
    //   comment += `ha presentado un rendimiento bajo. `;
    // }

    if (grade === "9" || grade === "10") {
      comment += `ha alcanzado los objetivos del curso con una calificación destacada. ¡Felicitaciones!`;
    } else if (grade === "7" || grade === "8") {
      comment += `ha alcanzado los objetivos del curso con una calificación satisfactoria.`;
    } else if (grade === "6") {
      comment += `ha alcanzado los objetivos del curso con una calificación aceptable.`;
    } else if (grade === "5") {
      comment += `ha alcanzado los objetivos del curso con una calificación aceptable.`;
    } else if (
      grade === "4" ||
      grade === "3" ||
      grade === "2" ||
      grade === "1"
    ) {
      comment += `ha presentado un rendimiento bajo. `;
    }

    // Generate the logro part based on the grade
    if ((logro && grade === "9") || (logro && grade === "10")) {
      comment += `Logra en gran medida ${logro}. `;
    } else if ((logro && grade === "7") || (logro && grade === "8")) {
      comment += `Logra en buena medida ${logro}. `;
    } else if ((logro && grade === "5") || (logro && grade === "6")) {
      comment += `Logra en cierta medida ${logro}. `;
    } else if (
      (logro && grade === "4") ||
      (logro && grade === "3") ||
      (logro && grade === "2") ||
      (logro && grade === "1")
    ) {
      comment += `Logra en escasa medida ${logro}. `;
    }

    if (evidence) {
      comment += `Exhibe un buen trabajo ${evidence}. `;
    }

    // Check if optional part is selected
    if (optionalPart) {
      if (grade === "9" || grade === "10") {
        comment += `Destaco ${optionalPart}. `;
      } else if (grade === "7" || grade === "8") {
        comment += `Valoro ${optionalPart}. `;
      } else {
        comment += `Reconozco ${optionalPart}. `;
      }
    }
    // Check if encouragement is selected
    if (aliento) {
      // Generate the "Lo/la aliento a" part with gender-specific pronoun
      // const pronoun = gender === "masculine" ? "Lo" : "La";
      // comment += `${pronoun} aliento a ${aliento}.`;
      comment += `${aliento}.`;
    }

    // Return the generated comment
    setComment(comment);
  };

  return (
    <div className="bg-gradient-to-br from-blue-100 to-blue-400 h-screen">
      <div className="max-w-md mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Comment Generator</h1>
        <div className="mb-4">
          <label htmlFor="name" className="font-bold mr-2">
            Name:{" "}
          </label>
          <input
            className="border border-gray-300 rounded p-2"
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="gender" className="font-bold mr-2">
            Gender:{" "}
          </label>
          <select
            className="border border-gray-300 rounded p-2"
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">Select Gender</option>
            <option value="masculine">Masculine</option>
            <option value="feminine">Feminine</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="grade" className="font-bold mr-2">
            Grade:{" "}
          </label>
          <select
            className="border border-gray-300 rounded p-2"
            id="grade"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
          >
            <option value="">Select Grade</option>
            <option value="10">10</option>
            <option value="9">9</option>
            <option value="8">8</option>
            <option value="7">7</option>
            <option value="6">6</option>
            <option value="5">5</option>
            <option value="4">4</option>
            <option value="3">3</option>
            <option value="2">2</option>
            <option value="1">1</option>
          </select>
        </div>
        {/* <div className="mb-4">
        <label htmlFor="logro" className="font-bold mr-2">
          Logro:{" "}
        </label>
        <select
          className="border border-gray-300 rounded p-2"
          id="logro"
          value={logro}
          onChange={(e) => setLogro(e.target.value)}
        >
          <option value="">Select Option</option>
          <option value="...">recordar</option>
          <option value="adquirir los contenidos trabajados durante las unidades">
            comprender
          </option>
          <option value="...">aplicar</option>
          <option value="...">analizar</option>
          <option value="...">sintetizar</option>
          <option value="...">evaluar</option>
          <option value="...">crear</option>
        </select>
      </div> */}
        <div className="mb-4">
          <label htmlFor="evidence" className="font-bold mr-2">
            Evidence:{" "}
          </label>
          <select
            className="border border-gray-300 rounded p-2"
            id="evidence"
            value={evidence}
            onChange={(e) => setEvidence(e.target.value)}
          >
            <option value="">Select Evidence</option>
            <option value="en las actividades de clase">en la actividad</option>
            <option value="en la prueba formativa">
              en la prueba formativa
            </option>
            <option value="en la prueba sumativa">en la prueba sumativa</option>
            <option value="al intervenir en clase">
              al intervenir en clase
            </option>
            <option value="en tareas grupales">en tareas grupales</option>
            <option value="en el parcial">en el parcial</option>
            <option value="...">...</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="optionalPart" className="font-bold mr-2">
            Destaco/Valoro/Reconozco:{" "}
          </label>
          <select
            className="border border-gray-300 rounded p-2"
            id="optionalPart"
            value={optionalPart}
            onChange={(e) => setOptionalPart(e.target.value)}
          >
            <option value="">Select Optional Part</option>
            <option value="su trabajo en clase">trabajo</option>
            <option value="su actitud en el aula">actitud</option>
            <option value="la buena disposición al aprendizaje">
              disposición
            </option>
            <option value="su esfuerzo al realizar tareas">esfuerzo</option>
            <option value="su buena predisposición frente a compañeros y compañeras">
              compañerismo
            </option>
            {/* Add more options as needed */}
          </select>
        </div>
        {/* <div className="mb-4">
          <label htmlFor="aliento" className="font-bold mr-2">
            Aliento a:{" "}
          </label>
          <select
            className="border border-gray-300 rounded p-2"
            id="aliento"
            value={aliento}
            onChange={(e) => setAliento(e.target.value)}
          >
            <option value="">Select Option</option>
            <option value="continuar así">continuar así</option>
            <option value="seguir trabajando así">seguir trabajando así</option>
            <option value="seguir mejorando">seguir mejorando</option>
            <option value="seguir los consejos del profesor para alcanzar mejor rendimiento">
              seguir consejos
            </option>
            <option value="prestar más atención a la clase">
              prestar atención
            </option>
            <option value="seguir esforzándose para lograr avanzar en el curso">
              seguir esforzándose
            </option>
            <option value="participar más en clase">participar más</option>
            <option value="evitar distraerse para lograr avanzar en el curso">
              evitar distraerse
            </option>
          </select>
        </div> */}

        <div className="mb-4">
          <label htmlFor="aliento" className="font-bold mr-2">
            Aliento a:{" "}
          </label>
          <select
            className="border border-gray-300 rounded p-2"
            id="aliento"
            value={aliento}
            onChange={(e) => setAliento(e.target.value)}
          >
            <option value="">Select Option</option>
            <option value="Se recomienda continuar así">continuar así</option>
            <option value="Se sugiere seguir trabajando así">
              seguir trabajando así
            </option>
            <option value="Se recomienda seguir mejorando">
              seguir mejorando
            </option>
            <option value="Se sugiere seguir los consejos del profesor para alcanzar mejor rendimiento">
              seguir consejos
            </option>
            <option value="Se recomienda prestar más atención a la clase">
              prestar atención
            </option>
            <option value="Se sugiere seguir esforzándose para lograr avanzar en el curso">
              seguir esforzándose
            </option>
            <option value="Se invita a participar más en clase">
              participar más
            </option>
            <option value="Se recomienda evitar distraerse para lograr avanzar en el curso">
              evitar distraerse
            </option>
          </select>
        </div>

        <button
          className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
          onClick={generateComment}
        >
          Generate Comment
        </button>
        {comment && (
          <div className="mt-4 flex items-center">
            <textarea
              id="comment"
              className="w-full h-48 border border-gray-300 rounded p-2 mr-2 resize-none"
              value={comment}
              readOnly
            />
            <button
              onClick={copyToClipboard}
              className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
            >
              Copy to Clipboard
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentGenerator;
