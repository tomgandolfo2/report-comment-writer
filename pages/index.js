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

    // Generate the logro part based on the grade
    if ((logro && grade === "9") || (logro && grade === "10")) {
      comment += `logra en gran medida ${logro}.\n`;
    } else if ((logro && grade === "7") || (logro && grade === "8")) {
      comment += `logra en buena medida ${logro}.\n`;
    } else if ((logro && grade === "5") || (logro && grade === "6")) {
      comment += `logra en cierta medida ${logro}.\n`;
    } else if (
      (logro && grade === "4") ||
      (logro && grade === "3") ||
      (logro && grade === "2") ||
      (logro && grade === "1")
    ) {
      comment += `logra en escasa medida en ${logro}.\n`;
    }

    if (evidence && logro) {
      const pronoun =
        gender === "masculine"
          ? "Evidencia en el proceso de aprendizaje del alumno:"
          : "Evidencia en el proceso de aprendizaje de la alumna:";
      comment += `${pronoun} ${evidence}.\n`;
    } else if (!logro && evidence) {
      comment += `evidencia en el proceso de aprendizaje ${evidence}. \n`;
    }

    // Check if optional part is selected
    if (optionalPart) {
      if (grade === "9" || grade === "10") {
        comment += `Destaco que ha desarrollado habilidades de ${optionalPart}.\n`;
      } else if (grade === "7" || grade === "8") {
        comment += `Valoro que ha desarrollado habilidades de ${optionalPart}.\n`;
      } else {
        comment += `Reconozco que ha desarrollado habilidades de ${optionalPart}.\n`;
      }
    }
    // Check if encouragement is selected
    if (aliento) {
      // Generate the "Lo/la aliento a" part with gender-specific pronoun
      const pronoun = gender === "masculine" ? "Lo" : "La";
      comment += `${pronoun} aliento a ${aliento}.\n`;
    }

    // Return the generated comment
    setComment(comment);
  };

  return (
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
      <div className="mb-4">
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
          <option value="identificar puntos clave en los temas de clase">
            identificar
          </option>
          <option value="comparar ideas y sintetizarlas">comparar</option>
          <option value="analizar temas complejos">analizar</option>
          <option value="definir">definir</option>
          <option value="investigar información relevante">investigar</option>
          {/* Add more options here */}
        </select>
      </div>
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
          <option value="en la actividad">en la actividad</option>
          <option value="en la prueba formativa">en la prueba formativa</option>
          <option value="en la prueba sumativa">en la prueba sumativa</option>
          <option value="al intervenir en clase">al intervenir en clase</option>
          <option value="en el trabajo colaborativo">
            en el trabajo colaborativo
          </option>
          <option value="Etc.">Etc.</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="optionalPart" className="font-bold mr-2">
          Optional Part:{" "}
        </label>
        <select
          className="border border-gray-300 rounded p-2"
          id="optionalPart"
          value={optionalPart}
          onChange={(e) => setOptionalPart(e.target.value)}
        >
          <option value="">Select Optional Part</option>
          <option value="su trabajo">trabajo</option>
          <option value="su actitud">actitud</option>
          <option value="su disposición">disposición</option>
          <option value="su esfuerzo">esfuerzo</option>
          <option value="su compañerismo">compañerismo</option>
          {/* Add more options as needed */}
        </select>
      </div>
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
          <option value="continuar así">continuar así</option>
          <option value="seguir mejorando">seguir mejorando</option>
          <option value="seguir esforzándose">seguir esforzándose</option>
          {/* Add more options as needed */}
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
            className="w-full h-36 border border-gray-300 rounded p-2 mr-2 resize-none"
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
  );
};

export default CommentGenerator;
