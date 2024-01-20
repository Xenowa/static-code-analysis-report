import Header from "./components/Header";
import { useState } from "react";
import MainView from "./components/MainView";
import SingleFileView from "./components/SingleFileView";


function App() {
  const [fileView, setFileView] = useState({
    viewToggle: false,
    requestedFileName: "",
    fileContents: {}
  })

  const dummyData = [{
    projectName: "sonar_bal_testing",
    scannedFiles: [
      {
        "startLine": 0,
        "startLineOffset": 28,
        "endLine": 2,
        "endLineOffset": 1,
        "ruleID": "S108",
        "message": "This function has 1 occurrences of checkpanic keyword. Please consider using the check keyword instead!",
        "issueType": "CHECK_VIOLATION",
        "reportedFilePath": "C:\\Users\\Tharana Wanigaratne\\Desktop\\BalWorkFile\\SonarQube-scans-testing\\sonar_bal_testing\\modules\\panicChecker\\panicChecker.bal"
      },
      {
        "startLine": 0,
        "startLineOffset": 25,
        "endLine": 0,
        "endLineOffset": 93,
        "ruleID": "S107",
        "message": "This function has 8 parameters, which is greater than the 7 authorized.",
        "issueType": "CHECK_VIOLATION",
        "reportedFilePath": "C:\\Users\\Tharana Wanigaratne\\Desktop\\BalWorkFile\\SonarQube-scans-testing\\sonar_bal_testing\\modules\\tooManyParameters\\tooManyParameters.bal"
      }
    ]
  }]

  function toggleSingleFileView(viewFile, fileName) {
    // Perform filtering and recieve the object with the file contents
    console.log(fileView)
    setFileView({
      viewToggle: viewFile,
      requestedFileName: fileName,
      fileContents: {
        "startLine": 0,
        "startLineOffset": 25,
        "endLine": 0,
        "endLineOffset": 93,
        "ruleID": "S107",
        "message": "This function has 8 parameters, which is greater than the 7 authorized.",
        "issueType": "CHECK_VIOLATION",
        "reportedFilePath": "C:\\Users\\Tharana Wanigaratne\\Desktop\\BalWorkFile\\SonarQube-scans-testing\\sonar_bal_testing\\modules\\tooManyParameters\\tooManyParameters.bal"
      }
    })
  }

  function toggleMainView() {
    setFileView({
      viewToggle: false,
      requestedFileName: "",
      fileContents: {}
    })
  }

  return (
    <>
      <Header />
      {fileView.viewToggle ?
        <SingleFileView toggleMainView={toggleMainView} fileView={fileView} /> :
        <MainView toggleSingleFileView={toggleSingleFileView} />

      }
    </>
  );
}

export default App