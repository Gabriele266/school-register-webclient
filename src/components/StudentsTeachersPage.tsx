import axios from 'axios';
import {StudentsSection} from "./students/StudentsSection";
import {TeachersSection} from "./teachers/TeachersSection";

export const instance = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
});

// TODO: Potremmo chiamarla semplicemente HomePage
export const StudentsTeachersPage = () => {

  return (
      <div className="flex flex-row justify-between">
          <StudentsSection/>
          <div className="p-0.5"></div>
        < TeachersSection />
      </div>
  );
};