import React from "react";
import { useParams } from "react-router-dom";

const MailboxDetails = ({ mailboxes }) => {
  const { mailboxId } = useParams()

  const selectedBox = mailboxes.find((mailbox) => (
    mailbox._id === Number(mailboxId)
  ));

  return (
    <div>
      <h1>Mailbox {selectedBox?._id}</h1>
      <h3>Details</h3>
      {selectedBox ? (
        <>
          <p>Boxholder: {selectedBox.boxHolder}</p>
          <p>Box Size: {selectedBox.boxSize}</p>
        </>
      ) : (
        <h4>Mailbox Not Found!</h4>
      )}
    </div>
  )
};

export default MailboxDetails;
