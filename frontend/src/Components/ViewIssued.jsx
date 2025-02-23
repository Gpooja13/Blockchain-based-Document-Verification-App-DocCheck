import React, { useState } from "react";
import {
  MdDeleteOutline,
  MdOutlineLocationOn,
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIosNew,
} from "react-icons/md";
import { useGlobalContext } from "../context/context";
import { FaExternalLinkAlt, FaDownload } from "react-icons/fa";
import { FiAlertCircle } from "react-icons/fi";
import Modal from "../Components/Modal";
import { Link } from "react-router-dom";

export default function ViewIssued({ togglePage, currentPage }) {
  const {
    issueEvents,
    delIssueEvents,
    setShowModal,
    viewDocumentInNewTab,
    downloadDocument,
    contract,
    userAddress,
    setMessage,
    setLoading,
    setRefreshLog,
    hashcount,
    authorityInfo,
  } = useGlobalContext();

  const [delHash, setDelHash] = useState("");

  const deleteHash = async () => {
    setLoading(true);
    setMessage("Please confirm the transaction 🙂");

    try {
      if (delHash) {
        await contract.methods
          .deleteHash(delHash)
          .send({ from: userAddress })
          .on("transactionHash", (hash) => {
            setMessage("Please wait for the transaction to be mined 😴");
          })
          .on("receipt", (receipt) => {
            setMessage("Document Deleted !");
            setLoading(false);
          })
          .on("confirmation", (confirmationNr) => {
            console.log(confirmationNr);
            setShowModal(false);
            setRefreshLog(Math.random());
          })
          .on("error", (error) => {
            console.error(error.message);
            setMessage(error.message);
            setLoading(false);
          });
      }
    } catch (error) {
      console.error("Error in deleteHash:", error);
      setMessage("An error occurred while deleting the document.");
      setLoading(false);
    }
  };

  // useEffect(() => {
  //   getAuthorityInfo(userAddress);
  // }, []);

  return (
    <>
      <Modal deleteFunction={deleteHash} delRecord={delHash} title={"Record"} />
      <div className="mx-auto bg-white h-[68vh] p-10 rounded-3xl drop-shadow-lg  ">
        <div className="flex justify-center">
          {authorityInfo ? (
            <h3 className=" font-semibold absolute left-0 top-14 ml-10 flex items-center ">
              <MdOutlineLocationOn className="mr-1" />
              {authorityInfo}
            </h3>
          ) : (
            <h3 className=" font-semibold absolute left-0 top-12 ml-10 flex text-sm flex-col">
              <Link to={"/contact"}>
                <div className="flex items-center">
                  <FiAlertCircle className="mr-1" />
                  Not Registered as a Validator{" "}
                </div>
                <p className="ml-4 text-red-500">Contact us</p>
              </Link>
            </h3>
          )}
          <h2 className="font-semibold text-2xl">{`Document Issued (${hashcount}) `}</h2>
          <button
            type="button"
            onClick={togglePage}
            className="  flex items-center divide-x rounded-lg border border-gray-300 bg-white text-center text-sm font-medium text-secondary-700 shadow-sm hover:bg-gray-100 absolute right-0 mr-10"
          >
            <div className="flex items-center space-x-2 py-2.5 px-3">
              <span>
                {currentPage === 0 ? (
                  <span>View Issued</span>
                ) : (
                  <span>Add New</span>
                )}
              </span>
            </div>
            <div className="py-2.5 px-3">
              {currentPage === 0 ? (
                <MdOutlineArrowForwardIos />
              ) : (
                <MdOutlineArrowBackIosNew />
              )}
            </div>
          </button>
        </div>
        <hr className="mt-5 h-px border-0 bg-gray-300" />
        <div className="w-[65vw]">
          <div className="mt-5 h-[40vh] overflow-y-auto thin-scrollbar">
            {hashcount === 0 ? (
              <p className="w-full flex justify-center h-1/2 items-center">
                No Records
              </p>
            ) : (
              <ul>
                {issueEvents
                  .filter(
                    (log) =>
                      !delIssueEvents.some(
                        (delLog) =>
                          delLog.returnValues.minetime ===
                          log.returnValues.minetime
                      )
                  ) // Filter out deleted events
                  .map((log, index) => (
                    <li key={index} className="border-b pt-2 pb-5 mb-2">
                      <p>
                        <strong>Name: </strong> {log.returnValues.name}
                      </p>
                      <p>
                        <strong>Roll no: </strong> {log.returnValues.rollno}
                      </p>
                      <p>
                        <strong>Email: </strong> {log.returnValues.email}
                      </p>
                      <p>
                        <strong>Description: </strong>{" "}
                        {log.returnValues.description}
                      </p>
                      <div className="flex justify-between">
                        <p>
                          <strong>Registration Date: </strong>
                          {new Date(
                            Number(log.returnValues.minetime) * 1000
                          ).toLocaleDateString()}
                        </p>
                        <div className="flex justify-between items-center">
                          <button
                            className="text-gray-400 hover:text-blue-600 mr-5"
                            onClick={() =>
                              viewDocumentInNewTab(log.returnValues.ipfs_hash)
                            }
                          >
                            <FaExternalLinkAlt fontSize={"20px"} />
                          </button>
                          <button
                            className="text-gray-400 hover:text-green-600 mr-5"
                            onClick={() =>
                              downloadDocument(log.returnValues.ipfs_hash)
                            }
                          >
                            <FaDownload fontSize={"20px"} />
                          </button>
                          <button
                            onClick={() => {
                              setDelHash(log.returnValues.hash);
                              setShowModal(true);
                            }}
                          >
                            <MdDeleteOutline
                              fontSize={"28px"}
                              className="text-gray-400 hover:text-red-600 mr-5"
                            />
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
