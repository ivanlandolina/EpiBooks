import React from "react";
import { Button, Modal, Form, Spinner } from "react-bootstrap";
import { useState } from "react";

function SingleComment({ comment, onEditOrDeleteComment, colorText}) {
  const [show, setShow] = useState(false);
  const [editedComment, setEditedComment] = useState(comment.comment);
  const [editedRate, setEditedRate] = useState(comment.rate);
  const [LoadingPut,setLoadingPut] = useState(false);
  const [LoadingDelete,setLoadingDelete] = useState(false);

  const handleDelete = async () => {
    const Api_Url = `https://striveschool-api.herokuapp.com/api/comments/${comment._id}`;
    const Api_Key =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODU5YjczYzRlZjFiYzAwMTVkZjVhZDEiLCJpYXQiOjE3NTQ0MjY1MTksImV4cCI6MTc1NTYzNjExOX0.iWysT1XtmFMR2gfm6MTDBflZid69eImuS5eOGpWNdyQ";
      setLoadingDelete(true);
    try {
      const response = await fetch(Api_Url, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
          authorization: "bearer " + Api_Key,
        },
      });

      if (response.ok) {
        onEditOrDeleteComment();
      } else {
        alert(
          `errore durante l'eliminazione del commento: ${response.statusText}`
        );
      }
    } catch (error) {
      alert(`errore durante l'eliminazione del commento: ${error.message}`);
    } finally{
      setTimeout(() => {
        setLoadingDelete(false);
      }, 1500);
        }
  };
  const handlePut = async () => {
    const Api_Url = `https://striveschool-api.herokuapp.com/api/comments/${comment._id}`;
    const Api_Key =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODU5YjczYzRlZjFiYzAwMTVkZjVhZDEiLCJpYXQiOjE3NTQ0MjY1MTksImV4cCI6MTc1NTYzNjExOX0.iWysT1XtmFMR2gfm6MTDBflZid69eImuS5eOGpWNdyQ";
      console.log("sto mandando",{editedComment, editedRate, elementId: comment.elementId})
      setLoadingPut(true);
    try {
      const response = await fetch(Api_Url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          authorization: "bearer " + Api_Key,
        },
        body: JSON.stringify({
          comment: editedComment,
          rate: editedRate,
          elementId: comment.elementId,
        }),
      });
      if (response.ok) {
       onEditOrDeleteComment();
       setTimeout(() => {
         setShow(false);
       }, 1500);
      } else {
        const errorText=await response.text();
        console.error("errore PUT: ", errorText)
        alert(
          `Errore durante l'aggiornamento del commento: ${response.status} - ${errorText}`
        );
      }
    } catch (error) {
      console.error("Errore di rete: ", error);
      alert(`Errore durante l'aggiornamento del commento: ${error.message}`);
    } finally{
      setTimeout(() => {
        setLoadingPut(false);
      }, 1500);
    }
  };

  return (
    <>
    <div className="d-flex justify-content-between border p-2 my-1">
      <div>
        <p style={{color:colorText}}>{comment.comment}</p>
        <small style={{color:colorText}}>Valutazione: {comment.rate} </small>
      </div>
      <div className="d-flex flex-column align-content-center gap-2">
        <Button
          type="submit"
          className="ms-2"
          variant="primary"
          onClick={() => setShow(true)}
          disabled={LoadingPut}
        >
          <i className="bi bi-pencil-fill"></i>
        </Button>
        <Button variant="danger" className="ms-2" onClick={handleDelete} disabled={LoadingDelete}>
          {LoadingDelete ? (<Spinner/>) : (<i className="bi bi-trash-fill"></i>)}
        </Button>
      </div>
    </div>

    <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modifica commento</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Commento</Form.Label>
              <Form.Control
                as="textarea"
                rows={2}
                value={editedComment}
                onChange={(e) => setEditedComment(e.target.value)}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Valutazione</Form.Label>
              <Form.Select
                value={editedRate}
                onChange={(e) => setEditedRate(e.target.value)}
              >
                {[1, 2, 3, 4, 5].map(n => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)} disabled={LoadingPut}>
            Annulla
          </Button>
          <Button variant="success" onClick={handlePut} disabled={LoadingPut}>
            {LoadingPut ? (<Spinner/>) : ( "Salva modifiche" )}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default SingleComment;