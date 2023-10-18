import React, { useEffect, useRef, useState } from "react";
// import { ReactMediaRecorder } from "react-media-recorder";
import OpenAI from "openai";
import regeneratorRuntime from "regenerator-runtime";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

import useClipboard from "react-use-clipboard";

const RecordingIcon = ({ classText }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={"w-12 h-12" + classText}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
      />
    </svg>
  );
};

const LessonPlan = () => {
  const textAreaRef = useRef(null);
  const [inputData, setInputData] = useState({
    topic: "",
  });
  const [resposeMessage, setResponseMessage] = useState(null);
  const [isCopied, setCopied] = useClipboard(resposeMessage, {
    successDuration: 3000,
  });

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
  const startListening = () => {
    resetTranscript();
    SpeechRecognition.startListening({ continuous: true });
  };

  const handleInputStateChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };
  const handleChat = async (payload) => {
    const openai = new OpenAI({
      apiKey: "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",
      dangerouslyAllowBrowser: true,
    });

    try {
      const chatCompletion = await openai.chat.completions.create({
        messages: [
          {
            role: "system",
            content: "You are a helpful assistant.",
          },
          {
            role: "user",
            content: payload,
          },
        ],
        model: "gpt-3.5-turbo",
      });

      const response = chatCompletion.choices[0].message.content;

      setResponseMessage(response);
    } catch (error) {
      console.error(error);
      // Handle errors here
    }
  };
  const getResponse = async (payload) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/lessonplan/generatetext`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );
      const data = await response.json();
      //   console.log("Data", data);
      setResponseMessage(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmitData = (e) => {
    e.preventDefault();
    handleChat(inputData.topic);
    // getResponse(inputData.topic);
  };
  //   const handleCopyToClipboard = () => {
  //     if (textAreaRef.current) {
  //       textAreaRef.current.select();
  //       document.execCommand("copy");
  //     }
  //   };
  const postAudioFile = async (formData) => {
    try {
      const response = await fetch(`http://localhost:8080/transcript/audio`, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      //   console.log("Success", data);
      setInputData({ ...inputData, topic: data.data });
    } catch (error) {
      console.log(error);
    }
  };

  //   const handleStop = async (blobUrl, blob) => {
  //     // console.log("Blob data", blob);
  //     const formData = new FormData();
  //     formData.append("file", blob, "myBlob.mp3");
  //     // console.log("file", formData);
  //     postAudioFile(formData);
  //   };
  useEffect(() => {
    setInputData({ ...inputData, topic: transcript });
  }, [transcript]);
  return (
    <div className="p-10">
      <div className="m-auto w-[600px] justify-center items-center text-center">
        <h2 className="text-white font-semibold">Speak</h2>

        <div className="mt-2">
          <button
            // onMouseDown={startListening}
            // onMouseOver={SpeechRecognition.stopListening}
            onClick={
              listening ? SpeechRecognition.stopListening : startListening
            }
            className="bg-white p-4 rounded-full"
          >
            <RecordingIcon
              classText={
                listening ? "animate-pulse text-red-600" : "text-sky-600"
              }
            />
          </button>
          <p className="mb-4 h-6">{listening ? "Recording...." : ""}</p>
        </div>
      </div>
      {/* <div className="m-auto w-[600px] justify-center items-center text-center">
        <h2>Speak</h2>
        <ReactMediaRecorder
          audio
          onStop={handleStop}
          render={({ status, startRecording, stopRecording }) => (
            <div className="mt-2">
              <button
                onMouseDown={startRecording}
                onMouseOver={stopRecording}
                className="bg-white p-4 rounded-full"
              >
                <RecordingIcon
                  classText={
                    status === "recording"
                      ? "animate-pulse text-red-600"
                      : "text-sky-600"
                  }
                />
              </button>
              <p className="mb-4 h-6">
                {status === "recording" ? "Recording...." : ""}
              </p>
            </div>
          )}
        />
      </div> */}
      <form className="w-[600px] m-auto" onSubmit={handleSubmitData}>
        <label for="chat" className="sr-only">
          Your message
        </label>
        <div className="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700">
          <textarea
            id="chat"
            rows="1"
            className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Topic"
            name="topic"
            value={inputData?.topic}
            onChange={handleInputStateChange}
            required
          ></textarea>
          <button
            type="submit"
            className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
          >
            <svg
              className="w-5 h-5 rotate-90"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 20"
            >
              <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
            </svg>
          </button>
        </div>
      </form>

      <div className="w-[600px] m-auto mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
        <div className="flex items-center justify-between px-3 py-2 border-b dark:border-gray-600">
          <p>Response</p>
          <button
            type="button"
            data-tooltip-target="tooltip-fullscreen"
            className="p-2 text-gray-500 rounded cursor-pointer sm:ml-auto hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
            // onClick={handleCopyToClipboard}
            onClick={setCopied}
          >
            {isCopied ? (
              "Copied"
            ) : (
              <svg
                className="h-6 w-6"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <rect x="8" y="8" width="12" height="12" rx="2" />{" "}
                <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2" />
              </svg>
            )}
          </button>
        </div>
        <div className="px-4 py-2 bg-white rounded-b-lg dark:bg-gray-800">
          <textarea
            id="editor"
            ref={textAreaRef}
            rows="8"
            className="block h-[400px] w-full px-0 text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
            placeholder=""
            value={resposeMessage}
            required
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default LessonPlan;
