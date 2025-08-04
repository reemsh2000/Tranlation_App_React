import React, { useEffect, useState } from "react";
import Field from "./components/field";
import Translate from "./components/translate";
import Languages from "./components/languages";
import "./styles.css";
export default function App() {
  const [language, seLanguage] = useState();
  const [text, seText] = useState();
  useEffect(()=>{
    console.log({text})

  },[text]);
  return (
    <div>
      <Field onChange={seText} value={text} />
      <Languages onLanguageChange={seLanguage} language={language} />
      <hr />
      <Translate text={text} language={language} />
    </div>
  );
}
