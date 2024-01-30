import "./NewReport.scss";

const NewReport = () => {
  return (
    <div class="new-report">
      <h1 class="new-report__heading">New Report</h1>
      <form
        class="new-report__form pendo-ignore"
        onsubmit={(e) => e.preventDefault()}>
        <label class="new-report__label" for="title">
          title
        </label>
        <input
          class="new-report__input pendo-ignore"
          type="text"
          name="title"
          onchange={(e) => console.log(e.target.value)}
        />
        <label class="new-report__label" for="body">
          body
        </label>
        <textarea
          class="new-report__input"
          name="body"
          cols="30"
          rows="10"></textarea>
        <button class="new-report__button">submit</button>
      </form>
    </div>
  );
};

export default NewReport;
