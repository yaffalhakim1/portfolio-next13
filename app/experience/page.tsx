import React from "react";

export default function ExperiencePage() {
  return (
    <>
      <div className="flex-col">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-4">
          Front End Developer -{" "}
          <span className="font-normal text-md">Universitas Diponegoro</span>
        </h3>
        <p className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 mt-2">
          December 2022 - April 2023
        </p>
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 leading-relaxed">
          In this project, I work with 1 backend engineer and 1 hardware
          engineer to create an internal web app for Diponegoro University
          (Computer Engineering Department). The web app function is to manage
          documents accreditations.
          <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400 mt-4">
            <li>Create designs for management website using Figma</li>
            <li>implement design to code using ReactJs with Typescript</li>
            <li>integrate client side to server side via REST API</li>
            <li>integrate client side to hardware side via Firebase RTDB</li>
            <li>implement features for management website (CRUD) </li>
          </ul>
        </p>
        <div className="border my-4" />

        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-4">
          Mobile Developer Intern -{" "}
          <span className="font-normal text-md">PT Errai Pasifik</span>
        </h3>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 mt-2">
          July 2022 - October 2023
        </time>
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
          In this project, I work with 1 Backend Engineer, 2 UI/UX Designer, and
          1 Project Manager to create an app using Flutter. The app function is
          to find tailor nearby.
          <ul className=" space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400 mt-4 leading-relaxed">
            <li>
              Designing UI (mobile app) for some screen and discussed it with
              Product Manager
            </li>
            <li>Slicing from design to a reusable</li>
            <li>clean code and build features such as making an appointment</li>
            <li>connect to REST APIs with Provider as State Manager</li>
          </ul>
        </p>
      </div>
    </>
  );
}
