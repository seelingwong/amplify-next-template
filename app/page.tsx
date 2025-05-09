"use server";

import { generateClient } from "aws-amplify/data";
import "./../app/app.css";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import { env } from '$amplify/env/secretVariable'; // the import is '$amplify/env/<function-name>'
Amplify.configure(outputs);


export default function App() {
  console.log("testing", env.API_KEY)


  return (
    <div>{env.API_KEY}</div>
  );
}
