import "./ReportItem.scss"

const ReportItem = props => {
  return (
    <li class="report-item">
      <div class="report-item__img-container">
        <img
          class="report-item__img"
          src="./images/report.jpg"
          alt="report image"
        />
      </div>
      <div class="report-item__details">
        <p class="report-item__title">{props.report.title}</p>
        <p class="report-item__reporter">{props.report.reporter}</p>
      </div>
    </li>
  )
}

export default ReportItem
