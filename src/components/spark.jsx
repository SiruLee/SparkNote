function Spark({ setSubject, setBody, subject, body }) {
  return (
    <div className="contents">
      <input
        className="note"
        type="text"
        id="sparkTitle"
        placeholder="Subject"
        onChange={(event) => setSubject(event.target.value)}
        value={subject}
        spellCheck={false}
      ></input>
      <textarea
        className="note"
        type="text"
        id="sparkField"
        placeholder="Text..."
        onChange={(event) => setBody(event.target.value)}
        value={body}
        spellCheck={false}
      ></textarea>
    </div>
  );
}

export default Spark;
